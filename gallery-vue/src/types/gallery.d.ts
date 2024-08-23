interface IGallery {
    /**
     * 主键id
     */
    id: number

    /**
     * 用户id
     */
    userid: number

    /**
     * 图片类型
     */
    imgType: string


    /**
     * 图片大小
     */
    imgSize: number

    /**
     * 图片宽度
     */
    imgWidth: number

    /**
     * 图片高度
     */
    imgHeight: number

    /**
     * 图片格式
     */
    imgFormat: string

    /**
     * 图片hash
     */
    imgHash: string

    /**
     * 图片名称
     */
    imgName: string

    /**
     * 图片地址
     */
    imgUrl: string

    /**
     * 图片描述
     */
    imgDesc: string


    /**
     * 创建时间
     */
    createTime: string

    /**
     * 更新时间
     */
    updateTime: string
}

interface IUpdateGallery {
    id: number;
    imgWidth: number;
    imgHeight: number;
    imgFormat: string;
    imgName: string;
    imgDesc: string;
}