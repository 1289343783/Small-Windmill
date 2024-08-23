import {IResponseType, pageDataInfo} from "../types/shims-axios";
import http from "../utils/http";

/**
 * 获取发表的图列表
 * @param {number} pageNum 当前页码
 * @param {number} pageSize 每一页的显示的数量
 * @param {string} date 图的发表日期，格式为 `yyyy/MM`，比如 `2021/1` 或 `2021/02`，可以不传
 * @returns promise
 */
export const getGalleryPageListApi = (pageNum: number, pageSize: number, date?: string) => {
    let params = {pageNum, pageSize, date}
    return http.get<IResponseType<pageDataInfo<IGallery[]>>>("/api/gallery/page", {
        params: params
    });
}
/**
 * 获取图详情
 * @param id 图的id
 */
export const getGalleryDetailApi = (id: number) => {
    return http.get<IResponseType<IGallery>>(`/api/gallery/${id}`);
}
/**
 * 修改图信息
 * @param data
 */
export const updateGalleryApi = (data: IUpdateGallery) => {
    return http.post<IResponseType>("/api/gallery/update", data);
}
/**
 * 删除图
 * @param id
 */
export const deleteGalleryApi = (id: number) => {
    return http.delete<IResponseType>(`/api/gallery/delete/${id}`);
}