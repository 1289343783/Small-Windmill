import { onMounted, reactive, ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";
import { message } from "ant-design-vue";
import { registerApi } from "@/api/user";
import router from "@/router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { width: windowWidth } = useWindowSize();
let cardStyle = ref({
    width: '450px',
    height: '360px',
    borderRadius: '10px',
    image: '/image/login.jpg',
    marginTop: '250px'
});
const registerLoading = ref(false);
const formRef = ref();
const formState = reactive({
    username: '',
    email: '',
    password: '',
});
const checkName = async (_rule, value) => {
    if (!value) {
        return Promise.reject('用户名不能为空！');
    }
    else if (value.length < 3 || value.length > 10) {
        return Promise.reject("用户名长度在3到10之间");
    }
};
const checkEmail = async (_rule, value) => {
    if (!value) {
        return Promise.reject('邮箱不能为空！');
    }
    else if (!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
        return Promise.reject("邮箱格式不正确");
    }
};
const checkPassword = async (_rule, value) => {
    if (value.length < 6 || value.length > 16) {
        return Promise.reject("密码长度不能小于6位");
    }
};
const rules = {
    username: [{ required: true, validator: checkName, trigger: 'change' }],
    email: [{ validator: checkEmail, trigger: 'change' }],
    password: [{ validator: checkPassword, trigger: 'change' }],
};
/**
 * 表单提交回调函数
 * @param values
 */
const handleFinish = async (values) => {
    console.log('Success:', values);
    registerLoading.value = true;
    let data = { userName: values.username, email: values.email, password: values.password };
    const res = await registerApi(data);
    if (res.code === 200) {
        message.success('注册成功！');
        registerLoading.value = false;
        router.push('/login');
    }
    else {
        registerLoading.value = false;
        message.success(res.msg);
    }
};
/**
 * 表单错误时回调函数
 */
const handleFinishFailed = () => {
    message.error('请完成表单验证！');
};
const setStyle = (newVal) => {
    if (newVal) {
        if (newVal < 768) {
            cardStyle.value = {
                width: '300px',
                height: '460px',
                borderRadius: '10px',
                image: '/image/login1.jpg',
                marginTop: '100px'
            };
        }
    }
    else {
        cardStyle.value = {
            width: '450px',
            height: '360px',
            borderRadius: '10px',
            image: '/image/login.jpg',
            marginTop: '250px'
        };
    }
};
watch(windowWidth, newVal => {
    setStyle(newVal);
});
onMounted(async () => {
    setStyle(windowWidth.value);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: (({ backgroundImage: `url(${__VLS_ctx.cardStyle.image})` })) }, ...{ class: (" flex justify-center h-screen login-background") }, });
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ style: (({ width: __VLS_ctx.cardStyle.width, height: __VLS_ctx.cardStyle.height,
                borderRadius: __VLS_ctx.cardStyle.borderRadius, marginTop: __VLS_ctx.cardStyle.marginTop })) }, ...{ class: ("justify-center bg-slate-100") }, hoverable: (true), }));
    const __VLS_2 = __VLS_1({ ...{ style: (({ width: __VLS_ctx.cardStyle.width, height: __VLS_ctx.cardStyle.height,
                borderRadius: __VLS_ctx.cardStyle.borderRadius, marginTop: __VLS_ctx.cardStyle.marginTop })) }, ...{ class: ("justify-center bg-slate-100") }, hoverable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ style: (({ width: __VLS_ctx.cardStyle.width, height: __VLS_ctx.cardStyle.height,
                borderRadius: __VLS_ctx.cardStyle.borderRadius, marginTop: __VLS_ctx.cardStyle.marginTop })) }, ...{ class: ("justify-center bg-slate-100") }, hoverable: (true), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center font-semibold text-xl") }, });
        // @ts-ignore
        [cardStyle, cardStyle, cardStyle, cardStyle, cardStyle,];
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onFinish': {} }, ...{ 'onFinishFailed': {} }, ref: ("formRef"), labelCol: (({ span: 4 })), model: ((__VLS_ctx.formState)), rules: ((__VLS_ctx.rules)), autocomplete: ("off"), ...{ class: ("justify-center items-center") }, name: ("custom-validation"), }));
    const __VLS_8 = __VLS_7({ ...{ 'onFinish': {} }, ...{ 'onFinishFailed': {} }, ref: ("formRef"), labelCol: (({ span: 4 })), model: ((__VLS_ctx.formState)), rules: ((__VLS_ctx.rules)), autocomplete: ("off"), ...{ class: ("justify-center items-center") }, name: ("custom-validation"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ 'onFinish': {} }, ...{ 'onFinishFailed': {} }, ref: ("formRef"), labelCol: (({ span: 4 })), model: ((__VLS_ctx.formState)), rules: ((__VLS_ctx.rules)), autocomplete: ("off"), ...{ class: ("justify-center items-center") }, name: ("custom-validation"), }));
    // @ts-ignore
    (__VLS_ctx.formRef);
    let __VLS_12;
    const __VLS_13 = {
        onFinish: (__VLS_ctx.handleFinish)
    };
    const __VLS_14 = {
        onFinishFailed: (__VLS_ctx.handleFinishFailed)
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
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ wrapperCol: (({ offset: 0, span: 19 })), hasFeedback: (true), label: ("用户名："), name: ("username"), }));
    const __VLS_17 = __VLS_16({ wrapperCol: (({ offset: 0, span: 19 })), hasFeedback: (true), label: ("用户名："), name: ("username"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    ({}({ wrapperCol: (({ offset: 0, span: 19 })), hasFeedback: (true), label: ("用户名："), name: ("username"), }));
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
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ value: ((__VLS_ctx.formState.username)), autocomplete: ("off"), placeholder: ("请输入用户名"), }));
    const __VLS_23 = __VLS_22({ value: ((__VLS_ctx.formState.username)), autocomplete: ("off"), placeholder: ("请输入用户名"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    ({}({ value: ((__VLS_ctx.formState.username)), autocomplete: ("off"), placeholder: ("请输入用户名"), }));
    const __VLS_26 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23));
    // @ts-ignore
    [formState, formState, rules, formRef, handleFinish, handleFinishFailed,];
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
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ wrapperCol: (({ offset: 0, span: 19 })), hasFeedback: (true), label: ("邮箱："), name: ("email"), }));
    const __VLS_29 = __VLS_28({ wrapperCol: (({ offset: 0, span: 19 })), hasFeedback: (true), label: ("邮箱："), name: ("email"), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    ({}({ wrapperCol: (({ offset: 0, span: 19 })), hasFeedback: (true), label: ("邮箱："), name: ("email"), }));
    const __VLS_32 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29));
    // @ts-ignore
    const __VLS_33 = {}
        .AInput;
    ({}.AInput);
    __VLS_components.AInput;
    __VLS_components.aInput;
    // @ts-ignore
    [AInput,];
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ value: ((__VLS_ctx.formState.email)), autocomplete: ("off"), placeholder: ("请输入邮箱"), }));
    const __VLS_35 = __VLS_34({ value: ((__VLS_ctx.formState.email)), autocomplete: ("off"), placeholder: ("请输入邮箱"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    ({}({ value: ((__VLS_ctx.formState.email)), autocomplete: ("off"), placeholder: ("请输入邮箱"), }));
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
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ wrapperCol: (({ offset: 0, span: 19 })), hasFeedback: (true), label: ("密码："), name: ("password"), }));
    const __VLS_41 = __VLS_40({ wrapperCol: (({ offset: 0, span: 19 })), hasFeedback: (true), label: ("密码："), name: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    ({}({ wrapperCol: (({ offset: 0, span: 19 })), hasFeedback: (true), label: ("密码："), name: ("password"), }));
    const __VLS_44 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41));
    // @ts-ignore
    const __VLS_45 = {}
        .AInputPassword;
    ({}.AInputPassword);
    __VLS_components.AInputPassword;
    __VLS_components.aInputPassword;
    // @ts-ignore
    [AInputPassword,];
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ value: ((__VLS_ctx.formState.password)), autocomplete: ("off"), placeholder: ("请输入密码"), }));
    const __VLS_47 = __VLS_46({ value: ((__VLS_ctx.formState.password)), autocomplete: ("off"), placeholder: ("请输入密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    ({}({ value: ((__VLS_ctx.formState.password)), autocomplete: ("off"), placeholder: ("请输入密码"), }));
    const __VLS_50 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47));
    // @ts-ignore
    [formState,];
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
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ loading: ((__VLS_ctx.registerLoading)), ...{ class: ("w-full") }, htmlType: ("submit"), size: ("large"), type: ("primary"), }));
    const __VLS_59 = __VLS_58({ loading: ((__VLS_ctx.registerLoading)), ...{ class: ("w-full") }, htmlType: ("submit"), size: ("large"), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
    ({}({ loading: ((__VLS_ctx.registerLoading)), ...{ class: ("w-full") }, htmlType: ("submit"), size: ("large"), type: ("primary"), }));
    const __VLS_62 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59));
    // @ts-ignore
    [registerLoading,];
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
    const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({ to: ("/login"), }));
    const __VLS_65 = __VLS_64({ to: ("/login"), }, ...__VLS_functionalComponentArgsRest(__VLS_64));
    ({}({ to: ("/login"), }));
    const __VLS_68 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_63, __VLS_65));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("text-blue-500") }, href: ("#"), });
    __VLS_nonNullable(__VLS_68.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
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
                registerLoading: registerLoading,
                formRef: formRef,
                formState: formState,
                rules: rules,
                handleFinish: handleFinish,
                handleFinishFailed: handleFinishFailed,
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
