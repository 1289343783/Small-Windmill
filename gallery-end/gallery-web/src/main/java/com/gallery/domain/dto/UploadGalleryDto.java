package com.gallery.domain.dto;

import cn.hutool.crypto.digest.DigestUtil;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.gallery.domain.entity.GalleryImages;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Objects;

@Data
public class UploadGalleryDto {
    /**
     * 图片宽度
     */
    private Integer imgWidth;

    /**
     * 图片高度
     */
    private Integer imgHeight;

    /**
     * 图片格式
     */
    private String imgFormat;

    /**
     * 图片名称
     */
    private String imgName;

    /**
     * 图片描述
     */
    private String imgDesc;
    /**
     * 上传
     */
    private String imgKey;

    /**
     * 文件
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private MultipartFile file;

    /**
     * 赋值操作
     *
     * @return GalleryImages
     * @throws IOException
     */
    public GalleryImages getGalleryInfo() throws IOException {
        if (this.getImgName() == null || this.getImgName().isEmpty()) {
            this.setImgName(this.getFile().getOriginalFilename());
        }
        Integer imgWidth = this.imgWidth;
        Integer imgHeight = this.imgHeight;
        String imgFormat = Objects.requireNonNull(this.file.getOriginalFilename()).substring(this.file.getOriginalFilename().lastIndexOf("."));
        String imgHash = DigestUtil.md5Hex(this.file.getBytes());
        String contentType = this.file.getContentType();
        Integer imgSize = Math.toIntExact(this.file.getSize());
        String imgDesc = this.imgDesc;

        return new GalleryImages(null, null, contentType, imgSize, imgWidth, imgHeight,
                imgFormat, imgHash, this.getImgName(), null, imgDesc);
    }

}
