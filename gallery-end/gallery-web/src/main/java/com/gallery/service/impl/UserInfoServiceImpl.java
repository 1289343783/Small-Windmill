package com.gallery.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.RandomUtil;
import cn.hutool.crypto.SecureUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.gallery.common.result.ResponseResult;
import com.gallery.config.MinioConfig;
import com.gallery.domain.dto.RegisterQueryDTO;
import com.gallery.domain.dto.UpdateUserDTO;
import com.gallery.domain.entity.UserInfo;
import com.gallery.domain.vo.UserInfoVo;
import com.gallery.enums.AppHttpCodeEnum;
import com.gallery.exception.SystemException;
import com.gallery.service.UserInfoService;
import com.gallery.mapper.UserInfoMapper;
import com.gallery.utils.Assert;
import com.gallery.utils.BeanCopyUtils;
import com.gallery.utils.MinIOUtils;
import com.gallery.utils.StpUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.File;
import java.io.IOException;

/**
 * @author wdnmd
 * @description 针对表【user_info(用户信息表)】的数据库操作Service实现
 * @createDate 2024-08-19 00:00:14
 */
@Service
public class UserInfoServiceImpl extends ServiceImpl<UserInfoMapper, UserInfo>
        implements UserInfoService {

    @Resource
    private MinioConfig minIOConfig;

    @Override
    public ResponseResult getUserInfo() {
        Long userId = StpUtils.getUserId();
        UserInfo user = getById(userId);
        if (user != null)
            return ResponseResult.okResult(BeanCopyUtils.copyBean(user, UserInfoVo.class));

        return ResponseResult.errorResult(AppHttpCodeEnum.NEED_LOGIN);
    }

    @Override
    public ResponseResult register(RegisterQueryDTO registerQuery) {
        // 查询用户是否已经存在
        LambdaQueryWrapper<UserInfo> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(UserInfo::getEmail, registerQuery.getEmail());
        UserInfo sameNameUser = getOne(wrapper);
        Assert.isNull(sameNameUser, AppHttpCodeEnum.USERNAME_EXIST);

        // 查询邮箱是否已经存在
        LambdaQueryWrapper<UserInfo> sameEmailWrapper = new LambdaQueryWrapper<>();
        sameEmailWrapper.eq(UserInfo::getEmail, registerQuery.getEmail());
        UserInfo sameEmailUser = getOne(sameEmailWrapper);
        Assert.isNull(sameEmailUser, AppHttpCodeEnum.EMAIL_EXIST);

        String salt = RandomUtil.randomString(32);
        String md5Pwd = SecureUtil.md5(registerQuery.getPassword() + salt);
        UserInfo userInfo = new UserInfo();
        BeanUtil.copyProperties(registerQuery, userInfo);
        // 添加用户
        userInfo.setPassword(md5Pwd);
        userInfo.setSalt(salt);
        userInfo.setImgKey(IdUtil.simpleUUID());
        save(userInfo);
        return ResponseResult.okResult();
    }

    /**
     * 修改用户头像
     *
     * @param avatar 头像
     * @return ResponseResult
     * @throws Exception
     */
    @Override
    public ResponseResult updateUserAvatar(MultipartFile avatar) throws Exception {
        if (avatar == null) {
            throw new SystemException(AppHttpCodeEnum.PARAM_NOT_VALID);
        }
        String avatarName = avatar.getOriginalFilename();
        try {
            // 处理上传文件的逻辑
            MinIOUtils.uploadFile(minIOConfig.getBucketName(), avatarName, avatar.getInputStream());
            String url = minIOConfig.getFileHost() + "/" + minIOConfig.getBucketName() + "/" + avatarName;
            UserInfo userInfo = getById(StpUtils.getUserId());
            userInfo.setAvatar(url);
            LambdaQueryWrapper<UserInfo> wrapper = new LambdaQueryWrapper<>();
            wrapper.eq(UserInfo::getId, userInfo.getId());
            update(userInfo, wrapper);
            //返回图片链接
            return ResponseResult.okResult();
        } catch (IOException e) {
            e.printStackTrace();
            //回滚事务
        } finally {
            if (avatar.getOriginalFilename() != null) {
                File tempFile = new File(System.getProperty("java.io.tmpdir") + File.separator + avatarName);
                if (tempFile.exists()) {
                    boolean deleted = tempFile.delete();
                    if (!deleted) {
                        // 处理删除临时文件失败的情况
                        System.err.println("删除临时文件失败：" + tempFile.getAbsolutePath());
                    }
                }
            }
        }
        return ResponseResult.errorResult(AppHttpCodeEnum.SYSTEM_ERROR);
    }

    @Override
    public ResponseResult updateUser(UpdateUserDTO updateUserDTO) {
        if (updateUserDTO.getId() == null) {
            throw new SystemException(AppHttpCodeEnum.RESOURCE_NOT_EXIST);
        }
        UserInfo userInfo = getUserByAdmin(updateUserDTO.getId());
        userInfo.setId(StpUtils.getUserId());
        userInfo.setUserName(updateUserDTO.getUserName());
        if (updateUserDTO.getPassword() != null && !updateUserDTO.getPassword().isEmpty()) {
            String salt = RandomUtil.randomString(32);
            String md5Pwd = SecureUtil.md5(updateUserDTO.getPassword() + salt);
            userInfo.setSalt(salt);
            userInfo.setPassword(md5Pwd);
        }
        LambdaQueryWrapper<UserInfo> wrapper = new LambdaQueryWrapper<>();
        update(userInfo, wrapper.eq(UserInfo::getId, userInfo.getId()));
        //返回图片链接
        return ResponseResult.okResult();
    }

    /**
     * 获取用户上传的Key
     *
     * @return ResponseResult
     */
    @Override
    public UserInfo getUserInfo(Long id) {
        UserInfo userInfo = getById(id);
        if (userInfo == null) {
            throw new SystemException(AppHttpCodeEnum.RESOURCE_NOT_EXIST);
        }
        return userInfo;
    }

    public UserInfo getUserByAdmin(Long id) {
        Long userId = StpUtils.isAdmin() ? id : StpUtils.getUserId();
        UserInfo user = getById(userId);
        if (user == null) {
            throw new SystemException(AppHttpCodeEnum.RESOURCE_NOT_EXIST);
        }
        return user;
    }


}




