import {RouteRecordRaw} from "vue-router"

const MainRouter: RouteRecordRaw[] = [
    {
        path: "/login",
        name: "Login",
        component: () => import('@/views/Login.vue'),
        meta: {
            title: "登录",
        },
    },
    {
        path: "/register",
        name: "Register",
        component: () => import('@/views/Register.vue'),
        meta: {
            title: "注册账号",
        },
    },
    {
        path: "/user/info",
        name: "UserInfo",
        component: () => import('@/views/UserInfo.vue'),
        meta: {
            title: "注册账号",
        },
    },
    {
        path: '/author',
        name: 'AboutAuthor',
        component: () => import('@/views/AboutAuthor.vue'),
        meta: {
            title: '关于作者',
            isAuth: false,
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import("@/views/PageNotFound.vue"),
        meta: {
            title: "404"
        }
    },
    {
        path: '/',
        name: 'Root',
        redirect: {name: 'Home'},
        component: () => import('@/layout/Index.vue'),
        meta: {
            title: '首页',
            weight: 100
        },
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('@/views/Home.vue'),
                meta: {
                    title: '首页',
                    isAuth: false,
                }
            },
            {
                path: '/info/api',
                name: 'InfoApi',
                component: () => import('@/views/InfoApi.vue'),
                meta: {
                    title: 'API文档',
                    isAuth: true,
                }
            }
        ]
    }
]
export {MainRouter}
