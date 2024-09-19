import http from "../utils/http";
/**
 * 用户登录接口
 * @param email
 * @param password
 */
export const loginApi = (email, password) => {
    let param = { email: email, password: password };
    return http.post('/api/login', param);
};
/**
 * 用户注销
 * @returns promise
 */
export const logoutApi = () => {
    return http.post("/api/logout");
};
