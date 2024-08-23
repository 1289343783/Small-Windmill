package com.gallery.exception;


import com.gallery.enums.AppHttpCodeEnum;
import lombok.*;


@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SystemException extends RuntimeException {
    private int code;
    private String msg;

    public SystemException(AppHttpCodeEnum httpCodeEnum) {
        super(httpCodeEnum.getMsg());
        this.code = httpCodeEnum.getCode();
        this.msg = httpCodeEnum.getMsg();
    }

    public void setCode(int code) {
        this.code = code;
    }

    public void setMsg(String message) {
        this.msg = message;
    }
}
