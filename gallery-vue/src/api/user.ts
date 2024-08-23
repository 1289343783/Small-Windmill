import {IResponseType, pageDataInfo} from "../types/shims-axios";
import http from "../utils/http";

/**
 * 获取用户信息
 */
export const getUserInfoApi = () => {
    return http.get<IResponseType<IUserInfo>>('/api/user')
}
/**
 * 获取用户列表
 * @param data
 */
export const registerApi = (data: IRegister) => {
    return http.post<IResponseType<IUserInfo>>('/api/user/register', data)
}
/**
 * 修改用户信息
 * @param param 参数
 */
export const updateUserApi = (param: IUpdateUser) => {
    return http.post<IResponseType<IUserInfo>>('/api/user/update', param)
}

/**
 * 上传图片
 * @param {File} file 图片文件
 * @returns promise
 */
export const updateUserAvatarApi = (file: File) => {
    let formData = new FormData();
    formData.append("avatar", file)
    return http.post<IResponseType<IGallery>>("/api/user/set/avatar", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
/**
 * 获取用户密钥
 */
export const getUserKey = () => {
    return http.get<IResponseType>('/api/user/key')
}