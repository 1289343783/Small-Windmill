import {getUserInfoApi} from "@/api/user";
import {clearToken, getUserInfo} from "@/utils/auth";
import {defineStore} from "pinia";
import {message} from "ant-design-vue";
import {logoutApi} from "@/api/login";

export interface AdminState {
    userInfo?: IUserInfo,
    isAdmin?: boolean
}

export const useUserStore = defineStore("user", {
    state: (): AdminState => {
        return {
            userInfo: {
                id: 0,
                userName: '',
                email: '',
                imgKey: '',
                createTime: '',
                updateTime: '',
                isAdmin: 0,
                avatar: ""
            },
            isAdmin: getUserInfo() ? getUserInfo().isAdmin : false
        }
    },
    getters: {
        /**
         * 获取用户信息
         * @returns 用户信息
         */
        getAdminInfo(): IUserInfo | undefined {
            return this.userInfo
        }
    },
    persist: {
        key: "userInfo",
        storage: localStorage,
    },
    actions: {
        /**
         * 设置用户信息
         * @param userInfo
         */
        setUserInfo(userInfo: IUserInfo | undefined): void {
            this.userInfo = userInfo
        },
        /**
         * 获取用户是否为管理员
         */
        getIsAdmin() {
            return this.isAdmin = getUserInfo() ? getUserInfo().isAdmin : false
        },
        async getIsLogin() {
            const res = await getUserInfoApi()
            return res.code == 200;
        },
        async getUserApi() {
            await getUserInfoApi()
                .then((res) => {
                    if (res.data) {
                        this.setUserInfo(res.data)
                        this.isAdmin = res.data.isAdmin != 0
                    }
                })
                .catch(() => {
                    this.clearUserInfo()
                    message.error('服务器连接失败！')
                })
        },
        /**
         * 清除所有与用户数据相关信息
         */
        clearUserInfo() {
            clearToken()
            this.setUserInfo(undefined)
        },
        /**
         * 注销登录
         */
        async logout(): Promise<void> {
            await logoutApi()
            this.clearUserInfo()
        }
    }
})
