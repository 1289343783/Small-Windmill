interface IUserInfo {
    /**
     * 主键id
     */
    id: number
    /**
     * 用户名
     */
    userName: string

    /**
     * 邮箱
     */
    email: string

    /**
     * 用户上传的key
     */
    imgKey: string

    /**
     * 创建时间
     */
    createTime: string

    /**
     * 更新时间
     */
    updateTime: string
    /**
     * 是否是管理员 0-不是 1-是
     */
    isAdmin: number
    /**
     * 用户头像
     */
    avatar: string
}

interface IRegister {
    /**
     * 用户名
     */
    userName: string
    /**
     * 邮箱
     */

    email: string
    /**
     * 密码
     */
    password: string
}

interface ILoginInfo {
    token: string
    userInfo: IUserInfo
}

interface IUpdateUser {
    id: number
    userName: string
    email: string
    password: string
}