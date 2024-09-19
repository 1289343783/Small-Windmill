import { createRouter, createWebHistory, } from 'vue-router';
import { MainRouter as routes } from './modules/MainRouter';
import { getUserInfo } from "@/utils/auth";
import { useUserStore } from "@/store/modules/user";
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});
/**
 * 路由守卫
 */
router.beforeEach(async (to, from, next) => {
    const { title, isAuth } = to.meta;
    // 修改标题
    if (title) {
        document.title = title + ' - GALLERY-WINDMILL';
    }
    else {
        document.title = 'GALLERY-WINDMILL';
    }
    if (isAuth) {
        let userInfo = getUserInfo();
        if (userInfo) {
            await useUserStore().getUserApi();
            next();
        }
        else {
            next({ name: "Login" });
        }
    }
    else {
        next();
    }
});
export { routes };
export default router;
