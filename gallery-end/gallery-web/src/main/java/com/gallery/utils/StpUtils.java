package com.gallery.utils;

import cn.dev33.satoken.stp.StpUtil;
import com.gallery.constants.SystemConstants;
import com.gallery.domain.vo.UserInfoVo;
import com.gallery.enums.AppHttpCodeEnum;
import com.gallery.exception.SystemException;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class StpUtils {


    @Resource
    private RedisCache redisCache;


    /**
     * 获取当前登录用户id
     *
     * @return Integer
     */
    public static Long getUserId() {
        long userId;
        try {
            userId = StpUtil.getLoginIdAsLong();
        } catch (Exception e) {
            throw new SystemException(AppHttpCodeEnum.NEED_LOGIN);
        }
        return userId;
    }

    public static Boolean isAdmin() {
        Long id = getUserId();
        return SystemConstants.ADMIN_USER.equals(id);
    }

    /**
     * 获取当前登录用户新
     *
     * @return User
     */
    public UserInfoVo getLoginUser() {
        int loginId = StpUtil.getLoginIdAsInt();
        if (loginId == -1) {
            throw new SystemException(AppHttpCodeEnum.NEED_LOGIN);
        }
        UserInfoVo UserInfoVo = redisCache.getCacheObject(SystemConstants.REDIS_USER_ID_PREFIX + loginId);
        if (UserInfoVo == null) {
            throw new SystemException(AppHttpCodeEnum.RESOURCE_NOT_EXIST);
        }
        return UserInfoVo;
    }
}
