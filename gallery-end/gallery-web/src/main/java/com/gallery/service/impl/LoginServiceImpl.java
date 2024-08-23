package com.gallery.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.crypto.SecureUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.gallery.common.result.ResponseResult;
import com.gallery.constants.SystemConstants;
import com.gallery.domain.dto.LoginUserDTO;
import com.gallery.domain.entity.UserInfo;
import com.gallery.domain.vo.UserInfoVo;
import com.gallery.domain.vo.UserLoginVo;
import com.gallery.enums.AppHttpCodeEnum;
import com.gallery.exception.SystemException;
import com.gallery.mapper.UserInfoMapper;
import com.gallery.service.LoginService;
import com.gallery.utils.Assert;
import com.gallery.utils.BeanCopyUtils;
import com.gallery.utils.RedisCache;
import com.gallery.utils.StpUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class LoginServiceImpl implements LoginService {
    @Resource
    private UserInfoMapper userMapper;

    @Resource
    private RedisCache redisCache;

    @Override
    public ResponseResult login(LoginUserDTO loginUserDTO) {
        // 验证用户名
        UserInfo user = userMapper.selectOne(new LambdaQueryWrapper<UserInfo>()
                .eq(UserInfo::getEmail, loginUserDTO.getEmail()));
        Assert.notNull(user, AppHttpCodeEnum.LOGIN_ERROR);

        // 验证密码
        if (!LoginRecord(user, loginUserDTO.getPassword())) {
            throw new SystemException(AppHttpCodeEnum.LOGIN_ERROR);
        }
        StpUtil.login(user.getId());
        // 将用户信息存入 redis
        String userId = user.getId().toString();
        UserInfoVo userInfo = BeanCopyUtils.copyBean(user, UserInfoVo.class);
        redisCache.setCacheObject(SystemConstants.REDIS_USER_ID_PREFIX + userId, userInfo);
        // 将 token 和用户信息返回给用户
        String token = StpUtil.getTokenValue();
        userInfo.setIsAdmin(user.getIsAdmin());
        UserLoginVo blogUserLoginVo = new UserLoginVo(token, userInfo);
        return ResponseResult.okResult(blogUserLoginVo);

    }

    @Override
    public ResponseResult logout() {
        // 从 redis 中删除用户信息
        redisCache.deleteObject(SystemConstants.REDIS_USER_ID_PREFIX + StpUtils.getUserId().toString());
        StpUtil.logout();
        return ResponseResult.okResult();
    }

    /**
     * 校验密码
     *
     * @param user     用户信息
     * @param password 用户登录密码
     * @return boolean
     */
    private boolean LoginRecord(UserInfo user, String password) {
        String md5Pwd = SecureUtil.md5(password + user.getSalt());
        if (!md5Pwd.equals(user.getPassword())) {
            return false;
        }
        // 登录成功
        return true;
    }
}
