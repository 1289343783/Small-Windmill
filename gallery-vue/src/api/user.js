import http from "../utils/http";
/**
 * 获取用户信息
 */
export const getUserInfoApi = () => {
    return http.get('/api/user');
};
/**
 * 获取用户列表
 * @param data
 */
export const registerApi = (data) => {
    return http.post('/api/user/register', data);
};
/**
 * 修改用户信息
 * @param param 参数
 */
export const updateUserApi = (param) => {
    return http.post('/api/user/update', param);
};
/**
 * 上传图片
 * @param {File} file 图片文件
 * @returns promise
 */
export const updateUserAvatarApi = (file) => {
    let formData = new FormData();
    formData.append("avatar", file);
    return http.post("/api/user/set/avatar", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};
/**
 * 获取用户密钥
 */
export const getUserKey = () => {
    return http.get('/api/user/key');
};
