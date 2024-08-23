package com.gallery.domain.entity;

import java.io.Serializable;
import java.util.Date;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

/**
 * 用户信息表
 *
 * @TableName user_info
 */
@Data
public class UserInfo implements Serializable {
    /**
     * 主键id
     */
    @TableId(type = IdType.AUTO)
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
     * 密码
     */
    private String password;

    /**
     * 盐
     */
    private String salt;

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
     * 创建id
     */
    private String createBy;

    /**
     * 更新id
     */
    private String updateBy;

    /**
     * 是否是管理员 0-不是 1-是
     */
    private Integer isAdmin;

    /**
     * 是否删除 0-未删除 1-已删除
     */
    private Integer isDelete;
    
    /**
     * 用户头像
     */
    private String avatar;

    private static final long serialVersionUID = 1L;

}