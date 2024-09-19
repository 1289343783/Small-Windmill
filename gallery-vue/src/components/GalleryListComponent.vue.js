import { Icon } from "@iconify/vue";
import { message } from "ant-design-vue";
import { DownloadOutlined } from '@ant-design/icons-vue';
import { watch } from 'vue';
import { onMounted, reactive, ref } from 'vue';
import { getGalleryPageListApi } from "@/api/gallert";
import { isLogin } from "@/utils/auth";
import { getGalleryDetailApi, updateGalleryApi, deleteGalleryApi } from "@/api/gallert";
import { useWindowSize } from "@vueuse/core";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    spanValue: {
        type: Number,
    },
    styleHeight: {
        type: String,
    },
    imgHeight: {
        type: String,
    }
});
const { width: windowWidth } = useWindowSize();
const isDownloadBut = ref(false);
const pageTotal = ref(0);
const galleryList = ref([]);
const current = ref(1);
const loading = ref(false);
const loadingInfo = ref(false);
const delLoading = ref(false);
const open = ref(false);
const formRef = ref();
const formState = reactive({
    id: 0,
    userid: 0,
    imgType: "",
    imgSize: 0,
    imgWidth: 0,
    imgHeight: 0,
    imgFormat: "",
    imgHash: "",
    imgName: "",
    imgUrl: "",
    imgDesc: "",
    createTime: "",
    updateTime: "",
});
const checkImgWidth = async (_rule, value) => {
    if (!value) {
        return Promise.reject('用户名不能为空！');
    }
    else if (value < 10 || value > 500) {
        return Promise.reject("图片宽度长度在10到500之间");
    }
};
const checkImgHeight = async (_rule, value) => {
    if (!value) {
        return Promise.reject('用户名不能为空！');
    }
    else if (value < 10 || value > 500) {
        return Promise.reject("图片长度长度在10到500之间");
    }
};
const rules = {
    imgName: [
        { required: true, message: '名称不能为空！', trigger: 'change' },
        { min: 1, max: 12, message: '名称1-12到个字', trigger: 'blur' },
    ],
    imgWidth: [
        { required: true, validator: checkImgWidth, trigger: 'change' }
    ],
    imgHeight: [{ required: true, validator: checkImgHeight, trigger: 'change', type: 'object' }],
    imgDesc: [{ required: true, message: '描述不能为空！', trigger: 'change' }],
};
/**
 * 删除图片回调函数
 */
const delGallery = async () => {
    delLoading.value = true;
    const res = await deleteGalleryApi(formState.id);
    if (res.code == 200) {
        await getGalleryList(current.value, 12);
        open.value = false;
        delLoading.value = false;
    }
};
/**
 * 获取文件列表
 * @param page
 * @param pageSize
 */
const getGalleryList = async (page, pageSize) => {
    loadingInfo.value = true;
    const res = await getGalleryPageListApi(page, pageSize);
    if (res.code === 200) {
        current.value = page;
        galleryList.value = res.data.rows;
        pageTotal.value = Number(res.data.total);
        setTimeout(() => {
            loadingInfo.value = false;
        }, 200);
    }
};
/**
 * 查看信息
 * @param id
 */
const getGalleryInfo = async (id) => {
    loadingInfo.value = true;
    const res = await getGalleryDetailApi(id);
    if (res.code == 200) {
        Object.assign(formState, res.data);
        loadingInfo.value = false;
        open.value = true;
    }
};
/**
 * 修啊图回调函数
 */
const handleOk = () => {
    loading.value = true;
    formRef.value.validate().then(async () => {
        let data = {
            id: formState.id,
            imgDesc: formState.imgDesc,
            imgFormat: formState.imgFormat,
            imgHeight: formState.imgHeight,
            imgName: formState.imgName,
            imgWidth: formState.imgWidth
        };
        const res = await updateGalleryApi(data);
        if (res.code == 200) {
            message.success("修改成功！");
            loading.value = false;
            open.value = false;
            await getGalleryList(current.value, 12);
        }
    }).catch(() => {
        message.error("请完成表单验证！");
    });
};
const setWindowStyle = (winValue) => {
    winValue < 768 ? isDownloadBut.value = false : isDownloadBut.value = true;
};
watch(windowWidth, newVal => {
    if (newVal) {
        setWindowStyle(newVal);
    }
});
/**
 * 下载文件
 */
const downloadLoading = ref(false);
const downloadFile = (fileName, fileUrl) => {
    downloadLoading.value = true;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
    downloadLoading.value = false;
};
onMounted(() => {
    if (isLogin()) {
        getGalleryList(1, 12);
    }
    if (windowWidth.value) {
        setWindowStyle(windowWidth.value);
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        spanValue: {
            type: Number,
        },
        styleHeight: {
            type: String,
        },
        imgHeight: {
            type: String,
        }
    },
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center ") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .Icon;
    ({}.Icon);
    ({}.Icon);
    __VLS_components.Icon;
    __VLS_components.Icon;
    // @ts-ignore
    [Icon, Icon,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ icon: ("maki:art-gallery"), }));
    const __VLS_2 = __VLS_1({ icon: ("maki:art-gallery"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ icon: ("maki:art-gallery"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-bold text-lg ml-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr, __VLS_intrinsicElements.hr)({});
    if (__VLS_ctx.galleryList.length <= 0) {
        // @ts-ignore
        const __VLS_6 = {}
            .ADivider;
        ({}.ADivider);
        __VLS_components.ADivider;
        __VLS_components.aDivider;
        // @ts-ignore
        [ADivider,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
        const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({}));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        // @ts-ignore
        [galleryList,];
    }
    if (__VLS_ctx.galleryList.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        // @ts-ignore
        const __VLS_12 = {}
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
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ spinning: ((__VLS_ctx.loadingInfo)), }));
        const __VLS_14 = __VLS_13({ spinning: ((__VLS_ctx.loadingInfo)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ spinning: ((__VLS_ctx.loadingInfo)), }));
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
        // @ts-ignore
        const __VLS_18 = {}
            .ARow;
        ({}.ARow);
        ({}.ARow);
        __VLS_components.ARow;
        __VLS_components.aRow;
        __VLS_components.ARow;
        __VLS_components.aRow;
        // @ts-ignore
        [ARow, ARow,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ gutter: (([5, 2])), }));
        const __VLS_20 = __VLS_19({ gutter: (([5, 2])), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ gutter: (([5, 2])), }));
        const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
        // @ts-ignore
        const __VLS_24 = {}
            .AImagePreviewGroup;
        ({}.AImagePreviewGroup);
        ({}.AImagePreviewGroup);
        __VLS_components.AImagePreviewGroup;
        __VLS_components.aImagePreviewGroup;
        __VLS_components.AImagePreviewGroup;
        __VLS_components.aImagePreviewGroup;
        // @ts-ignore
        [AImagePreviewGroup, AImagePreviewGroup,];
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
        const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({}));
        const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.galleryList))) {
            // @ts-ignore
            const __VLS_30 = {}
                .ACol;
            ({}.ACol);
            ({}.ACol);
            __VLS_components.ACol;
            __VLS_components.aCol;
            __VLS_components.ACol;
            __VLS_components.aCol;
            // @ts-ignore
            [ACol, ACol,];
            // @ts-ignore
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ key: ((item)), span: ((props.spanValue)), }));
            const __VLS_32 = __VLS_31({ key: ((item)), span: ((props.spanValue)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            ({}({ key: ((item)), span: ((props.spanValue)), }));
            const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
            // @ts-ignore
            const __VLS_36 = {}
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
            const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ style: (({ height: props.styleHeight })) }, hoverable: (true), }));
            const __VLS_38 = __VLS_37({ ...{ style: (({ height: props.styleHeight })) }, hoverable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
            ({}({ ...{ style: (({ height: props.styleHeight })) }, hoverable: (true), }));
            const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            // @ts-ignore
            const __VLS_42 = {}
                .AImage;
            ({}.AImage);
            __VLS_components.AImage;
            __VLS_components.aImage;
            // @ts-ignore
            [AImage,];
            // @ts-ignore
            const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ height: ((props.imgHeight)), src: ((item.imgUrl)), fallback: ("/image/login.jpg"), width: ("100%"), }));
            const __VLS_44 = __VLS_43({ height: ((props.imgHeight)), src: ((item.imgUrl)), fallback: ("/image/login.jpg"), width: ("100%"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
            ({}({ height: ((props.imgHeight)), src: ((item.imgUrl)), fallback: ("/image/login.jpg"), width: ("100%"), }));
            const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44));
            // @ts-ignore
            [galleryList, galleryList, loadingInfo,];
            // @ts-ignore
            const __VLS_48 = {}
                .ACardMeta;
            ({}.ACardMeta);
            ({}.ACardMeta);
            __VLS_components.ACardMeta;
            __VLS_components.aCardMeta;
            __VLS_components.ACardMeta;
            __VLS_components.aCardMeta;
            // @ts-ignore
            [ACardMeta, ACardMeta,];
            // @ts-ignore
            const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
            const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
            ({}({}));
            const __VLS_53 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_53.slots);
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center truncate mt-2") }, });
                (item.imgName);
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { description: __VLS_thisSlot } = __VLS_nonNullable(__VLS_53.slots);
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center truncate mt-2") }, });
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
                const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ ...{ 'onClick': {} }, type: ("link"), }));
                const __VLS_56 = __VLS_55({ ...{ 'onClick': {} }, type: ("link"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
                ({}({ ...{ 'onClick': {} }, type: ("link"), }));
                let __VLS_60;
                const __VLS_61 = {
                    onClick: (...[$event]) => {
                        if (!((__VLS_ctx.galleryList.length > 0)))
                            return;
                        __VLS_ctx.getGalleryInfo(item.id);
                        // @ts-ignore
                        [getGalleryInfo,];
                    }
                };
                const __VLS_59 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56));
                let __VLS_57;
                let __VLS_58;
                __VLS_nonNullable(__VLS_59.slots).default;
                if (__VLS_ctx.isDownloadBut) {
                    // @ts-ignore
                    const __VLS_62 = {}
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
                    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ ...{ 'onClick': {} }, danger: (true), }));
                    const __VLS_64 = __VLS_63({ ...{ 'onClick': {} }, danger: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
                    ({}({ ...{ 'onClick': {} }, danger: (true), }));
                    let __VLS_68;
                    const __VLS_69 = {
                        onClick: (...[$event]) => {
                            if (!((__VLS_ctx.galleryList.length > 0)))
                                return;
                            if (!((__VLS_ctx.isDownloadBut)))
                                return;
                            __VLS_ctx.downloadFile(item.imgName, item.imgUrl);
                            // @ts-ignore
                            [isDownloadBut, downloadFile,];
                        }
                    };
                    const __VLS_67 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64));
                    let __VLS_65;
                    let __VLS_66;
                    __VLS_nonNullable(__VLS_67.slots).default;
                }
            }
            __VLS_nonNullable(__VLS_41.slots).default;
            __VLS_nonNullable(__VLS_35.slots).default;
        }
        __VLS_nonNullable(__VLS_29.slots).default;
        __VLS_nonNullable(__VLS_23.slots).default;
        __VLS_nonNullable(__VLS_17.slots).default;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center mt-5") }, });
        // @ts-ignore
        const __VLS_70 = {}
            .APagination;
        ({}.APagination);
        __VLS_components.APagination;
        __VLS_components.aPagination;
        // @ts-ignore
        [APagination,];
        // @ts-ignore
        const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{ 'onChange': {} }, current: ((__VLS_ctx.current)), pageSize: ((12)), total: ((__VLS_ctx.pageTotal)), showLessItems: (true), }));
        const __VLS_72 = __VLS_71({ ...{ 'onChange': {} }, current: ((__VLS_ctx.current)), pageSize: ((12)), total: ((__VLS_ctx.pageTotal)), showLessItems: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
        ({}({ ...{ 'onChange': {} }, current: ((__VLS_ctx.current)), pageSize: ((12)), total: ((__VLS_ctx.pageTotal)), showLessItems: (true), }));
        let __VLS_76;
        const __VLS_77 = {
            onChange: (__VLS_ctx.getGalleryList)
        };
        const __VLS_75 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72));
        let __VLS_73;
        let __VLS_74;
        // @ts-ignore
        [current, pageTotal, getGalleryList,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-2") }, });
        // @ts-ignore
        const __VLS_78 = {}
            .AEmpty;
        ({}.AEmpty);
        __VLS_components.AEmpty;
        __VLS_components.aEmpty;
        // @ts-ignore
        [AEmpty,];
        // @ts-ignore
        const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({}));
        const __VLS_80 = __VLS_79({}, ...__VLS_functionalComponentArgsRest(__VLS_79));
        ({}({}));
        const __VLS_83 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_84 = {}
        .AModal;
    ({}.AModal);
    ({}.AModal);
    __VLS_components.AModal;
    __VLS_components.aModal;
    __VLS_components.AModal;
    __VLS_components.aModal;
    // @ts-ignore
    [AModal, AModal,];
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ ...{ 'onOk': {} }, open: ((__VLS_ctx.open)), title: ("图信息"), }));
    const __VLS_86 = __VLS_85({ ...{ 'onOk': {} }, open: ((__VLS_ctx.open)), title: ("图信息"), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    ({}({ ...{ 'onOk': {} }, open: ((__VLS_ctx.open)), title: ("图信息"), }));
    let __VLS_90;
    const __VLS_91 = {
        onOk: (__VLS_ctx.handleOk)
    };
    const __VLS_89 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86));
    let __VLS_87;
    let __VLS_88;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { footer: __VLS_thisSlot } = __VLS_nonNullable(__VLS_89.slots);
        // @ts-ignore
        const __VLS_92 = {}
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
        const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ ...{ 'onClick': {} }, key: ("back"), }));
        const __VLS_94 = __VLS_93({ ...{ 'onClick': {} }, key: ("back"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
        ({}({ ...{ 'onClick': {} }, key: ("back"), }));
        let __VLS_98;
        const __VLS_99 = {
            onClick: (...[$event]) => {
                __VLS_ctx.open = false;
                // @ts-ignore
                [open, open, handleOk,];
            }
        };
        const __VLS_97 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94));
        let __VLS_95;
        let __VLS_96;
        __VLS_nonNullable(__VLS_97.slots).default;
        // @ts-ignore
        const __VLS_100 = {}
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
        const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ ...{ 'onClick': {} }, loading: ((__VLS_ctx.delLoading)), danger: (true), }));
        const __VLS_102 = __VLS_101({ ...{ 'onClick': {} }, loading: ((__VLS_ctx.delLoading)), danger: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
        ({}({ ...{ 'onClick': {} }, loading: ((__VLS_ctx.delLoading)), danger: (true), }));
        let __VLS_106;
        const __VLS_107 = {
            onClick: (...[$event]) => {
                __VLS_ctx.delGallery();
                // @ts-ignore
                [delLoading, delGallery,];
            }
        };
        const __VLS_105 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102));
        let __VLS_103;
        let __VLS_104;
        __VLS_nonNullable(__VLS_105.slots).default;
        // @ts-ignore
        const __VLS_108 = {}
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
        const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ ...{ 'onClick': {} }, key: ("submit"), loading: ((__VLS_ctx.loading)), type: ("primary"), }));
        const __VLS_110 = __VLS_109({ ...{ 'onClick': {} }, key: ("submit"), loading: ((__VLS_ctx.loading)), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
        ({}({ ...{ 'onClick': {} }, key: ("submit"), loading: ((__VLS_ctx.loading)), type: ("primary"), }));
        let __VLS_114;
        const __VLS_115 = {
            onClick: (__VLS_ctx.handleOk)
        };
        const __VLS_113 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110));
        let __VLS_111;
        let __VLS_112;
        // @ts-ignore
        [handleOk, loading,];
        __VLS_nonNullable(__VLS_113.slots).default;
    }
    // @ts-ignore
    const __VLS_116 = {}
        .AForm;
    ({}.AForm);
    ({}.AForm);
    __VLS_components.AForm;
    __VLS_components.aForm;
    __VLS_components.AForm;
    __VLS_components.aForm;
    // @ts-ignore
    [AForm, AForm,];
    // @ts-ignore
    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ ref: ("formRef"), labelCol: (({ span: 5 })), model: ((__VLS_ctx.formState)), rules: ((__VLS_ctx.rules)), wrapperCol: (({ span: 18 })), }));
    const __VLS_118 = __VLS_117({ ref: ("formRef"), labelCol: (({ span: 5 })), model: ((__VLS_ctx.formState)), rules: ((__VLS_ctx.rules)), wrapperCol: (({ span: 18 })), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    ({}({ ref: ("formRef"), labelCol: (({ span: 5 })), model: ((__VLS_ctx.formState)), rules: ((__VLS_ctx.rules)), wrapperCol: (({ span: 18 })), }));
    // @ts-ignore
    (__VLS_ctx.formRef);
    const __VLS_121 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118));
    // @ts-ignore
    const __VLS_122 = {}
        .AFormItem;
    ({}.AFormItem);
    ({}.AFormItem);
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    // @ts-ignore
    [AFormItem, AFormItem,];
    // @ts-ignore
    const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ label: ("图片名字"), name: ("imgName"), }));
    const __VLS_124 = __VLS_123({ label: ("图片名字"), name: ("imgName"), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
    ({}({ label: ("图片名字"), name: ("imgName"), }));
    const __VLS_127 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124));
    // @ts-ignore
    const __VLS_128 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ value: ((__VLS_ctx.formState.imgName)), placeholder: ("请输入名称"), }));
    const __VLS_130 = __VLS_129({ value: ((__VLS_ctx.formState.imgName)), placeholder: ("请输入名称"), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
    ({}({ value: ((__VLS_ctx.formState.imgName)), placeholder: ("请输入名称"), }));
    const __VLS_133 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130));
    // @ts-ignore
    [formState, formState, rules, formRef,];
    __VLS_nonNullable(__VLS_127.slots).default;
    // @ts-ignore
    const __VLS_134 = {}
        .AFormItem;
    ({}.AFormItem);
    ({}.AFormItem);
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    // @ts-ignore
    [AFormItem, AFormItem,];
    // @ts-ignore
    const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({ ref: ("imgSize"), label: ("图片大小"), name: ("imgSize"), }));
    const __VLS_136 = __VLS_135({ ref: ("imgSize"), label: ("图片大小"), name: ("imgSize"), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
    ({}({ ref: ("imgSize"), label: ("图片大小"), name: ("imgSize"), }));
    // @ts-ignore
    (__VLS_ctx.imgSize);
    const __VLS_139 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136));
    // @ts-ignore
    const __VLS_140 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({ value: ((__VLS_ctx.formState.imgSize)), disabled: (true), }));
    const __VLS_142 = __VLS_141({ value: ((__VLS_ctx.formState.imgSize)), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
    ({}({ value: ((__VLS_ctx.formState.imgSize)), disabled: (true), }));
    const __VLS_145 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142));
    // @ts-ignore
    [formState, imgSize,];
    __VLS_nonNullable(__VLS_139.slots).default;
    // @ts-ignore
    const __VLS_146 = {}
        .AFormItem;
    ({}.AFormItem);
    ({}.AFormItem);
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    // @ts-ignore
    [AFormItem, AFormItem,];
    // @ts-ignore
    const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ label: ("图片宽度"), name: ("imgWidth"), }));
    const __VLS_148 = __VLS_147({ label: ("图片宽度"), name: ("imgWidth"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
    ({}({ label: ("图片宽度"), name: ("imgWidth"), }));
    const __VLS_151 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148));
    // @ts-ignore
    const __VLS_152 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ value: ((__VLS_ctx.formState.imgWidth)), placeholder: ("请输入图片宽度"), }));
    const __VLS_154 = __VLS_153({ value: ((__VLS_ctx.formState.imgWidth)), placeholder: ("请输入图片宽度"), }, ...__VLS_functionalComponentArgsRest(__VLS_153));
    ({}({ value: ((__VLS_ctx.formState.imgWidth)), placeholder: ("请输入图片宽度"), }));
    const __VLS_157 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_152, __VLS_154));
    // @ts-ignore
    [formState,];
    __VLS_nonNullable(__VLS_151.slots).default;
    // @ts-ignore
    const __VLS_158 = {}
        .AFormItem;
    ({}.AFormItem);
    ({}.AFormItem);
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    // @ts-ignore
    [AFormItem, AFormItem,];
    // @ts-ignore
    const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({ label: ("图片高度"), name: ("imgHeight"), }));
    const __VLS_160 = __VLS_159({ label: ("图片高度"), name: ("imgHeight"), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
    ({}({ label: ("图片高度"), name: ("imgHeight"), }));
    const __VLS_163 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160));
    // @ts-ignore
    const __VLS_164 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({ value: ((__VLS_ctx.formState.imgHeight)), placeholder: ("请输入图片高度"), }));
    const __VLS_166 = __VLS_165({ value: ((__VLS_ctx.formState.imgHeight)), placeholder: ("请输入图片高度"), }, ...__VLS_functionalComponentArgsRest(__VLS_165));
    ({}({ value: ((__VLS_ctx.formState.imgHeight)), placeholder: ("请输入图片高度"), }));
    const __VLS_169 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_164, __VLS_166));
    // @ts-ignore
    [formState,];
    __VLS_nonNullable(__VLS_163.slots).default;
    // @ts-ignore
    const __VLS_170 = {}
        .AFormItem;
    ({}.AFormItem);
    ({}.AFormItem);
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    // @ts-ignore
    [AFormItem, AFormItem,];
    // @ts-ignore
    const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({ label: ("图片格式"), name: ("imgFormat"), }));
    const __VLS_172 = __VLS_171({ label: ("图片格式"), name: ("imgFormat"), }, ...__VLS_functionalComponentArgsRest(__VLS_171));
    ({}({ label: ("图片格式"), name: ("imgFormat"), }));
    const __VLS_175 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172));
    // @ts-ignore
    const __VLS_176 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({ value: ((__VLS_ctx.formState.imgFormat)), disabled: (true), }));
    const __VLS_178 = __VLS_177({ value: ((__VLS_ctx.formState.imgFormat)), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_177));
    ({}({ value: ((__VLS_ctx.formState.imgFormat)), disabled: (true), }));
    const __VLS_181 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_176, __VLS_178));
    // @ts-ignore
    [formState,];
    __VLS_nonNullable(__VLS_175.slots).default;
    // @ts-ignore
    const __VLS_182 = {}
        .AFormItem;
    ({}.AFormItem);
    ({}.AFormItem);
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    // @ts-ignore
    [AFormItem, AFormItem,];
    // @ts-ignore
    const __VLS_183 = __VLS_asFunctionalComponent(__VLS_182, new __VLS_182({ label: ("图片hash"), name: ("imgHash"), }));
    const __VLS_184 = __VLS_183({ label: ("图片hash"), name: ("imgHash"), }, ...__VLS_functionalComponentArgsRest(__VLS_183));
    ({}({ label: ("图片hash"), name: ("imgHash"), }));
    const __VLS_187 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_182, __VLS_184));
    // @ts-ignore
    const __VLS_188 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188({ value: ((__VLS_ctx.formState.imgHash)), disabled: (true), }));
    const __VLS_190 = __VLS_189({ value: ((__VLS_ctx.formState.imgHash)), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_189));
    ({}({ value: ((__VLS_ctx.formState.imgHash)), disabled: (true), }));
    const __VLS_193 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_188, __VLS_190));
    // @ts-ignore
    [formState,];
    __VLS_nonNullable(__VLS_187.slots).default;
    // @ts-ignore
    const __VLS_194 = {}
        .AFormItem;
    ({}.AFormItem);
    ({}.AFormItem);
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    // @ts-ignore
    [AFormItem, AFormItem,];
    // @ts-ignore
    const __VLS_195 = __VLS_asFunctionalComponent(__VLS_194, new __VLS_194({ label: ("图片地址"), name: ("imgUrl"), }));
    const __VLS_196 = __VLS_195({ label: ("图片地址"), name: ("imgUrl"), }, ...__VLS_functionalComponentArgsRest(__VLS_195));
    ({}({ label: ("图片地址"), name: ("imgUrl"), }));
    const __VLS_199 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_194, __VLS_196));
    // @ts-ignore
    const __VLS_200 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_201 = __VLS_asFunctionalComponent(__VLS_200, new __VLS_200({ value: ((__VLS_ctx.formState.imgUrl)), disabled: (true), }));
    const __VLS_202 = __VLS_201({ value: ((__VLS_ctx.formState.imgUrl)), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_201));
    ({}({ value: ((__VLS_ctx.formState.imgUrl)), disabled: (true), }));
    const __VLS_205 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_200, __VLS_202));
    // @ts-ignore
    [formState,];
    __VLS_nonNullable(__VLS_199.slots).default;
    // @ts-ignore
    const __VLS_206 = {}
        .AFormItem;
    ({}.AFormItem);
    ({}.AFormItem);
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    // @ts-ignore
    [AFormItem, AFormItem,];
    // @ts-ignore
    const __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({ label: ("创建时间"), name: ("imgUrl"), }));
    const __VLS_208 = __VLS_207({ label: ("创建时间"), name: ("imgUrl"), }, ...__VLS_functionalComponentArgsRest(__VLS_207));
    ({}({ label: ("创建时间"), name: ("imgUrl"), }));
    const __VLS_211 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_206, __VLS_208));
    // @ts-ignore
    const __VLS_212 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_213 = __VLS_asFunctionalComponent(__VLS_212, new __VLS_212({ value: ((__VLS_ctx.formState.createTime)), disabled: (true), }));
    const __VLS_214 = __VLS_213({ value: ((__VLS_ctx.formState.createTime)), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_213));
    ({}({ value: ((__VLS_ctx.formState.createTime)), disabled: (true), }));
    const __VLS_217 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_212, __VLS_214));
    // @ts-ignore
    [formState,];
    __VLS_nonNullable(__VLS_211.slots).default;
    // @ts-ignore
    const __VLS_218 = {}
        .AFormItem;
    ({}.AFormItem);
    ({}.AFormItem);
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    __VLS_components.AFormItem;
    __VLS_components.aFormItem;
    // @ts-ignore
    [AFormItem, AFormItem,];
    // @ts-ignore
    const __VLS_219 = __VLS_asFunctionalComponent(__VLS_218, new __VLS_218({ label: ("图片描述"), name: ("imgDesc"), }));
    const __VLS_220 = __VLS_219({ label: ("图片描述"), name: ("imgDesc"), }, ...__VLS_functionalComponentArgsRest(__VLS_219));
    ({}({ label: ("图片描述"), name: ("imgDesc"), }));
    const __VLS_223 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_218, __VLS_220));
    // @ts-ignore
    const __VLS_224 = {}
        .ATextarea;
    ({}.ATextarea);
    __VLS_components.ATextarea;
    __VLS_components.aTextarea;
    // @ts-ignore
    [ATextarea,];
    // @ts-ignore
    const __VLS_225 = __VLS_asFunctionalComponent(__VLS_224, new __VLS_224({ value: ((__VLS_ctx.formState.imgDesc)), placeholder: ("请输入图片描述"), }));
    const __VLS_226 = __VLS_225({ value: ((__VLS_ctx.formState.imgDesc)), placeholder: ("请输入图片描述"), }, ...__VLS_functionalComponentArgsRest(__VLS_225));
    ({}({ value: ((__VLS_ctx.formState.imgDesc)), placeholder: ("请输入图片描述"), }));
    const __VLS_229 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_224, __VLS_226));
    // @ts-ignore
    [formState,];
    __VLS_nonNullable(__VLS_223.slots).default;
    if (!__VLS_ctx.isDownloadBut) {
        // @ts-ignore
        const __VLS_230 = {}
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
        const __VLS_231 = __VLS_asFunctionalComponent(__VLS_230, new __VLS_230({ ...{ 'onClick': {} }, loading: ((__VLS_ctx.downloadLoading)), ...{ class: ("w-full") }, danger: (true), }));
        const __VLS_232 = __VLS_231({ ...{ 'onClick': {} }, loading: ((__VLS_ctx.downloadLoading)), ...{ class: ("w-full") }, danger: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_231));
        ({}({ ...{ 'onClick': {} }, loading: ((__VLS_ctx.downloadLoading)), ...{ class: ("w-full") }, danger: (true), }));
        let __VLS_236;
        const __VLS_237 = {
            onClick: (...[$event]) => {
                if (!((!__VLS_ctx.isDownloadBut)))
                    return;
                __VLS_ctx.downloadFile(__VLS_ctx.formState.imgName, __VLS_ctx.formState.imgUrl);
                // @ts-ignore
                [isDownloadBut, downloadFile, formState, formState, downloadLoading,];
            }
        };
        const __VLS_235 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_230, __VLS_232));
        let __VLS_233;
        let __VLS_234;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_235.slots);
            // @ts-ignore
            const __VLS_238 = {}
                .DownloadOutlined;
            ({}.DownloadOutlined);
            __VLS_components.DownloadOutlined;
            // @ts-ignore
            [DownloadOutlined,];
            // @ts-ignore
            const __VLS_239 = __VLS_asFunctionalComponent(__VLS_238, new __VLS_238({}));
            const __VLS_240 = __VLS_239({}, ...__VLS_functionalComponentArgsRest(__VLS_239));
            ({}({}));
            const __VLS_243 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_238, __VLS_240));
        }
    }
    __VLS_nonNullable(__VLS_121.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['ml-1'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['truncate'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['truncate'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['mt-5'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['w-full'];
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
                DownloadOutlined: DownloadOutlined,
                isDownloadBut: isDownloadBut,
                pageTotal: pageTotal,
                galleryList: galleryList,
                current: current,
                loading: loading,
                loadingInfo: loadingInfo,
                delLoading: delLoading,
                open: open,
                formRef: formRef,
                formState: formState,
                rules: rules,
                delGallery: delGallery,
                getGalleryList: getGalleryList,
                getGalleryInfo: getGalleryInfo,
                handleOk: handleOk,
                downloadLoading: downloadLoading,
                downloadFile: downloadFile,
            };
        },
        props: {
            spanValue: {
                type: Number,
            },
            styleHeight: {
                type: String,
            },
            imgHeight: {
                type: String,
            }
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        spanValue: {
            type: Number,
        },
        styleHeight: {
            type: String,
        },
        imgHeight: {
            type: String,
        }
    },
});
;
