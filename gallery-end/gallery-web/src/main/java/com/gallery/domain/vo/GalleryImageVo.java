package com.gallery.domain.vo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.util.Date;

@Data
public class GalleryImageVo {

    /**
     * 主键id
     */
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

}
