package com.gallery.domain.entity;

import java.io.Serializable;
import java.util.Date;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 图片信息表
 *
 * @TableName gallery_images
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GalleryImages implements Serializable {
    /**
     * 主键id
     */
    @TableId(type = IdType.AUTO)
    private Long id;

    /**
     * 用户id
     */
    private Long userid;

    /**
     * 图片类型
     */
    private String imgType;

    /**
     * 图片大小
     */
    private Integer imgSize;

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
     * 图片hash
     */
    private String imgHash;

    /**
     * 图片名称
     */
    private String imgName;

    /**
     * 图片地址
     */
    private String imgUrl;

    /**
     * 图片描述
     */
    private String imgDesc;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 更新时间
     */
    private Date updateTime;

    /**
     * 创建id
     */
    private String createBy;

    /**
     * 更新id
     */
    private String updateBy;

    /**
     * 是否删除 0-未删除 1-已删除
     */
    private Integer isDelete;

    public GalleryImages(Long id, Long userid, String imgType, Integer imgSize, Integer imgWidth, Integer imgHeight,
                         String imgFormat, String imgHash, String imgName, String imgUrl, String imgDesc) {
        this.id = id;
        this.userid = userid;
        this.imgType = imgType;
        this.imgSize = imgSize;
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;
        this.imgFormat = imgFormat;
        this.imgHash = imgHash;
        this.imgName = imgName;
        this.imgUrl = imgUrl;
        this.imgDesc = imgDesc;
    }


    private static final long serialVersionUID = 1L;


}