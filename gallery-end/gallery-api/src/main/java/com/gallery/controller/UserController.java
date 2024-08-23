package com.gallery.controller;

import com.gallery.common.result.ResponseResult;
import com.gallery.domain.dto.RegisterQueryDTO;
import com.gallery.domain.dto.UpdateUserDTO;
import com.gallery.domain.entity.UserInfo;
import com.gallery.service.UserInfoService;
import com.gallery.utils.StpUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {

    @Resource
    private UserInfoService userService;


    @GetMapping
    public ResponseResult getUser() {
        return userService.getUserInfo();
    }

    @PostMapping("/register")
    public ResponseResult register(@Valid @RequestBody RegisterQueryDTO register) {
        return userService.register(register);
    }

    @PostMapping("/update")
    public ResponseResult updateUser(@Valid @RequestBody UpdateUserDTO updateUserDTO) {
        return userService.updateUser(updateUserDTO);
    }

    @PostMapping("/set/avatar")
    public ResponseResult updateUser(MultipartFile avatar) throws Exception {
        return userService.updateUserAvatar(avatar);
    }

    @GetMapping("/key")
    public ResponseResult getUserKey() {
        UserInfo userInfo = userService.getUserInfo(StpUtils.getUserId());
        return ResponseResult.okResult(userInfo.getImgKey());
    }


}
