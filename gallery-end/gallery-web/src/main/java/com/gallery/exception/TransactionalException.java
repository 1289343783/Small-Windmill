package com.gallery.exception;

import com.gallery.enums.AppHttpCodeEnum;

public class TransactionalException extends SystemException {

    public TransactionalException() {
        super(AppHttpCodeEnum.SYSTEM_ERROR);
    }
}
