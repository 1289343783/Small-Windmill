package com.gallery.controller;

import com.gallery.common.result.ResponseResult;
import com.gallery.domain.dto.LoginUserDTO;
import com.gallery.service.LoginService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.validation.Valid;

@RestController
public class LoginController {

    @Resource
    private LoginService loginService;

    @PostMapping("/login")
    public ResponseResult login(@Valid @RequestBody LoginUserDTO user) {
        return loginService.login(user);
    }

    @PostMapping("/logout")
    public ResponseResult logout() {
        return loginService.logout();
    }
}
