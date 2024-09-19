import { reactive, ref } from "vue";
import { getGalleryDetailApi } from "@/api/gallert";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const galleryInfo = reactive({
    createTime: "",
    id: 0,
    imgDesc: "",
    imgFormat: "",
    imgHash: "",
    imgHeight: 0,
    imgName: "",
    imgSize: 0,
    imgType: "",
    imgUrl: "",
    imgWidth: 0,
    updateTime: "",
    userid: 0
});
const openGalleryInfo = ref(false);
const spinningGallery = ref(false);
/**
 * 获取图信息
 * @param id
 */
const showGalleryInfo = async (id) => {
    spinningGallery.value = true;
    const res = await getGalleryDetailApi(id);
    if (res.code == 200) {
        Object.assign(galleryInfo, res.data);
        openGalleryInfo.value = true;
        setTimeout(() => {
            spinningGallery.value = false;
        }, 200);
    }
};
const __VLS_exposed = { showGalleryInfo };
defineExpose({ showGalleryInfo });
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ spinning: ((__VLS_ctx.spinningGallery)), tip: ("加载中"), }));
    const __VLS_2 = __VLS_1({ spinning: ((__VLS_ctx.spinningGallery)), tip: ("加载中"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ spinning: ((__VLS_ctx.spinningGallery)), tip: ("加载中"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ open: ((__VLS_ctx.openGalleryInfo)), title: ("图信息"), }));
    const __VLS_8 = __VLS_7({ open: ((__VLS_ctx.openGalleryInfo)), title: ("图信息"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ open: ((__VLS_ctx.openGalleryInfo)), title: ("图信息"), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { footer: __VLS_thisSlot } = __VLS_nonNullable(__VLS_11.slots);
        // @ts-ignore
        const __VLS_12 = {}
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
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onClick': {} }, key: ("back"), danger: (true), type: ("primary"), }));
        const __VLS_14 = __VLS_13({ ...{ 'onClick': {} }, key: ("back"), danger: (true), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ ...{ 'onClick': {} }, key: ("back"), danger: (true), type: ("primary"), }));
        let __VLS_18;
        const __VLS_19 = {
            onClick: (...[$event]) => {
                __VLS_ctx.openGalleryInfo = false;
                // @ts-ignore
                [spinningGallery, openGalleryInfo, openGalleryInfo,];
            }
        };
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
        let __VLS_15;
        let __VLS_16;
        __VLS_nonNullable(__VLS_17.slots).default;
    }
    // @ts-ignore
    const __VLS_20 = {}
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
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ labelCol: (({ span: 5 })), wrapperCol: (({ span: 18 })), }));
    const __VLS_22 = __VLS_21({ labelCol: (({ span: 5 })), wrapperCol: (({ span: 18 })), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ labelCol: (({ span: 5 })), wrapperCol: (({ span: 18 })), }));
    const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
    // @ts-ignore
    const __VLS_26 = {}
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
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ label: ("图片名字"), name: ("imgName"), }));
    const __VLS_28 = __VLS_27({ label: ("图片名字"), name: ("imgName"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ label: ("图片名字"), name: ("imgName"), }));
    const __VLS_31 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28));
    // @ts-ignore
    const __VLS_32 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ value: ((__VLS_ctx.galleryInfo.imgName)), disabled: (true), }));
    const __VLS_34 = __VLS_33({ value: ((__VLS_ctx.galleryInfo.imgName)), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ value: ((__VLS_ctx.galleryInfo.imgName)), disabled: (true), }));
    const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34));
    // @ts-ignore
    [galleryInfo,];
    __VLS_nonNullable(__VLS_31.slots).default;
    // @ts-ignore
    const __VLS_38 = {}
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
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ label: ("图片大小"), name: ("imgSize"), r: (true), }));
    const __VLS_40 = __VLS_39({ label: ("图片大小"), name: ("imgSize"), r: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ label: ("图片大小"), name: ("imgSize"), r: (true), }));
    const __VLS_43 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40));
    // @ts-ignore
    const __VLS_44 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ value: ((__VLS_ctx.galleryInfo.imgSize)), disabled: (true), }));
    const __VLS_46 = __VLS_45({ value: ((__VLS_ctx.galleryInfo.imgSize)), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    ({}({ value: ((__VLS_ctx.galleryInfo.imgSize)), disabled: (true), }));
    const __VLS_49 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46));
    // @ts-ignore
    [galleryInfo,];
    __VLS_nonNullable(__VLS_43.slots).default;
    // @ts-ignore
    const __VLS_50 = {}
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
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ label: ("图片宽度"), name: ("imgWidth"), }));
    const __VLS_52 = __VLS_51({ label: ("图片宽度"), name: ("imgWidth"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    ({}({ label: ("图片宽度"), name: ("imgWidth"), }));
    const __VLS_55 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52));
    // @ts-ignore
    const __VLS_56 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ value: ((__VLS_ctx.galleryInfo.imgWidth)), disabled: (true), }));
    const __VLS_58 = __VLS_57({ value: ((__VLS_ctx.galleryInfo.imgWidth)), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({ value: ((__VLS_ctx.galleryInfo.imgWidth)), disabled: (true), }));
    const __VLS_61 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58));
    // @ts-ignore
    [galleryInfo,];
    __VLS_nonNullable(__VLS_55.slots).default;
    // @ts-ignore
    const __VLS_62 = {}
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
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ label: ("图片高度"), name: ("imgHeight"), }));
    const __VLS_64 = __VLS_63({ label: ("图片高度"), name: ("imgHeight"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    ({}({ label: ("图片高度"), name: ("imgHeight"), }));
    const __VLS_67 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64));
    // @ts-ignore
    const __VLS_68 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ value: ((__VLS_ctx.galleryInfo.imgHeight)), disabled: (true), }));
    const __VLS_70 = __VLS_69({ value: ((__VLS_ctx.galleryInfo.imgHeight)), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    ({}({ value: ((__VLS_ctx.galleryInfo.imgHeight)), disabled: (true), }));
    const __VLS_73 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70));
    // @ts-ignore
    [galleryInfo,];
    __VLS_nonNullable(__VLS_67.slots).default;
    // @ts-ignore
    const __VLS_74 = {}
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
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ label: ("图片格式"), name: ("imgFormat"), }));
    const __VLS_76 = __VLS_75({ label: ("图片格式"), name: ("imgFormat"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    ({}({ label: ("图片格式"), name: ("imgFormat"), }));
    const __VLS_79 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76));
    // @ts-ignore
    const __VLS_80 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ value: ((__VLS_ctx.galleryInfo.imgFormat)), disabled: (true), }));
    const __VLS_82 = __VLS_81({ value: ((__VLS_ctx.galleryInfo.imgFormat)), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    ({}({ value: ((__VLS_ctx.galleryInfo.imgFormat)), disabled: (true), }));
    const __VLS_85 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82));
    // @ts-ignore
    [galleryInfo,];
    __VLS_nonNullable(__VLS_79.slots).default;
    // @ts-ignore
    const __VLS_86 = {}
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
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ label: ("图片hash"), name: ("imgHash"), }));
    const __VLS_88 = __VLS_87({ label: ("图片hash"), name: ("imgHash"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    ({}({ label: ("图片hash"), name: ("imgHash"), }));
    const __VLS_91 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88));
    // @ts-ignore
    const __VLS_92 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ value: ((__VLS_ctx.galleryInfo.imgHash)), disabled: (true), }));
    const __VLS_94 = __VLS_93({ value: ((__VLS_ctx.galleryInfo.imgHash)), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    ({}({ value: ((__VLS_ctx.galleryInfo.imgHash)), disabled: (true), }));
    const __VLS_97 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94));
    // @ts-ignore
    [galleryInfo,];
    __VLS_nonNullable(__VLS_91.slots).default;
    // @ts-ignore
    const __VLS_98 = {}
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
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ label: ("图片地址"), name: ("imgUrl"), }));
    const __VLS_100 = __VLS_99({ label: ("图片地址"), name: ("imgUrl"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    ({}({ label: ("图片地址"), name: ("imgUrl"), }));
    const __VLS_103 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100));
    // @ts-ignore
    const __VLS_104 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ value: ((__VLS_ctx.galleryInfo.imgUrl)), disabled: (true), }));
    const __VLS_106 = __VLS_105({ value: ((__VLS_ctx.galleryInfo.imgUrl)), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    ({}({ value: ((__VLS_ctx.galleryInfo.imgUrl)), disabled: (true), }));
    const __VLS_109 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106));
    // @ts-ignore
    [galleryInfo,];
    __VLS_nonNullable(__VLS_103.slots).default;
    // @ts-ignore
    const __VLS_110 = {}
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
    const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ label: ("创建时间"), name: ("imgUrl"), }));
    const __VLS_112 = __VLS_111({ label: ("创建时间"), name: ("imgUrl"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
    ({}({ label: ("创建时间"), name: ("imgUrl"), }));
    const __VLS_115 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112));
    // @ts-ignore
    const __VLS_116 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ value: ((__VLS_ctx.galleryInfo.createTime)), disabled: (true), }));
    const __VLS_118 = __VLS_117({ value: ((__VLS_ctx.galleryInfo.createTime)), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    ({}({ value: ((__VLS_ctx.galleryInfo.createTime)), disabled: (true), }));
    const __VLS_121 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118));
    // @ts-ignore
    [galleryInfo,];
    __VLS_nonNullable(__VLS_115.slots).default;
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
    const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ label: ("图片描述"), name: ("imgDesc"), }));
    const __VLS_124 = __VLS_123({ label: ("图片描述"), name: ("imgDesc"), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
    ({}({ label: ("图片描述"), name: ("imgDesc"), }));
    const __VLS_127 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124));
    // @ts-ignore
    const __VLS_128 = {}
        .ATextarea;
    ({}.ATextarea);
    __VLS_components.ATextarea;
    __VLS_components.aTextarea;
    // @ts-ignore
    [ATextarea,];
    // @ts-ignore
    const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ value: ((__VLS_ctx.galleryInfo.imgDesc)), disabled: (true), }));
    const __VLS_130 = __VLS_129({ value: ((__VLS_ctx.galleryInfo.imgDesc)), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
    ({}({ value: ((__VLS_ctx.galleryInfo.imgDesc)), disabled: (true), }));
    const __VLS_133 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130));
    // @ts-ignore
    [galleryInfo,];
    __VLS_nonNullable(__VLS_127.slots).default;
    __VLS_nonNullable(__VLS_25.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                galleryInfo: galleryInfo,
                openGalleryInfo: openGalleryInfo,
                spinningGallery: spinningGallery,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
});
;
