const TOKEN_KEY = "token";
const USER_KEY = "userInfo";
const LOGIN_KEY = "loginInfo";
const isLogin = () => {
    return !!localStorage.getItem(TOKEN_KEY);
};
/**
 * 获取令牌
 * @returns token
 */
const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};
/**
 * 设置令牌
 * @param {string} token 令牌
 */
const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};
/**
 * 移除令牌
 */
const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};
/**
 * 获取用户信息
 * @returns userInfo
 */
const getUserInfo = () => {
    const userInfo = localStorage.getItem(USER_KEY);
    if (userInfo !== null) {
        return JSON.parse(userInfo);
    }
    return null;
};
/**
 * 设置用户信息
 * @param {object} userInfo 用户信息
 */
const setUserInfo = (userInfo) => {
    localStorage.setItem(USER_KEY, JSON.stringify(userInfo));
};
/**
 * 获取登录信息
 */
const getLoginInfo = () => {
    const loginInfo = localStorage.getItem(LOGIN_KEY);
    if (loginInfo !== null) {
        return JSON.parse(loginInfo);
    }
    return null;
};
/**
 * 设置登录信息
 * @param loginInfo
 */
const setLoginInfo = (loginInfo) => {
    localStorage.setItem(LOGIN_KEY, JSON.stringify(loginInfo));
};
const removeLoginInfo = () => {
    localStorage.removeItem(LOGIN_KEY);
};
/**
 * 移除用户信息
 */
const removeUserInfo = () => {
    localStorage.removeItem(USER_KEY);
};
// persist:root
const clearAll = () => {
    localStorage.clear();
};
export { isLogin, getToken, setToken, clearToken, getUserInfo, setUserInfo, getLoginInfo, setLoginInfo, removeUserInfo, removeLoginInfo, clearAll };
