import http from "../utils/http";
const imgKey = "06c00e7dc34f4c3f95308459bc87db14";
/**
 * 上传图片
 * @param {File} file 图片文件
 * @param param
 * @returns promise
 */
export const uploadImageApi = (file, param) => {
    let formData = new FormData();
    let imgWidth = param?.imgWidth ? String(param.imgWidth) : "100";
    let imgHeight = param?.imgHeight ? String(param.imgHeight) : "100";
    formData.append("file", file);
    formData.append("imgKey", imgKey);
    formData.append("imgWidth", imgWidth);
    formData.append("imgHeight", imgHeight);
    formData.append("imgFormat", param?.imgFormat == undefined ? '' : param.imgFormat);
    formData.append("imgName", param?.imgName == undefined ? '' : param.imgName);
    formData.append("imgDesc", param?.imgDesc == undefined ? '' : param.imgDesc);
    return http.post("/api/file/upload", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};
