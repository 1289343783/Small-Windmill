package com.gallery.service;

import com.gallery.common.result.ResponseResult;
import com.gallery.domain.dto.GalleryQueryDTO;
import com.gallery.domain.dto.UpdateGalleryDTO;
import com.gallery.domain.dto.UploadGalleryDto;
import com.gallery.domain.entity.GalleryImages;
import com.baomidou.mybatisplus.extension.service.IService;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author wdnmd
 * @description 针对表【gallery_images(图片信息表)】的数据库操作Service
 * @createDate 2024-08-19 00:00:14
 */
public interface GalleryImagesService extends IService<GalleryImages> {

    /**
     * 上传文件
     *
     * @param galleryDto 参数信息
     * @return ResponseResult
     * @throws IOException
     */
    ResponseResult saveGallery(UploadGalleryDto galleryDto) throws Exception;

    /**
     * 删除图片
     *
     * @param id id
     * @return ResponseResult
     * @throws Exception
     */
    ResponseResult getGalleryById(Long id);

    /**
     * 获取文件列表
     *
     * @param galleryQueryDTO 参数
     * @return ResponseResult
     */
    ResponseResult getGalleryPageList(GalleryQueryDTO galleryQueryDTO);

    /**
     * 修改图片信息
     *
     * @param updateGalleryDTO 参数
     * @return ResponseResult
     */
    ResponseResult updateGalleryById(UpdateGalleryDTO updateGalleryDTO);

    /**
     * 删除图
     *
     * @param id id
     * @return ResponseResult
     */
    ResponseResult deleteGalleryById(Long id);

    GalleryImages getOneGallery(Long id);

    /**
     * 下载文件
     *
     * @param fileName 文件名
     * @param response HttpServletResponse
     */
    void downloadFile(String imgKeyNum, String fileName, HttpServletResponse response);
}
