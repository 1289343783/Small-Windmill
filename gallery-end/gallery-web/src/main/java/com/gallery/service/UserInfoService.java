package com.gallery.service;

import com.gallery.common.result.ResponseResult;
import com.gallery.domain.dto.RegisterQueryDTO;
import com.gallery.domain.dto.UpdateUserDTO;
import com.gallery.domain.entity.UserInfo;
import com.baomidou.mybatisplus.extension.service.IService;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author wdnmd
 * @description 针对表【user_info(用户信息表)】的数据库操作Service
 * @createDate 2024-08-19 00:00:14
 */
public interface UserInfoService extends IService<UserInfo> {
    /**
     * 获取用户信息
     *
     * @return ResponseResult
     */
    ResponseResult getUserInfo();

    /**
     * 用户注册
     *
     * @param registerQuery
     * @return ResponseResult
     */
    ResponseResult register(RegisterQueryDTO registerQuery);

    /**
     * 修改用户头像
     *
     * @param avatar 头像
     * @return ResponseResult
     * @throws Exception
     */
    ResponseResult updateUserAvatar(MultipartFile avatar) throws Exception;

    /**
     * 修改用户信息
     *
     * @param updateUserDTO
     * @return ResponseResult
     */
    ResponseResult updateUser(UpdateUserDTO updateUserDTO);

    /**
     * 获取用户信息
     *
     * @return ResponseResult
     */
    UserInfo getUserInfo(Long id);

    /**
     * 根据imgKey获取用户信息
     * @param key 用户上传key
     * @return UserInfo
     */
    UserInfo getUserInfoByUploadKey(String key);
}
