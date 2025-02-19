package com.gallery.handler.mabatisplus;

import com.baomidou.mybatisplus.core.handlers.MetaObjectHandler;

import com.gallery.enums.AppHttpCodeEnum;
import com.gallery.exception.SystemException;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.reflection.MetaObject;
import org.springframework.stereotype.Component;

import java.util.Date;

import static com.gallery.utils.ObjectUtils.getFieldValueByObject;


@Slf4j
@Component
public class MyMetaObjectHandler implements MetaObjectHandler {
    @Override
    public void insertFill(MetaObject metaObject) {
        Object originalObject = metaObject.getOriginalObject();
        long createBy;
        long updateBy;
        try {
            createBy = (long) getFieldValueByObject(originalObject, "createBy");
            updateBy = (long) getFieldValueByObject(originalObject, "updateBy");
        } catch (Exception e) {
            log.info("error", e);
            throw new SystemException(AppHttpCodeEnum.SYSTEM_ERROR);
        }
        this.setFieldValByName("createTime", new Date(), metaObject);
        this.setFieldValByName("createBy", createBy, metaObject);
        this.setFieldValByName("updateTime", new Date(), metaObject);
        this.setFieldValByName("updateBy", updateBy, metaObject);
    }

    @Override
    public void updateFill(MetaObject metaObject) {
        Object originalObject = metaObject.getOriginalObject();
        long updateBy;
        try {
            updateBy = (long) getFieldValueByObject(originalObject, "updateBy");
        } catch (Exception e) {
            log.info("error", e);
            throw new SystemException(AppHttpCodeEnum.SYSTEM_ERROR);
        }
        this.setFieldValByName("updateTime", new Date(), metaObject);
        this.setFieldValByName("updateBy", updateBy == 0L ? 1 : updateBy, metaObject);
    }
}