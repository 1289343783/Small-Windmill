package com.gallery.domain.vo;

import lombok.Data;

import java.util.Date;

@Data
public class UserInfoVo {

    /**
     * 主键id
     */
    private Long id;

    /**
     * 用户名
     */
    private String userName;

    /**
     * 邮箱
     */
    private String email;

    /**
     * 用户上传的key
     */
    private String imgKey;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 更新时间
     */
    private Date updateTime;
    /**
     * 是否是管理员 0-不是 1-是
     */
    private Integer isAdmin;
    /**
     * 用户头像
     */
    private String avatar;
}
