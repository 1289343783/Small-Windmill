import { onMounted, reactive, ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";
import { getLoginInfo, removeLoginInfo, setLoginInfo, setToken } from "../utils/auth";
import { message } from "ant-design-vue";
import { loginApi } from "@/api/login";
import { useUserStore } from "@/store/modules/user";
import router from "@/router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { width: windowWidth } = useWindowSize();
let cardStyle = ref({
    width: '540px',
    height: '400px',
    borderRadius: '10px',
    image: '/image/login.jpg'
});
const loginLoading = ref(false);
const formState = reactive({
    email: '',
    password: '',
    remember: false,
});
/**
 * 表单验证成功
 * @param values
 */
const onFinish = async (values) => {
    console.log('Success:', values);
    loginLoading.value = true;
    const res = await loginApi(values.email, values.password);
    if (res.code === 200) {
        setToken(res.data.token);
        rememberInfo();
        await useUserStore().getUserApi();
        loginLoading.value = false;
        router.push("/home");
        message.success('登录成功！');
    }
    else {
        loginLoading.value = false;
        message.error(res.msg);
    }
};
/**
 * 表单验证失败
 */
const onFinishFailed = () => {
    message.error('请完成表单验证！');
};
/**
 * 设置记住密码
 */
const rememberInfo = () => {
    if (formState.remember) {
        setLoginInfo({ email: formState.email, password: formState.password, remember: formState.remember });
    }
    else {
        removeLoginInfo();
    }
};
/**
 * 获取记住密码信息
 */
const getRememberInfo = () => {
    const info = getLoginInfo();
    console.log(info);
    if (info) {
        formState.remember = info.remember;
        if (info.remember) {
            formState.email = info.email;
            formState.password = info.password;
        }
    }
};
watch(windowWidth, newVal => {
    if (newVal) {
        if (newVal < 768) {
            cardStyle.value = { width: '300px', height: '430px', borderRadius: '10px', image: '/image/login1.jpg' };
        }
    }
    else {
        cardStyle.value = { width: '460px', height: '350px', borderRadius: '10px', image: '/image/login.jpg' };
    }
});
getRememberInfo();
onMounted(async () => {
    if (windowWidth.value) {
        if (windowWidth.value < 768) {
            cardStyle.value = { width: '300px', height: '430px', borderRadius: '10px', image: '/image/login1.jpg' };
        }
        else {
            cardStyle.value = { width: '460px', height: '350px', borderRadius: '10px', image: '/image/login.jpg' };
        }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: (({ backgroundImage: `url(${__VLS_ctx.cardStyle.image})` })) }, ...{ class: (" flex justify-center items-center h-screen login-background") }, });
    // @ts-ignore
    const __VLS_0 = {}
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ style: (({ width: __VLS_ctx.cardStyle.width, height: __VLS_ctx.cardStyle.height, borderRadius: __VLS_ctx.cardStyle.borderRadius })) }, ...{ class: ("justify-center bg-slate-100") }, hoverable: (true), }));
    const __VLS_2 = __VLS_1({ ...{ style: (({ width: __VLS_ctx.cardStyle.width, height: __VLS_ctx.cardStyle.height, borderRadius: __VLS_ctx.cardStyle.borderRadius })) }, ...{ class: ("justify-center bg-slate-100") }, hoverable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ style: (({ width: __VLS_ctx.cardStyle.width, height: __VLS_ctx.cardStyle.height, borderRadius: __VLS_ctx.cardStyle.borderRadius })) }, ...{ class: ("justify-center bg-slate-100") }, hoverable: (true), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center font-semibold text-xl") }, });
        // @ts-ignore
        [cardStyle, cardStyle, cardStyle, cardStyle,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_6 = {}
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onFinish': {} }, ...{ 'onFinishFailed': {} }, model: ((__VLS_ctx.formState)), autocomplete: ("off"), ...{ class: ("justify-center items-center") }, name: ("basic"), }));
    const __VLS_8 = __VLS_7({ ...{ 'onFinish': {} }, ...{ 'onFinishFailed': {} }, model: ((__VLS_ctx.formState)), autocomplete: ("off"), ...{ class: ("justify-center items-center") }, name: ("basic"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ 'onFinish': {} }, ...{ 'onFinishFailed': {} }, model: ((__VLS_ctx.formState)), autocomplete: ("off"), ...{ class: ("justify-center items-center") }, name: ("basic"), }));
    let __VLS_12;
    const __VLS_13 = {
        onFinish: (__VLS_ctx.onFinish)
    };
    const __VLS_14 = {
        onFinishFailed: (__VLS_ctx.onFinishFailed)
    };
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    let __VLS_9;
    let __VLS_10;
    // @ts-ignore
    const __VLS_15 = {}
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
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ rules: (([{ required: true, message: '邮箱不能为空！!' }])), wrapperCol: (({ offset: 0, span: 20 })), label: ("邮箱："), name: ("email"), }));
    const __VLS_17 = __VLS_16({ rules: (([{ required: true, message: '邮箱不能为空！!' }])), wrapperCol: (({ offset: 0, span: 20 })), label: ("邮箱："), name: ("email"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    ({}({ rules: (([{ required: true, message: '邮箱不能为空！!' }])), wrapperCol: (({ offset: 0, span: 20 })), label: ("邮箱："), name: ("email"), }));
    const __VLS_20 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17));
    // @ts-ignore
    const __VLS_21 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ value: ((__VLS_ctx.formState.email)), placeholder: ("请输入邮箱"), }));
    const __VLS_23 = __VLS_22({ value: ((__VLS_ctx.formState.email)), placeholder: ("请输入邮箱"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    ({}({ value: ((__VLS_ctx.formState.email)), placeholder: ("请输入邮箱"), }));
    const __VLS_26 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23));
    // @ts-ignore
    [formState, formState, onFinish, onFinishFailed,];
    __VLS_nonNullable(__VLS_20.slots).default;
    // @ts-ignore
    const __VLS_27 = {}
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
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ rules: (([{ required: true, message: '密码不能为空!' }])), wrapperCol: (({ offset: 0, span: 20 })), label: ("密码："), name: ("password"), }));
    const __VLS_29 = __VLS_28({ rules: (([{ required: true, message: '密码不能为空!' }])), wrapperCol: (({ offset: 0, span: 20 })), label: ("密码："), name: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    ({}({ rules: (([{ required: true, message: '密码不能为空!' }])), wrapperCol: (({ offset: 0, span: 20 })), label: ("密码："), name: ("password"), }));
    const __VLS_32 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29));
    // @ts-ignore
    const __VLS_33 = {}
        .AInputPassword;
    ({}.AInputPassword);
    __VLS_components.AInputPassword;
    __VLS_components.aInputPassword;
    // @ts-ignore
    [AInputPassword,];
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ value: ((__VLS_ctx.formState.password)), placeholder: ("请输入密码"), }));
    const __VLS_35 = __VLS_34({ value: ((__VLS_ctx.formState.password)), placeholder: ("请输入密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    ({}({ value: ((__VLS_ctx.formState.password)), placeholder: ("请输入密码"), }));
    const __VLS_38 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35));
    // @ts-ignore
    [formState,];
    __VLS_nonNullable(__VLS_32.slots).default;
    // @ts-ignore
    const __VLS_39 = {}
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
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ wrapperCol: (({ offset: 1, span: 12 })), name: ("remember"), }));
    const __VLS_41 = __VLS_40({ wrapperCol: (({ offset: 1, span: 12 })), name: ("remember"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    ({}({ wrapperCol: (({ offset: 1, span: 12 })), name: ("remember"), }));
    const __VLS_44 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41));
    // @ts-ignore
    const __VLS_45 = {}
        .ACheckbox;
    ({}.ACheckbox);
    ({}.ACheckbox);
    __VLS_components.ACheckbox;
    __VLS_components.aCheckbox;
    __VLS_components.ACheckbox;
    __VLS_components.aCheckbox;
    // @ts-ignore
    [ACheckbox, ACheckbox,];
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ checked: ((__VLS_ctx.formState.remember)), }));
    const __VLS_47 = __VLS_46({ checked: ((__VLS_ctx.formState.remember)), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    ({}({ checked: ((__VLS_ctx.formState.remember)), }));
    const __VLS_50 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47));
    // @ts-ignore
    [formState,];
    __VLS_nonNullable(__VLS_50.slots).default;
    __VLS_nonNullable(__VLS_44.slots).default;
    // @ts-ignore
    const __VLS_51 = {}
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
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({}));
    const __VLS_53 = __VLS_52({}, ...__VLS_functionalComponentArgsRest(__VLS_52));
    ({}({}));
    const __VLS_56 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53));
    // @ts-ignore
    const __VLS_57 = {}
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
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ loading: ((__VLS_ctx.loginLoading)), ...{ class: ("w-full") }, htmlType: ("submit"), size: ("large"), type: ("primary"), }));
    const __VLS_59 = __VLS_58({ loading: ((__VLS_ctx.loginLoading)), ...{ class: ("w-full") }, htmlType: ("submit"), size: ("large"), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
    ({}({ loading: ((__VLS_ctx.loginLoading)), ...{ class: ("w-full") }, htmlType: ("submit"), size: ("large"), type: ("primary"), }));
    const __VLS_62 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59));
    // @ts-ignore
    [loginLoading,];
    __VLS_nonNullable(__VLS_62.slots).default;
    __VLS_nonNullable(__VLS_56.slots).default;
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    const __VLS_63 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({ to: ("/register"), }));
    const __VLS_65 = __VLS_64({ to: ("/register"), }, ...__VLS_functionalComponentArgsRest(__VLS_64));
    ({}({ to: ("/register"), }));
    const __VLS_68 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_63, __VLS_65));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("text-blue-500") }, href: ("#"), });
    __VLS_nonNullable(__VLS_68.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['h-screen'];
        __VLS_styleScopedClasses['login-background'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['bg-slate-100'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['text-blue-500'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                cardStyle: cardStyle,
                loginLoading: loginLoading,
                formState: formState,
                onFinish: onFinish,
                onFinishFailed: onFinishFailed,
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
