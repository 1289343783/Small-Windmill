import { UserOutlined } from '@ant-design/icons-vue';
import { Icon } from "@iconify/vue";
import { onMounted, ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";
import router from "@/router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { width: windowWidth } = useWindowSize();
const cardStyle = ref({ widthValue: "100%", marginValue: "0 auto", image: '/image/author.jpg' });
const setCardStyle = (newVal) => {
    if (newVal) {
        if (newVal < 768) {
            cardStyle.value = { widthValue: "90%", marginValue: "", image: '/image/login1.jpg' };
        }
        else {
            cardStyle.value = { widthValue: "70%", marginValue: "0 auto", image: '/image/author.jpg' };
        }
    }
};
watch(windowWidth, newVal => {
    setCardStyle(newVal);
});
onMounted(() => {
    setCardStyle(windowWidth.value);
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onBack': {} }, ...{ class: ("") }, ...{ style: ({}) }, subTitle: ("关于作者"), title: ("首页"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onBack': {} }, ...{ class: ("") }, ...{ style: ({}) }, subTitle: ("关于作者"), title: ("首页"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onBack': {} }, ...{ class: ("") }, ...{ style: ({}) }, subTitle: ("关于作者"), title: ("首页"), }));
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
        // @ts-ignore
        const __VLS_8 = {}
            .Icon;
        ({}.Icon);
        ({}.Icon);
        __VLS_components.Icon;
        __VLS_components.Icon;
        // @ts-ignore
        [Icon, Icon,];
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ icon: ("ph:windmill"), ...{ style: ({}) }, }));
        const __VLS_10 = __VLS_9({ icon: ("ph:windmill"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        ({}({ icon: ("ph:windmill"), ...{ style: ({}) }, }));
        const __VLS_13 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10));
        // @ts-ignore
        [router,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-semibold text-base") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: (({ backgroundImage: `url(${__VLS_ctx.cardStyle.image})`, height: '85vh' })) }, ...{ class: (" flex justify-center items-center bg-slate-50  author-background") }, });
    // @ts-ignore
    const __VLS_14 = {}
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
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ style: (({ width: __VLS_ctx.cardStyle.widthValue, margin: __VLS_ctx.cardStyle.marginValue })) }, hoverable: (true), }));
    const __VLS_16 = __VLS_15({ ...{ style: (({ width: __VLS_ctx.cardStyle.widthValue, margin: __VLS_ctx.cardStyle.marginValue })) }, hoverable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ ...{ style: (({ width: __VLS_ctx.cardStyle.widthValue, margin: __VLS_ctx.cardStyle.marginValue })) }, hoverable: (true), }));
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_19.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
        // @ts-ignore
        [cardStyle, cardStyle, cardStyle,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col justify-center items-center mt-1") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_20 = {}
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
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ size: (({ xs: 60, sm: 32, md: 40, lg: 90, xl: 80, xxl: 100 })), src: ("https://q2.qlogo.cn/headimg_dl?dst_uin=1289343783&spec=100"), }));
    const __VLS_22 = __VLS_21({ size: (({ xs: 60, sm: 32, md: 40, lg: 90, xl: 80, xxl: 100 })), src: ("https://q2.qlogo.cn/headimg_dl?dst_uin=1289343783&spec=100"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ size: (({ xs: 60, sm: 32, md: 40, lg: 90, xl: 80, xxl: 100 })), src: ("https://q2.qlogo.cn/headimg_dl?dst_uin=1289343783&spec=100"), }));
    const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_25.slots);
        // @ts-ignore
        const __VLS_26 = {}
            .UserOutlined;
        ({}.UserOutlined);
        __VLS_components.UserOutlined;
        // @ts-ignore
        [UserOutlined,];
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
        const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
        ({}({}));
        const __VLS_31 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28));
    }
    // @ts-ignore
    const __VLS_32 = {}
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
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ class: ("text-center") }, direction: ("vertical"), }));
    const __VLS_34 = __VLS_33({ ...{ class: ("text-center") }, direction: ("vertical"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ ...{ class: ("text-center") }, direction: ("vertical"), }));
    const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-bold text-lg ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-light text-sm text-slate-500") }, });
    __VLS_nonNullable(__VLS_37.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-bold text-slate-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://www.blog.windmill.asia"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-2") }, });
    // @ts-ignore
    const __VLS_38 = {}
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
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ class: ("flex justify-center items-center") }, href: ("https://www.blog.windmill.asia"), }));
    const __VLS_40 = __VLS_39({ ...{ class: ("flex justify-center items-center") }, href: ("https://www.blog.windmill.asia"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ ...{ class: ("flex justify-center items-center") }, href: ("https://www.blog.windmill.asia"), }));
    const __VLS_43 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_43.slots);
        // @ts-ignore
        const __VLS_44 = {}
            .Icon;
        ({}.Icon);
        __VLS_components.Icon;
        // @ts-ignore
        [Icon,];
        // @ts-ignore
        const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ icon: ("icon-park-twotone:hand-right"), ...{ style: ({}) }, }));
        const __VLS_46 = __VLS_45({ icon: ("icon-park-twotone:hand-right"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_45));
        ({}({ icon: ("icon-park-twotone:hand-right"), ...{ style: ({}) }, }));
        const __VLS_49 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { actions: __VLS_thisSlot } = __VLS_nonNullable(__VLS_19.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://gitee.com/wh578/projects"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center") }, });
        // @ts-ignore
        const __VLS_50 = {}
            .Icon;
        ({}.Icon);
        __VLS_components.Icon;
        // @ts-ignore
        [Icon,];
        // @ts-ignore
        const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ icon: ("simple-icons:gitee"), ...{ style: ({}) }, }));
        const __VLS_52 = __VLS_51({ icon: ("simple-icons:gitee"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
        ({}({ icon: ("simple-icons:gitee"), ...{ style: ({}) }, }));
        const __VLS_55 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://github.com/1289343783"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center") }, });
        // @ts-ignore
        const __VLS_56 = {}
            .Icon;
        ({}.Icon);
        __VLS_components.Icon;
        // @ts-ignore
        [Icon,];
        // @ts-ignore
        const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ icon: ("mdi:github"), ...{ style: ({}) }, }));
        const __VLS_58 = __VLS_57({ icon: ("mdi:github"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
        ({}({ icon: ("mdi:github"), ...{ style: ({}) }, }));
        const __VLS_61 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("mailto:1289343783@qq.com"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center") }, });
        // @ts-ignore
        const __VLS_62 = {}
            .Icon;
        ({}.Icon);
        __VLS_components.Icon;
        // @ts-ignore
        [Icon,];
        // @ts-ignore
        const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ icon: ("ic:outline-email"), ...{ style: ({}) }, }));
        const __VLS_64 = __VLS_63({ icon: ("ic:outline-email"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_63));
        ({}({ icon: ("ic:outline-email"), ...{ style: ({}) }, }));
        const __VLS_67 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-2") }, });
    }
    // @ts-ignore
    const __VLS_68 = {}
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
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ ...{ class: ("w-full h-full font-semibold text-base flex justify-center items-center") }, }));
    const __VLS_70 = __VLS_69({ ...{ class: ("w-full h-full font-semibold text-base flex justify-center items-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    ({}({ ...{ class: ("w-full h-full font-semibold text-base flex justify-center items-center") }, }));
    const __VLS_73 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70));
    __VLS_nonNullable(__VLS_73.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['bg-slate-50'];
        __VLS_styleScopedClasses['author-background'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['mt-1'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-light'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-slate-500'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-slate-600'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ml-1'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ml-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ml-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ml-2'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                UserOutlined: UserOutlined,
                Icon: Icon,
                router: router,
                cardStyle: cardStyle,
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
