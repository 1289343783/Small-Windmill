import { Icon } from "@iconify/vue";
import { message } from "ant-design-vue";
import { useUserStore } from "@/store/modules/user";
import { onMounted, ref, watch } from "vue";
import { getUserInfoApi } from "@/api/user";
import router from "@/router";
import { useWindowSize } from "@vueuse/core";
import { UserOutlined } from '@ant-design/icons-vue';
import GalleryListComponent from "@/components/GalleryListComponent.vue";
import UpdateUserComponent from "@/components/UpdateUserComponent.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { width: windowWidth } = useWindowSize();
const userStore = useUserStore();
const userInfo = ref({
    createTime: "",
    email: "",
    id: 0,
    imgKey: "",
    isAdmin: 0,
    updateTime: "",
    userName: "",
    avatar: ""
});
const cardStyle = ref({ spanValue: 8, styleHeight: '350px', setInfo: false, image: '/image/userinfobackdrop.jpg' });
const imgStyle = ref({ imgHeight: '250px' });
const updateChildRef = ref();
const userLogout = () => {
    userStore.logout();
    router.push('/login');
    message.info('已退出登录！');
};
const getUserInfo = async () => {
    const res = await getUserInfoApi();
    if (res.code === 200) {
        userInfo.value = res.data;
    }
};
const setWindowStyle = (winValue) => {
    if (winValue < 768) {
        imgStyle.value = { imgHeight: '150px' };
        cardStyle.value = { spanValue: 12, styleHeight: '250px', setInfo: true, image: '/image/userinfobackdrop.jpg' };
    }
    else {
        imgStyle.value = { imgHeight: '290px' };
        cardStyle.value = { spanValue: 6, styleHeight: '390px', setInfo: false, image: '/image/userinfobackdrop1.jpg' };
    }
};
/**
 * 打开修改用户信息drawer
 */
const callChildMethod = () => {
    updateChildRef.value.showDrawer();
};
watch(windowWidth, newVal => {
    if (newVal) {
        setWindowStyle(newVal);
    }
});
onMounted(async () => {
    if (await userStore.getIsLogin()) {
        await getUserInfo();
    }
    else {
        message.info('请先登录！');
        router.push('/login');
    }
    if (windowWidth.value) {
        setWindowStyle(windowWidth.value);
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_0 = {}
        .APageHeader;
    ({}.APageHeader);
    ({}.APageHeader);
    __VLS_components.APageHeader;
    __VLS_components.aPageHeader;
    __VLS_components.APageHeader;
    __VLS_components.aPageHeader;
    // @ts-ignore
    [APageHeader, APageHeader,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onBack': {} }, ...{ style: ({}) }, subTitle: ("用户首页"), title: ("首页"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onBack': {} }, ...{ style: ({}) }, subTitle: ("用户首页"), title: ("首页"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onBack': {} }, ...{ style: ({}) }, subTitle: ("用户首页"), title: ("首页"), }));
    let __VLS_6;
    const __VLS_7 = {
        onBack: (() => {
            __VLS_ctx.router.push({ path: '/home' });
        })
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { extra: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        if (!__VLS_ctx.cardStyle.setInfo) {
            // @ts-ignore
            const __VLS_8 = {}
                .AButton;
            ({}.AButton);
            ({}.AButton);
            __VLS_components.AButton;
            __VLS_components.aButton;
            __VLS_components.AButton;
            __VLS_components.aButton;
            // @ts-ignore
            [AButton, AButton,];
            // @ts-ignore
            const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onClick': {} }, ...{ class: ("flex justify-center items-center") }, type: ("primary"), }));
            const __VLS_10 = __VLS_9({ ...{ 'onClick': {} }, ...{ class: ("flex justify-center items-center") }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
            ({}({ ...{ 'onClick': {} }, ...{ class: ("flex justify-center items-center") }, type: ("primary"), }));
            let __VLS_14;
            const __VLS_15 = {
                onClick: (__VLS_ctx.callChildMethod)
            };
            const __VLS_13 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10));
            let __VLS_11;
            let __VLS_12;
            // @ts-ignore
            const __VLS_16 = {}
                .Icon;
            ({}.Icon);
            __VLS_components.Icon;
            // @ts-ignore
            [Icon,];
            // @ts-ignore
            const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ icon: ("clarity:update-line"), }));
            const __VLS_18 = __VLS_17({ icon: ("clarity:update-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
            ({}({ icon: ("clarity:update-line"), }));
            const __VLS_21 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18));
            // @ts-ignore
            [router, cardStyle, callChildMethod,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-1") }, });
            __VLS_nonNullable(__VLS_13.slots).default;
        }
        // @ts-ignore
        const __VLS_22 = {}
            .APopconfirm;
        ({}.APopconfirm);
        ({}.APopconfirm);
        __VLS_components.APopconfirm;
        __VLS_components.aPopconfirm;
        __VLS_components.APopconfirm;
        __VLS_components.aPopconfirm;
        // @ts-ignore
        [APopconfirm, APopconfirm,];
        // @ts-ignore
        const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({ ...{ 'onConfirm': {} }, cancelText: ("在等等"), okText: ("退出"), placement: ("bottom"), }));
        const __VLS_24 = __VLS_23({ ...{ 'onConfirm': {} }, cancelText: ("在等等"), okText: ("退出"), placement: ("bottom"), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
        ({}({ ...{ 'onConfirm': {} }, cancelText: ("在等等"), okText: ("退出"), placement: ("bottom"), }));
        let __VLS_28;
        const __VLS_29 = {
            onConfirm: (__VLS_ctx.userLogout)
        };
        const __VLS_27 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24));
        let __VLS_25;
        let __VLS_26;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_27.slots);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full flex justify-center items-center") }, });
            // @ts-ignore
            const __VLS_30 = {}
                .Icon;
            ({}.Icon);
            __VLS_components.Icon;
            // @ts-ignore
            [Icon,];
            // @ts-ignore
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ icon: ("material-symbols:logout"), }));
            const __VLS_32 = __VLS_31({ icon: ("material-symbols:logout"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            ({}({ icon: ("material-symbols:logout"), }));
            const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
            // @ts-ignore
            [userLogout,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-1") }, });
        }
        // @ts-ignore
        const __VLS_36 = {}
            .AButton;
        ({}.AButton);
        ({}.AButton);
        __VLS_components.AButton;
        __VLS_components.aButton;
        __VLS_components.AButton;
        __VLS_components.aButton;
        // @ts-ignore
        [AButton, AButton,];
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ class: ("flex justify-center items-center") }, type: ("primary"), }));
        const __VLS_38 = __VLS_37({ ...{ class: ("flex justify-center items-center") }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({ ...{ class: ("flex justify-center items-center") }, type: ("primary"), }));
        const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
        // @ts-ignore
        const __VLS_42 = {}
            .Icon;
        ({}.Icon);
        __VLS_components.Icon;
        // @ts-ignore
        [Icon,];
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ icon: ("material-symbols:logout"), }));
        const __VLS_44 = __VLS_43({ icon: ("material-symbols:logout"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        ({}({ icon: ("material-symbols:logout"), }));
        const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-1") }, });
        __VLS_nonNullable(__VLS_41.slots).default;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_48 = {}
        .ACard;
    ({}.ACard);
    ({}.ACard);
    __VLS_components.ACard;
    __VLS_components.aCard;
    __VLS_components.ACard;
    __VLS_components.aCard;
    // @ts-ignore
    [ACard, ACard,];
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ style: (({ backgroundImage: `url(${__VLS_ctx.cardStyle.image})`, height: '260px' })) }, ...{ class: ("author-background") }, }));
    const __VLS_50 = __VLS_49({ ...{ style: (({ backgroundImage: `url(${__VLS_ctx.cardStyle.image})`, height: '260px' })) }, ...{ class: ("author-background") }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({ ...{ style: (({ backgroundImage: `url(${__VLS_ctx.cardStyle.image})`, height: '260px' })) }, ...{ class: ("author-background") }, }));
    const __VLS_53 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col justify-center items-center mt-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_54 = {}
        .AAvatar;
    ({}.AAvatar);
    ({}.AAvatar);
    __VLS_components.AAvatar;
    __VLS_components.aAvatar;
    __VLS_components.AAvatar;
    __VLS_components.aAvatar;
    // @ts-ignore
    [AAvatar, AAvatar,];
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ size: (({ xs: 60, sm: 32, md: 40, lg: 90, xl: 80, xxl: 100 })), src: ((__VLS_ctx.userInfo.avatar)), }));
    const __VLS_56 = __VLS_55({ size: (({ xs: 60, sm: 32, md: 40, lg: 90, xl: 80, xxl: 100 })), src: ((__VLS_ctx.userInfo.avatar)), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    ({}({ size: (({ xs: 60, sm: 32, md: 40, lg: 90, xl: 80, xxl: 100 })), src: ((__VLS_ctx.userInfo.avatar)), }));
    const __VLS_59 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_59.slots);
        // @ts-ignore
        const __VLS_60 = {}
            .UserOutlined;
        ({}.UserOutlined);
        __VLS_components.UserOutlined;
        // @ts-ignore
        [UserOutlined,];
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
        const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
        ({}({}));
        const __VLS_65 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62));
        // @ts-ignore
        [cardStyle, userInfo,];
    }
    if (__VLS_ctx.cardStyle.setInfo) {
        // @ts-ignore
        const __VLS_66 = {}
            .AButton;
        ({}.AButton);
        ({}.AButton);
        __VLS_components.AButton;
        __VLS_components.aButton;
        __VLS_components.AButton;
        __VLS_components.aButton;
        // @ts-ignore
        [AButton, AButton,];
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{ 'onClick': {} }, ...{ class: ("flex justify-center items-center") }, size: ("small"), type: ("link"), }));
        const __VLS_68 = __VLS_67({ ...{ 'onClick': {} }, ...{ class: ("flex justify-center items-center") }, size: ("small"), type: ("link"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        ({}({ ...{ 'onClick': {} }, ...{ class: ("flex justify-center items-center") }, size: ("small"), type: ("link"), }));
        let __VLS_72;
        const __VLS_73 = {
            onClick: (__VLS_ctx.callChildMethod)
        };
        const __VLS_71 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68));
        let __VLS_69;
        let __VLS_70;
        // @ts-ignore
        const __VLS_74 = {}
            .Icon;
        ({}.Icon);
        __VLS_components.Icon;
        // @ts-ignore
        [Icon,];
        // @ts-ignore
        const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ icon: ("clarity:update-line"), }));
        const __VLS_76 = __VLS_75({ icon: ("clarity:update-line"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
        ({}({ icon: ("clarity:update-line"), }));
        const __VLS_79 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76));
        // @ts-ignore
        [cardStyle, callChildMethod,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-1") }, });
        __VLS_nonNullable(__VLS_71.slots).default;
    }
    // @ts-ignore
    const __VLS_80 = {}
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
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{ class: ("text-center") }, direction: ("vertical"), }));
    const __VLS_82 = __VLS_81({ ...{ class: ("text-center") }, direction: ("vertical"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    ({}({ ...{ class: ("text-center") }, direction: ("vertical"), }));
    const __VLS_85 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-bold text-lg text-red-50") }, });
    (__VLS_ctx.userInfo.userName);
    // @ts-ignore
    [userInfo,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-light text-sm text-orange-50") }, });
    (__VLS_ctx.userInfo.email);
    // @ts-ignore
    [userInfo,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-light text-sm text-orange-50") }, });
    (__VLS_ctx.userInfo.createTime);
    // @ts-ignore
    [userInfo,];
    __VLS_nonNullable(__VLS_85.slots).default;
    __VLS_nonNullable(__VLS_53.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [GalleryListComponent,];
    // @ts-ignore
    const __VLS_86 = __VLS_asFunctionalComponent(GalleryListComponent, new GalleryListComponent({ imgHeight: ((__VLS_ctx.imgStyle.imgHeight)), spanValue: ((__VLS_ctx.cardStyle.spanValue)), styleHeight: ((__VLS_ctx.cardStyle.styleHeight)), }));
    const __VLS_87 = __VLS_86({ imgHeight: ((__VLS_ctx.imgStyle.imgHeight)), spanValue: ((__VLS_ctx.cardStyle.spanValue)), styleHeight: ((__VLS_ctx.cardStyle.styleHeight)), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
    ({}({ imgHeight: ((__VLS_ctx.imgStyle.imgHeight)), spanValue: ((__VLS_ctx.cardStyle.spanValue)), styleHeight: ((__VLS_ctx.cardStyle.styleHeight)), }));
    const __VLS_90 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(GalleryListComponent, __VLS_87));
    // @ts-ignore
    [cardStyle, cardStyle, imgStyle,];
    // @ts-ignore
    [UpdateUserComponent,];
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(UpdateUserComponent, new UpdateUserComponent({ ref: ("updateChildRef"), }));
    const __VLS_92 = __VLS_91({ ref: ("updateChildRef"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    ({}({ ref: ("updateChildRef"), }));
    // @ts-ignore
    (__VLS_ctx.updateChildRef);
    const __VLS_95 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(UpdateUserComponent, __VLS_92));
    // @ts-ignore
    [updateChildRef,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ml-1'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ml-1'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ml-1'];
        __VLS_styleScopedClasses['author-background'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['mt-1'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ml-1'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['text-red-50'];
        __VLS_styleScopedClasses['font-light'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-orange-50'];
        __VLS_styleScopedClasses['font-light'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-orange-50'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Icon: Icon,
                router: router,
                UserOutlined: UserOutlined,
                GalleryListComponent: GalleryListComponent,
                UpdateUserComponent: UpdateUserComponent,
                userInfo: userInfo,
                cardStyle: cardStyle,
                imgStyle: imgStyle,
                updateChildRef: updateChildRef,
                userLogout: userLogout,
                callChildMethod: callChildMethod,
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
