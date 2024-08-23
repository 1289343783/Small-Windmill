package com.gallery.domain.dto;

import lombok.Data;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.NotBlank;

@Data
public class UpdateGalleryDTO {

    private Long id;

    /**
     * 图片宽度
     */
    @Range(min = 1, max = 1000, message = "图片宽度数只能在 1-1000 之间")
    private Integer imgWidth;

    /**
     * 图片高度
     */
    @Range(min = 1, max = 1000, message = "图片高度数只能在 1-100 之间")
    private Integer imgHeight;

    /**
     * 图片格式
     */
    @NotBlank(message = "图片格式不能为空")
    private String imgFormat;

    /**
     * 图片名称
     */
    @NotBlank(message = "图片名称不能为空")
    private String imgName;

    /**
     * 图片描述
     */
    @NotBlank(message = "图片描述不能为空")
    private String imgDesc;
}
