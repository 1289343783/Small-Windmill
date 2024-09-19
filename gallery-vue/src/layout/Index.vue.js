import GalleryHeaderCard from "./components/GalleryHeaderCard.vue";
import GalleryLayoutContent from "./components/GalleryLayoutContent.vue";
import GalleryLayoutFooter from "./components/GalleryLayoutFooter.vue";
import router from "../router";
import { computed } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// 获取需要缓存的路由
const keepAliveComponents = computed(() => {
    const cacheRoute = router.getRoutes().filter(item => item.meta.isKeepAlive);
    return cacheRoute.map(item => String(item.name));
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    const __VLS_0 = {}
        .ALayout;
    ({}.ALayout);
    ({}.ALayout);
    __VLS_components.ALayout;
    __VLS_components.aLayout;
    __VLS_components.ALayout;
    __VLS_components.aLayout;
    // @ts-ignore
    [ALayout, ALayout,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .ASpace;
    ({}.ASpace);
    ({}.ASpace);
    __VLS_components.ASpace;
    __VLS_components.aSpace;
    __VLS_components.ASpace;
    __VLS_components.aSpace;
    // @ts-ignore
    [ASpace, ASpace,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ direction: ("vertical"), }));
    const __VLS_8 = __VLS_7({ direction: ("vertical"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ direction: ("vertical"), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    [GalleryHeaderCard,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(GalleryHeaderCard, new GalleryHeaderCard({}));
    const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
    ({}({}));
    const __VLS_16 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(GalleryHeaderCard, __VLS_13));
    // @ts-ignore
    [GalleryLayoutContent, GalleryLayoutContent,];
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(GalleryLayoutContent, new GalleryLayoutContent({ ...{ class: ("p-2") }, }));
    const __VLS_18 = __VLS_17({ ...{ class: ("p-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    ({}({ ...{ class: ("p-2") }, }));
    const __VLS_21 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(GalleryLayoutContent, __VLS_18));
    // @ts-ignore
    const __VLS_22 = {}
        .RouterView;
    ({}.RouterView);
    ({}.RouterView);
    __VLS_components.RouterView;
    __VLS_components.routerView;
    __VLS_components.RouterView;
    __VLS_components.routerView;
    // @ts-ignore
    [RouterView, RouterView,];
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({}));
    const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
    ({}({}));
    const __VLS_27 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24));
    {
        const { default: __VLS_thisSlot } = __VLS_nonNullable(__VLS_27.slots);
        const [{ Component, route }] = __VLS_getSlotParams(__VLS_thisSlot);
        // @ts-ignore
        const __VLS_28 = {}
            .KeepAlive;
        ({}.KeepAlive);
        ({}.KeepAlive);
        __VLS_components.KeepAlive;
        __VLS_components.keepAlive;
        __VLS_components.KeepAlive;
        __VLS_components.keepAlive;
        // @ts-ignore
        [KeepAlive, KeepAlive,];
        // @ts-ignore
        const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ include: ((__VLS_ctx.keepAliveComponents)), max: ((10)), }));
        const __VLS_30 = __VLS_29({ include: ((__VLS_ctx.keepAliveComponents)), max: ((10)), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
        ({}({ include: ((__VLS_ctx.keepAliveComponents)), max: ((10)), }));
        const __VLS_33 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30));
        const __VLS_34 = (Component);
        // @ts-ignore
        const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({ key: ((route.fullPath)), }));
        const __VLS_36 = __VLS_35({ key: ((route.fullPath)), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
        ({}({ key: ((route.fullPath)), }));
        const __VLS_39 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36));
        // @ts-ignore
        [keepAliveComponents,];
        __VLS_nonNullable(__VLS_33.slots).default;
        __VLS_nonNullable(__VLS_27.slots)['' /* empty slot name completion */];
    }
    __VLS_nonNullable(__VLS_21.slots).default;
    // @ts-ignore
    [GalleryLayoutFooter,];
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(GalleryLayoutFooter, new GalleryLayoutFooter({}));
    const __VLS_41 = __VLS_40({}, ...__VLS_functionalComponentArgsRest(__VLS_40));
    ({}({}));
    const __VLS_44 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(GalleryLayoutFooter, __VLS_41));
    __VLS_nonNullable(__VLS_11.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['p-2'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                GalleryHeaderCard: GalleryHeaderCard,
                GalleryLayoutContent: GalleryLayoutContent,
                GalleryLayoutFooter: GalleryLayoutFooter,
                keepAliveComponents: keepAliveComponents,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
