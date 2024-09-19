import { message } from 'ant-design-vue';
import { Icon } from "@iconify/vue";
import { onMounted, ref, } from 'vue';
import { useWindowSize } from "@vueuse/core";
import { getGalleryPageListApi } from "../api/gallert";
import { uploadImageApi } from "../api/upload";
import { isLogin } from "@/utils/auth";
import GalleryInfoComponent from "@/components/GalleryInfoComponent.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { width: windowWidth } = useWindowSize();
const spinningGallery = ref(true);
const pageSize = ref(10);
const galleryList = ref([]);
const loading = ref(false);
const galleryInfoComponent = ref();
// 手动上传文件回调
const customRequest = async (file) => {
    loading.value = true;
    const res = await uploadImageApi(file.file);
    if (res.code == 200) {
        await getGalleryList(1);
        setTimeout(() => {
            loading.value = false;
        }, 300);
        message.success('上传成功');
    }
};
/**
 * 获取文件列表
 * @param pageNum
 */
const getGalleryList = async (pageNum) => {
    spinningGallery.value = true;
    const res = await getGalleryPageListApi(pageNum, pageSize.value);
    if (res.code === 200) {
        galleryList.value = res.data.rows;
        setTimeout(() => {
            spinningGallery.value = false;
        }, 200);
    }
};
/**
 * 查看相册modal
 * @param id
 */
const showGallery = (id) => {
    galleryInfoComponent.value.showGalleryInfo(id);
};
onMounted(() => {
    if (isLogin()) {
        getGalleryList(1);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_0 = {}
        .AUploadDragger;
    ({}.AUploadDragger);
    ({}.AUploadDragger);
    __VLS_components.AUploadDragger;
    __VLS_components.aUploadDragger;
    __VLS_components.AUploadDragger;
    __VLS_components.aUploadDragger;
    // @ts-ignore
    [AUploadDragger, AUploadDragger,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ customRequest: ((__VLS_ctx.customRequest)), disabled: ((__VLS_ctx.loading)), multiple: ((false)), showUploadList: ((false)), accept: ("image/*"), listType: ("picture-card"), name: ("file"), }));
    const __VLS_2 = __VLS_1({ customRequest: ((__VLS_ctx.customRequest)), disabled: ((__VLS_ctx.loading)), multiple: ((false)), showUploadList: ((false)), accept: ("image/*"), listType: ("picture-card"), name: ("file"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ customRequest: ((__VLS_ctx.customRequest)), disabled: ((__VLS_ctx.loading)), multiple: ((false)), showUploadList: ((false)), accept: ("image/*"), listType: ("picture-card"), name: ("file"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    if (__VLS_ctx.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        // @ts-ignore
        const __VLS_6 = {}
            .Icon;
        ({}.Icon);
        __VLS_components.Icon;
        // @ts-ignore
        [Icon,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ("eos-icons:loading"), ...{ style: ({}) }, }));
        const __VLS_8 = __VLS_7({ icon: ("eos-icons:loading"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ icon: ("eos-icons:loading"), ...{ style: ({}) }, }));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        // @ts-ignore
        [customRequest, loading, loading,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ant-upload-text") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ant-upload-hint") }, });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ant-upload-drag-icon") }, });
        // @ts-ignore
        const __VLS_12 = {}
            .Icon;
        ({}.Icon);
        __VLS_components.Icon;
        // @ts-ignore
        [Icon,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ icon: ("pixelarticons:cloud-upload"), ...{ style: ({}) }, }));
        const __VLS_14 = __VLS_13({ icon: ("pixelarticons:cloud-upload"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ icon: ("pixelarticons:cloud-upload"), ...{ style: ({}) }, }));
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ant-upload-text") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ant-upload-hint") }, });
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (" flex mt-2 justify-center items-center") }, });
    // @ts-ignore
    const __VLS_18 = {}
        .icon;
    ({}.icon);
    ({}.icon);
    __VLS_components.Icon;
    __VLS_components.icon;
    __VLS_components.Icon;
    __VLS_components.icon;
    // @ts-ignore
    [Icon, Icon,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ icon: ("oui:app-recently-viewed"), }));
    const __VLS_20 = __VLS_19({ icon: ("oui:app-recently-viewed"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ icon: ("oui:app-recently-viewed"), }));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-lg font-semibold  ml-2") }, });
    if (__VLS_ctx.galleryList.length == 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        // @ts-ignore
        const __VLS_24 = {}
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
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("text-center font-semibold") }, }));
        const __VLS_26 = __VLS_25({ ...{ class: ("text-center font-semibold") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ ...{ class: ("text-center font-semibold") }, }));
        const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
        // @ts-ignore
        const __VLS_30 = {}
            .Icon;
        ({}.Icon);
        ({}.Icon);
        __VLS_components.Icon;
        __VLS_components.Icon;
        // @ts-ignore
        [Icon, Icon,];
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ icon: ("carbon:data-error"), ...{ style: ({}) }, }));
        const __VLS_32 = __VLS_31({ icon: ("carbon:data-error"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ icon: ("carbon:data-error"), ...{ style: ({}) }, }));
        const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
        // @ts-ignore
        [galleryList,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_nonNullable(__VLS_29.slots).default;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        // @ts-ignore
        const __VLS_36 = {}
            .ASpin;
        ({}.ASpin);
        ({}.ASpin);
        __VLS_components.ASpin;
        __VLS_components.aSpin;
        __VLS_components.ASpin;
        __VLS_components.aSpin;
        // @ts-ignore
        [ASpin, ASpin,];
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ spinning: ((__VLS_ctx.spinningGallery)), tip: ("加载中"), }));
        const __VLS_38 = __VLS_37({ spinning: ((__VLS_ctx.spinningGallery)), tip: ("加载中"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({ spinning: ((__VLS_ctx.spinningGallery)), tip: ("加载中"), }));
        const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.galleryList))) {
            // @ts-ignore
            const __VLS_42 = {}
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
            const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ class: ("hover:bg-zinc-200") }, }));
            const __VLS_44 = __VLS_43({ ...{ class: ("hover:bg-zinc-200") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
            ({}({ ...{ class: ("hover:bg-zinc-200") }, }));
            const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center ") }, ...{ style: ({}) }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-none p-2") }, });
            // @ts-ignore
            const __VLS_48 = {}
                .AImage;
            ({}.AImage);
            ({}.AImage);
            __VLS_components.AImage;
            __VLS_components.aImage;
            __VLS_components.AImage;
            __VLS_components.aImage;
            // @ts-ignore
            [AImage, AImage,];
            // @ts-ignore
            const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ height: ((60)), src: ((item.imgUrl)), width: ((60)), }));
            const __VLS_50 = __VLS_49({ height: ((60)), src: ((item.imgUrl)), width: ((60)), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
            ({}({ height: ((60)), src: ((item.imgUrl)), width: ((60)), }));
            const __VLS_53 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50));
            // @ts-ignore
            [galleryList, spinningGallery,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grow p-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((item.imgUrl)), });
            (item.imgName);
            if (__VLS_ctx.windowWidth >= 768) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (item.imgDesc == '' ? '暂无描述' : item.imgDesc);
                // @ts-ignore
                [windowWidth,];
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-none p-2") }, });
            // @ts-ignore
            const __VLS_54 = {}
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
            const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ ...{ 'onClick': {} }, type: ("primary"), }));
            const __VLS_56 = __VLS_55({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
            ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
            let __VLS_60;
            const __VLS_61 = {
                onClick: (...[$event]) => {
                    if (!(!((__VLS_ctx.galleryList.length == 0))))
                        return;
                    __VLS_ctx.showGallery(item.id);
                    // @ts-ignore
                    [showGallery,];
                }
            };
            const __VLS_59 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56));
            let __VLS_57;
            let __VLS_58;
            __VLS_nonNullable(__VLS_59.slots).default;
            __VLS_nonNullable(__VLS_47.slots).default;
        }
        __VLS_nonNullable(__VLS_41.slots).default;
    }
    // @ts-ignore
    [GalleryInfoComponent,];
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(GalleryInfoComponent, new GalleryInfoComponent({ ref: ("galleryInfoComponent"), }));
    const __VLS_63 = __VLS_62({ ref: ("galleryInfoComponent"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    ({}({ ref: ("galleryInfoComponent"), }));
    // @ts-ignore
    (__VLS_ctx.galleryInfoComponent);
    const __VLS_66 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(GalleryInfoComponent, __VLS_63));
    // @ts-ignore
    [galleryInfoComponent,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['ant-upload-text'];
        __VLS_styleScopedClasses['ant-upload-hint'];
        __VLS_styleScopedClasses['ant-upload-drag-icon'];
        __VLS_styleScopedClasses['ant-upload-text'];
        __VLS_styleScopedClasses['ant-upload-hint'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['ml-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['hover:bg-zinc-200'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['flex-none'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['grow'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['flex-none'];
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
                Icon: Icon,
                GalleryInfoComponent: GalleryInfoComponent,
                windowWidth: windowWidth,
                spinningGallery: spinningGallery,
                galleryList: galleryList,
                loading: loading,
                galleryInfoComponent: galleryInfoComponent,
                customRequest: customRequest,
                showGallery: showGallery,
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
