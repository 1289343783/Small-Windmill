import http from "../utils/http";
/**
 * 获取发表的图列表
 * @param {number} pageNum 当前页码
 * @param {number} pageSize 每一页的显示的数量
 * @param {string} date 图的发表日期，格式为 `yyyy/MM`，比如 `2021/1` 或 `2021/02`，可以不传
 * @returns promise
 */
export const getGalleryPageListApi = (pageNum, pageSize, date) => {
    let params = { pageNum, pageSize, date };
    return http.get("/api/gallery/page", {
        params: params
    });
};
/**
 * 获取图详情
 * @param id 图的id
 */
export const getGalleryDetailApi = (id) => {
    return http.get(`/api/gallery/${id}`);
};
/**
 * 修改图信息
 * @param data
 */
export const updateGalleryApi = (data) => {
    return http.post("/api/gallery/update", data);
};
/**
 * 删除图
 * @param id
 */
export const deleteGalleryApi = (id) => {
    return http.delete(`/api/gallery/delete/${id}`);
};
