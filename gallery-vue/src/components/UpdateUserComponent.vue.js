import { onMounted, reactive, ref, watch } from 'vue';
import { PlusOutlined, InboxOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { useWindowSize } from "@vueuse/core";
import { updateUserApi, getUserInfoApi, updateUserAvatarApi } from "@/api/user";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { width: windowWidth } = useWindowSize();
const avatarOpen = ref(false);
const drawerStyle = ref({ drawerWidth: 720 });
const formRef = ref();
const form = reactive({
    id: 0,
    userName: '',
    email: '',
    password: ''
});
const fileValue = ref();
const loading = ref(false);
const imageUrl = ref('');
const openDrawer = ref(false);
const checkEmail = async (_rule, value) => {
    if (!value) {
        return Promise.reject('邮箱不能为空！');
    }
    else if (!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
        return Promise.reject("邮箱格式不正确");
    }
};
const checkPassword = () => {
    let password = form.password;
    if (password.length > 0 || password != '') {
        if (password.length < 6 || password.length > 16) {
            message.error("密码长度不能小于6位");
            return false;
        }
    }
    return true;
};
const rules = {
    userName: [{ required: true, message: '用户名不能为空' }],
    email: [{ validator: checkEmail, trigger: 'change' }]
};
const showDrawer = () => {
    getUserInfo();
    openDrawer.value = true;
};
const onClose = () => {
    openDrawer.value = false;
};
/**
 * 修改用户信息回调函数
 */
const submitLoading = ref(false);
const handleSubmit = async (values) => {
    if (checkPassword()) {
        submitLoading.value = true;
        values.id = form.id;
        const res = await updateUserApi(values);
        if (res.code == 200) {
            await getUserInfo();
            message.success("修改成功！");
        }
        else {
            message.error(res.msg);
        }
        setTimeout(() => {
            submitLoading.value = false;
        }, 200);
    }
};
/**
 * 表单错误时回调函数
 */
const handleFinishFailed = () => {
    message.error('请完成表单验证！');
};
/**
 * 获取用户信息
 */
const getUserInfo = async () => {
    const res = await getUserInfoApi();
    if (res.code == 200) {
        form.id = res.data.id;
        form.userName = res.data.userName;
        form.email = res.data.email;
        form.password = '';
        imageUrl.value = res.data.avatar == null ? '' : res.data.avatar;
    }
};
/**
 * 上传之前校验图片大小
 * @param file
 */
const isShowImage = ref('');
const beforeUpload = (file) => {
    loading.value = true;
    const isLt2M = file.size / (1024 * 1024) < 5;
    if (!isLt2M) {
        message.error('图像必须小于5MB!');
    }
    else {
        isShowImage.value = file ? URL.createObjectURL(file) : '';
        fileValue.value = file;
    }
    loading.value = false;
    return isLt2M;
};
/**
 * 打开头像上传Modal
 */
const showAvatarModal = () => {
    isShowImage.value = imageUrl.value;
    avatarOpen.value = true;
};
/**
 *关闭头像上传Modal
 */
const handleAvatarCancel = () => {
    isShowImage.value = '';
    avatarOpen.value = false;
};
/**
 * 提交头像函数
 * @param e
 */
const handleAvatarOk = async (e) => {
    loading.value = true;
    if (fileValue.value == null) {
        return message.error("请先更换新的头像");
    }
    const res = await updateUserAvatarApi(fileValue.value);
    if (res.code == 200) {
        await getUserInfo();
        loading.value = false;
        avatarOpen.value = false;
    }
};
const __VLS_exposed = { showDrawer };
defineExpose({ showDrawer });
const setWindowStyle = (winValue) => {
    if (winValue < 768) {
        drawerStyle.value = { drawerWidth: 400 };
    }
    else {
        drawerStyle.value = { drawerWidth: 720 };
    }
};
watch(windowWidth, newVal => {
    if (newVal) {
        setWindowStyle(newVal);
    }
});
onMounted(async () => {
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
        .ADrawer;
    ({}.ADrawer);
    ({}.ADrawer);
    __VLS_components.ADrawer;
    __VLS_components.aDrawer;
    __VLS_components.ADrawer;
    __VLS_components.aDrawer;
    // @ts-ignore
    [ADrawer, ADrawer,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, bodyStyle: (({ paddingBottom: '80px' })), footerStyle: (({ textAlign: 'right' })), open: ((__VLS_ctx.openDrawer)), width: ((__VLS_ctx.drawerStyle.drawerWidth)), title: ("用户信息"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, bodyStyle: (({ paddingBottom: '80px' })), footerStyle: (({ textAlign: 'right' })), open: ((__VLS_ctx.openDrawer)), width: ((__VLS_ctx.drawerStyle.drawerWidth)), title: ("用户信息"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClose': {} }, bodyStyle: (({ paddingBottom: '80px' })), footerStyle: (({ textAlign: 'right' })), open: ((__VLS_ctx.openDrawer)), width: ((__VLS_ctx.drawerStyle.drawerWidth)), title: ("用户信息"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClose: (__VLS_ctx.onClose)
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    // @ts-ignore
    const __VLS_8 = {}
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
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onOk': {} }, open: ((__VLS_ctx.avatarOpen)), title: ("上传头像"), }));
    const __VLS_10 = __VLS_9({ ...{ 'onOk': {} }, open: ((__VLS_ctx.avatarOpen)), title: ("上传头像"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ ...{ 'onOk': {} }, open: ((__VLS_ctx.avatarOpen)), title: ("上传头像"), }));
    let __VLS_14;
    const __VLS_15 = {
        onOk: (__VLS_ctx.handleAvatarOk)
    };
    const __VLS_13 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10));
    let __VLS_11;
    let __VLS_12;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_16 = {}
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
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ beforeUpload: ((__VLS_ctx.beforeUpload)), customRequest: ((() => undefined)), disabled: ((__VLS_ctx.loading)), multiple: ((false)), showUploadList: ((false)), accept: ("image/*"), listType: ("picture-card"), name: ("avatar"), }));
    const __VLS_18 = __VLS_17({ beforeUpload: ((__VLS_ctx.beforeUpload)), customRequest: ((() => undefined)), disabled: ((__VLS_ctx.loading)), multiple: ((false)), showUploadList: ((false)), accept: ("image/*"), listType: ("picture-card"), name: ("avatar"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    ({}({ beforeUpload: ((__VLS_ctx.beforeUpload)), customRequest: ((() => undefined)), disabled: ((__VLS_ctx.loading)), multiple: ((false)), showUploadList: ((false)), accept: ("image/*"), listType: ("picture-card"), name: ("avatar"), }));
    const __VLS_21 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18));
    if (__VLS_ctx.isShowImage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.isShowImage)), alt: ("avatar"), height: ("90"), width: ("90"), });
        // @ts-ignore
        [openDrawer, drawerStyle, onClose, avatarOpen, handleAvatarOk, beforeUpload, loading, isShowImage, isShowImage,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ant-upload-drag-icon") }, });
        // @ts-ignore
        const __VLS_22 = {}
            .InboxOutlined;
        ({}.InboxOutlined);
        ({}.InboxOutlined);
        __VLS_components.InboxOutlined;
        __VLS_components.inboxOutlined;
        __VLS_components.InboxOutlined;
        __VLS_components.inboxOutlined;
        // @ts-ignore
        [InboxOutlined, InboxOutlined,];
        // @ts-ignore
        const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({}));
        const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
        ({}({}));
        const __VLS_27 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ant-upload-text") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("ant-upload-hint") }, });
    }
    __VLS_nonNullable(__VLS_21.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { footer: __VLS_thisSlot } = __VLS_nonNullable(__VLS_13.slots);
        // @ts-ignore
        const __VLS_28 = {}
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
        const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ ...{ 'onClick': {} }, key: ("back"), }));
        const __VLS_30 = __VLS_29({ ...{ 'onClick': {} }, key: ("back"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
        ({}({ ...{ 'onClick': {} }, key: ("back"), }));
        let __VLS_34;
        const __VLS_35 = {
            onClick: (__VLS_ctx.handleAvatarCancel)
        };
        const __VLS_33 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30));
        let __VLS_31;
        let __VLS_32;
        // @ts-ignore
        [handleAvatarCancel,];
        __VLS_nonNullable(__VLS_33.slots).default;
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
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ 'onClick': {} }, key: ("submit"), loading: ((__VLS_ctx.loading)), type: ("primary"), }));
        const __VLS_38 = __VLS_37({ ...{ 'onClick': {} }, key: ("submit"), loading: ((__VLS_ctx.loading)), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({ ...{ 'onClick': {} }, key: ("submit"), loading: ((__VLS_ctx.loading)), type: ("primary"), }));
        let __VLS_42;
        const __VLS_43 = {
            onClick: (__VLS_ctx.handleAvatarOk)
        };
        const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
        let __VLS_39;
        let __VLS_40;
        // @ts-ignore
        [handleAvatarOk, loading,];
        __VLS_nonNullable(__VLS_41.slots).default;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center") }, });
    if (__VLS_ctx.imageUrl) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imageUrl)), alt: ("avatar"), height: ("90"), width: ("90"), });
        // @ts-ignore
        [imageUrl, imageUrl,];
    }
    // @ts-ignore
    const __VLS_44 = {}
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
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{ 'onClick': {} }, block: (true), ...{ class: ("bg-stone-300 mt-2") }, }));
    const __VLS_46 = __VLS_45({ ...{ 'onClick': {} }, block: (true), ...{ class: ("bg-stone-300 mt-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    ({}({ ...{ 'onClick': {} }, block: (true), ...{ class: ("bg-stone-300 mt-2") }, }));
    let __VLS_50;
    const __VLS_51 = {
        onClick: (__VLS_ctx.showAvatarModal)
    };
    const __VLS_49 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46));
    let __VLS_47;
    let __VLS_48;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_49.slots);
        // @ts-ignore
        const __VLS_52 = {}
            .PlusOutlined;
        ({}.PlusOutlined);
        __VLS_components.PlusOutlined;
        __VLS_components.plusOutlined;
        // @ts-ignore
        [PlusOutlined,];
        // @ts-ignore
        const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({}));
        const __VLS_54 = __VLS_53({}, ...__VLS_functionalComponentArgsRest(__VLS_53));
        ({}({}));
        const __VLS_57 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54));
        // @ts-ignore
        [showAvatarModal,];
    }
    // @ts-ignore
    const __VLS_58 = {}
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
    const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ ...{ 'onFinish': {} }, ...{ 'onFinishFailed': {} }, ref: ("formRef"), labelCol: (({ span: 4 })), model: ((__VLS_ctx.form)), rules: ((__VLS_ctx.rules)), autocomplete: ("off"), ...{ class: ("mt-4") }, layout: ("vertical"), name: ("custom-validation"), }));
    const __VLS_60 = __VLS_59({ ...{ 'onFinish': {} }, ...{ 'onFinishFailed': {} }, ref: ("formRef"), labelCol: (({ span: 4 })), model: ((__VLS_ctx.form)), rules: ((__VLS_ctx.rules)), autocomplete: ("off"), ...{ class: ("mt-4") }, layout: ("vertical"), name: ("custom-validation"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
    ({}({ ...{ 'onFinish': {} }, ...{ 'onFinishFailed': {} }, ref: ("formRef"), labelCol: (({ span: 4 })), model: ((__VLS_ctx.form)), rules: ((__VLS_ctx.rules)), autocomplete: ("off"), ...{ class: ("mt-4") }, layout: ("vertical"), name: ("custom-validation"), }));
    // @ts-ignore
    (__VLS_ctx.formRef);
    let __VLS_64;
    const __VLS_65 = {
        onFinish: (__VLS_ctx.handleSubmit)
    };
    const __VLS_66 = {
        onFinishFailed: (__VLS_ctx.handleFinishFailed)
    };
    const __VLS_63 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60));
    let __VLS_61;
    let __VLS_62;
    // @ts-ignore
    const __VLS_67 = {}
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
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ label: ("用户名:"), name: ("userName"), }));
    const __VLS_69 = __VLS_68({ label: ("用户名:"), name: ("userName"), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    ({}({ label: ("用户名:"), name: ("userName"), }));
    const __VLS_72 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69));
    // @ts-ignore
    const __VLS_73 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ value: ((__VLS_ctx.form.userName)), placeholder: ("请输入用户名"), }));
    const __VLS_75 = __VLS_74({ value: ((__VLS_ctx.form.userName)), placeholder: ("请输入用户名"), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    ({}({ value: ((__VLS_ctx.form.userName)), placeholder: ("请输入用户名"), }));
    const __VLS_78 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_73, __VLS_75));
    // @ts-ignore
    [form, form, rules, formRef, handleSubmit, handleFinishFailed,];
    __VLS_nonNullable(__VLS_72.slots).default;
    // @ts-ignore
    const __VLS_79 = {}
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
    const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ label: ("邮箱:"), name: ("email"), }));
    const __VLS_81 = __VLS_80({ label: ("邮箱:"), name: ("email"), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
    ({}({ label: ("邮箱:"), name: ("email"), }));
    const __VLS_84 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_79, __VLS_81));
    // @ts-ignore
    const __VLS_85 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ value: ((__VLS_ctx.form.email)), placeholder: ("请输入邮箱"), }));
    const __VLS_87 = __VLS_86({ value: ((__VLS_ctx.form.email)), placeholder: ("请输入邮箱"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
    ({}({ value: ((__VLS_ctx.form.email)), placeholder: ("请输入邮箱"), }));
    const __VLS_90 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87));
    // @ts-ignore
    [form,];
    __VLS_nonNullable(__VLS_84.slots).default;
    // @ts-ignore
    const __VLS_91 = {}
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
    const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ label: ("密码"), name: ("password"), }));
    const __VLS_93 = __VLS_92({ label: ("密码"), name: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
    ({}({ label: ("密码"), name: ("password"), }));
    const __VLS_96 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93));
    // @ts-ignore
    const __VLS_97 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ value: ((__VLS_ctx.form.password)), placeholder: ("请输入密码"), }));
    const __VLS_99 = __VLS_98({ value: ((__VLS_ctx.form.password)), placeholder: ("请输入密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
    ({}({ value: ((__VLS_ctx.form.password)), placeholder: ("请输入密码"), }));
    const __VLS_102 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99));
    // @ts-ignore
    [form,];
    __VLS_nonNullable(__VLS_96.slots).default;
    // @ts-ignore
    const __VLS_103 = {}
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
    const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({}));
    const __VLS_105 = __VLS_104({}, ...__VLS_functionalComponentArgsRest(__VLS_104));
    ({}({}));
    const __VLS_108 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105));
    // @ts-ignore
    const __VLS_109 = {}
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
    const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({ loading: ((__VLS_ctx.submitLoading)), ...{ class: ("w-full") }, htmlType: ("submit"), type: ("primary"), }));
    const __VLS_111 = __VLS_110({ loading: ((__VLS_ctx.submitLoading)), ...{ class: ("w-full") }, htmlType: ("submit"), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_110));
    ({}({ loading: ((__VLS_ctx.submitLoading)), ...{ class: ("w-full") }, htmlType: ("submit"), type: ("primary"), }));
    const __VLS_114 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_109, __VLS_111));
    // @ts-ignore
    [submitLoading,];
    __VLS_nonNullable(__VLS_114.slots).default;
    __VLS_nonNullable(__VLS_108.slots).default;
    __VLS_nonNullable(__VLS_63.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['ant-upload-drag-icon'];
        __VLS_styleScopedClasses['ant-upload-text'];
        __VLS_styleScopedClasses['ant-upload-hint'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['bg-stone-300'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['mt-4'];
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
                PlusOutlined: PlusOutlined,
                InboxOutlined: InboxOutlined,
                avatarOpen: avatarOpen,
                drawerStyle: drawerStyle,
                formRef: formRef,
                form: form,
                loading: loading,
                imageUrl: imageUrl,
                openDrawer: openDrawer,
                rules: rules,
                onClose: onClose,
                submitLoading: submitLoading,
                handleSubmit: handleSubmit,
                handleFinishFailed: handleFinishFailed,
                isShowImage: isShowImage,
                beforeUpload: beforeUpload,
                showAvatarModal: showAvatarModal,
                handleAvatarCancel: handleAvatarCancel,
                handleAvatarOk: handleAvatarOk,
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
