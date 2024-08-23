import {IResponseType, pageDataInfo} from "../types/shims-axios";
import http from "../utils/http";

/**
 * 用户登录接口
 * @param email
 * @param password
 */
export const loginApi = (email: string, password: string) => {
    let param = {email: email, password: password};
    return http.post<IResponseType<ILoginInfo>>('/api/login', param)
}

/**
 * 用户注销
 * @returns promise
 */
export const logoutApi = () => {
    return http.post<IResponseType>("/api/logout"
    );
}