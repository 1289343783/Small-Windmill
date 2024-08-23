package com.gallery.service;

import com.gallery.common.result.ResponseResult;
import com.gallery.domain.dto.LoginUserDTO;

public interface LoginService {
    ResponseResult logout();

    ResponseResult login(LoginUserDTO user);
}
