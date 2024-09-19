import { h, onMounted, ref, watch } from 'vue';
import { Icon } from '@iconify/vue';
import { useWindowSize } from "@vueuse/core";
import { UserOutlined } from '@ant-design/icons-vue';
import { useUserStore } from "@/store/modules/user";
import router from "@/router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const userStore = useUserStore();
const { width: windowWidth } = useWindowSize();
const selectedKeys = ref(['Home']);
const apiKeys = ref(['']);
const items = ref([
    {
        key: 'Home',
        icon: () => h(Icon, {
            icon: 'ant-design:home-outlined',
        }),
        label: '主页',
        title: '主页',
        onClick: () => {
            router.push('/home');
        }
    },
    {
        key: 'userMenu',
        icon: () => h(Icon, {
            icon: 'material-symbols:settings',
        }),
        label: '用户设置',
        title: '用户设置',
        children: [
            {
                key: 'userInfo',
                label: h('a', {
                    href: '/user/info', target: '_blank'
                }, '用户信息'),
            },
            {
                key: 'loginOut',
                label: '退出登录',
                onClick: () => {
                    userStore.logout();
                    router.push('/login');
                }
            },
        ],
    }
]);
const apiItems = ref([
    {
        key: 'InfoApi',
        icon: () => h(Icon, {
            icon: 'eos-icons:api',
        }),
        label: 'Api接口',
        title: 'Api接口',
        onClick: () => {
            router.push({ name: 'InfoApi' });
        }
    }, {
        key: 'AboutAuthor',
        icon: () => h(Icon, {
            icon: 'lets-icons:user-box-duotone',
        }),
        label: '关于作者',
        title: '关于作者',
        onClick: () => {
            router.push({ name: 'AboutAuthor' });
        }
    }
]);
const isLogin = ref(false);
const showDrawerBnt = ref(false);
const placement = ref('left');
const open = ref(false);
const showDrawer = () => {
    open.value = true;
};
const onClose = () => {
    open.value = false;
};
const clickApiMenu = () => {
    selectedKeys.value = [''];
};
const clickMenu = () => {
    apiKeys.value = [''];
};
watch(windowWidth, newVal => {
    if (newVal) {
        if (newVal < 768) {
            showDrawerBnt.value = true;
        }
        else {
            showDrawerBnt.value = false;
        }
    }
});
onMounted(async () => {
    isLogin.value = await userStore.getIsLogin();
    if (windowWidth.value) {
        if (windowWidth.value < 768) {
            showDrawerBnt.value = true;
        }
        else {
            showDrawerBnt.value = false;
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
    // @ts-ignore
    const __VLS_0 = {}
        .ALayoutHeader;
    ({}.ALayoutHeader);
    ({}.ALayoutHeader);
    __VLS_components.ALayoutHeader;
    __VLS_components.aLayoutHeader;
    __VLS_components.ALayoutHeader;
    __VLS_components.aLayoutHeader;
    // @ts-ignore
    [ALayoutHeader, ALayoutHeader,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ style: (({ position: 'fixed', zIndex: 1, width: '100%', paddingInline: 0, backgroundColor: 'rgb(236,238,243)' })) }, }));
    const __VLS_2 = __VLS_1({ ...{ style: (({ position: 'fixed', zIndex: 1, width: '100%', paddingInline: 0, backgroundColor: 'rgb(236,238,243)' })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ style: (({ position: 'fixed', zIndex: 1, width: '100%', paddingInline: 0, backgroundColor: 'rgb(236,238,243)' })) }, }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center h-16  text-center") }, });
    if (__VLS_ctx.showDrawerBnt) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-none w-full") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-none") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center ml-2") }, });
        // @ts-ignore
        const __VLS_6 = {}
            .Icon;
        ({}.Icon);
        ({}.Icon);
        __VLS_components.Icon;
        __VLS_components.Icon;
        // @ts-ignore
        [Icon, Icon,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ("ph:windmill"), ...{ style: ({}) }, }));
        const __VLS_8 = __VLS_7({ icon: ("ph:windmill"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ icon: ("ph:windmill"), ...{ style: ({}) }, }));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        // @ts-ignore
        [showDrawerBnt,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grow font-semibold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-base") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-none mr-2") }, });
        if (!__VLS_ctx.isLogin) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            // @ts-ignore
            const __VLS_12 = {}
                .ADropdown;
            ({}.ADropdown);
            ({}.ADropdown);
            __VLS_components.ADropdown;
            __VLS_components.aDropdown;
            __VLS_components.ADropdown;
            __VLS_components.aDropdown;
            // @ts-ignore
            [ADropdown, ADropdown,];
            // @ts-ignore
            const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
            const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
            ({}({}));
            const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { overlay: __VLS_thisSlot } = __VLS_nonNullable(__VLS_17.slots);
                // @ts-ignore
                const __VLS_18 = {}
                    .AMenu;
                ({}.AMenu);
                ({}.AMenu);
                __VLS_components.AMenu;
                __VLS_components.aMenu;
                __VLS_components.AMenu;
                __VLS_components.aMenu;
                // @ts-ignore
                [AMenu, AMenu,];
                // @ts-ignore
                const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
                const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
                ({}({}));
                const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
                // @ts-ignore
                const __VLS_24 = {}
                    .AMenuItem;
                ({}.AMenuItem);
                ({}.AMenuItem);
                __VLS_components.AMenuItem;
                __VLS_components.aMenuItem;
                __VLS_components.AMenuItem;
                __VLS_components.aMenuItem;
                // @ts-ignore
                [AMenuItem, AMenuItem,];
                // @ts-ignore
                const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ key: ("1"), }));
                const __VLS_26 = __VLS_25({ key: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
                ({}({ key: ("1"), }));
                const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
                // @ts-ignore
                const __VLS_30 = {}
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
                const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ to: ("/login"), }));
                const __VLS_32 = __VLS_31({ to: ("/login"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                ({}({ to: ("/login"), }));
                const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
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
                const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ class: ("w-20") }, size: ("small"), type: ("primary"), }));
                const __VLS_38 = __VLS_37({ ...{ class: ("w-20") }, size: ("small"), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                ({}({ ...{ class: ("w-20") }, size: ("small"), type: ("primary"), }));
                const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
                // @ts-ignore
                [isLogin,];
                __VLS_nonNullable(__VLS_41.slots).default;
                __VLS_nonNullable(__VLS_35.slots).default;
                __VLS_nonNullable(__VLS_29.slots).default;
                // @ts-ignore
                const __VLS_42 = {}
                    .AMenuItem;
                ({}.AMenuItem);
                ({}.AMenuItem);
                __VLS_components.AMenuItem;
                __VLS_components.aMenuItem;
                __VLS_components.AMenuItem;
                __VLS_components.aMenuItem;
                // @ts-ignore
                [AMenuItem, AMenuItem,];
                // @ts-ignore
                const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ key: ("2"), }));
                const __VLS_44 = __VLS_43({ key: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
                ({}({ key: ("2"), }));
                const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44));
                // @ts-ignore
                const __VLS_48 = {}
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
                const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ to: ("/register"), }));
                const __VLS_50 = __VLS_49({ to: ("/register"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
                ({}({ to: ("/register"), }));
                const __VLS_53 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50));
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
                const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ ...{ class: ("w-20") }, size: ("small"), type: ("primary"), }));
                const __VLS_56 = __VLS_55({ ...{ class: ("w-20") }, size: ("small"), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
                ({}({ ...{ class: ("w-20") }, size: ("small"), type: ("primary"), }));
                const __VLS_59 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56));
                __VLS_nonNullable(__VLS_59.slots).default;
                __VLS_nonNullable(__VLS_53.slots).default;
                __VLS_nonNullable(__VLS_47.slots).default;
                __VLS_nonNullable(__VLS_23.slots).default;
            }
            // @ts-ignore
            const __VLS_60 = {}
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
            const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
            const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
            ({}({}));
            const __VLS_65 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62));
            // @ts-ignore
            const __VLS_66 = {}
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
            const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ icon: ("solar:list-down-bold"), }));
            const __VLS_68 = __VLS_67({ icon: ("solar:list-down-bold"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
            ({}({ icon: ("solar:list-down-bold"), }));
            const __VLS_71 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68));
            __VLS_nonNullable(__VLS_65.slots).default;
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            // @ts-ignore
            const __VLS_72 = {}
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
            const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ 'onClick': {} }, ...{ class: ("ml-2") }, type: ("primary"), }));
            const __VLS_74 = __VLS_73({ ...{ 'onClick': {} }, ...{ class: ("ml-2") }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
            ({}({ ...{ 'onClick': {} }, ...{ class: ("ml-2") }, type: ("primary"), }));
            let __VLS_78;
            const __VLS_79 = {
                onClick: (__VLS_ctx.showDrawer)
            };
            const __VLS_77 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74));
            let __VLS_75;
            let __VLS_76;
            // @ts-ignore
            const __VLS_80 = {}
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
            const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ icon: ("mdi:menu-close"), }));
            const __VLS_82 = __VLS_81({ icon: ("mdi:menu-close"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
            ({}({ icon: ("mdi:menu-close"), }));
            const __VLS_85 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82));
            // @ts-ignore
            [showDrawer,];
            __VLS_nonNullable(__VLS_77.slots).default;
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex w-screen") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-none  w-20") }, });
        // @ts-ignore
        const __VLS_86 = {}
            .ADropdown;
        ({}.ADropdown);
        ({}.ADropdown);
        __VLS_components.ADropdown;
        __VLS_components.aDropdown;
        __VLS_components.ADropdown;
        __VLS_components.aDropdown;
        // @ts-ignore
        [ADropdown, ADropdown,];
        // @ts-ignore
        const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({}));
        const __VLS_88 = __VLS_87({}, ...__VLS_functionalComponentArgsRest(__VLS_87));
        ({}({}));
        const __VLS_91 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88));
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: () => { } }, ...{ class: ("ant-dropdown-link flex justify-center items-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        // @ts-ignore
        const __VLS_92 = {}
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
        const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ ...{ class: ("ml-2") }, icon: ("subway:down-2"), }));
        const __VLS_94 = __VLS_93({ ...{ class: ("ml-2") }, icon: ("subway:down-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
        ({}({ ...{ class: ("ml-2") }, icon: ("subway:down-2"), }));
        const __VLS_97 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { overlay: __VLS_thisSlot } = __VLS_nonNullable(__VLS_91.slots);
            // @ts-ignore
            const __VLS_98 = {}
                .AMenu;
            ({}.AMenu);
            ({}.AMenu);
            __VLS_components.AMenu;
            __VLS_components.aMenu;
            __VLS_components.AMenu;
            __VLS_components.aMenu;
            // @ts-ignore
            [AMenu, AMenu,];
            // @ts-ignore
            const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({}));
            const __VLS_100 = __VLS_99({}, ...__VLS_functionalComponentArgsRest(__VLS_99));
            ({}({}));
            const __VLS_103 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100));
            // @ts-ignore
            const __VLS_104 = {}
                .AMenuItem;
            ({}.AMenuItem);
            ({}.AMenuItem);
            __VLS_components.AMenuItem;
            __VLS_components.aMenuItem;
            __VLS_components.AMenuItem;
            __VLS_components.aMenuItem;
            // @ts-ignore
            [AMenuItem, AMenuItem,];
            // @ts-ignore
            const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({}));
            const __VLS_106 = __VLS_105({}, ...__VLS_functionalComponentArgsRest(__VLS_105));
            ({}({}));
            const __VLS_109 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106));
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("/info/api"), });
            // @ts-ignore
            const __VLS_110 = {}
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
            const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ icon: ("eos-icons:api"), }));
            const __VLS_112 = __VLS_111({ icon: ("eos-icons:api"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
            ({}({ icon: ("eos-icons:api"), }));
            const __VLS_115 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112));
            __VLS_nonNullable(__VLS_109.slots).default;
            // @ts-ignore
            const __VLS_116 = {}
                .AMenuItem;
            ({}.AMenuItem);
            ({}.AMenuItem);
            __VLS_components.AMenuItem;
            __VLS_components.aMenuItem;
            __VLS_components.AMenuItem;
            __VLS_components.aMenuItem;
            // @ts-ignore
            [AMenuItem, AMenuItem,];
            // @ts-ignore
            const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({}));
            const __VLS_118 = __VLS_117({}, ...__VLS_functionalComponentArgsRest(__VLS_117));
            ({}({}));
            const __VLS_121 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118));
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("/author"), });
            // @ts-ignore
            const __VLS_122 = {}
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
            const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ icon: ("lets-icons:user-box-duotone"), }));
            const __VLS_124 = __VLS_123({ icon: ("lets-icons:user-box-duotone"), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
            ({}({ icon: ("lets-icons:user-box-duotone"), }));
            const __VLS_127 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124));
            __VLS_nonNullable(__VLS_121.slots).default;
            __VLS_nonNullable(__VLS_103.slots).default;
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grow ") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
        // @ts-ignore
        const __VLS_128 = {}
            .Icon;
        ({}.Icon);
        ({}.Icon);
        __VLS_components.Icon;
        __VLS_components.Icon;
        // @ts-ignore
        [Icon, Icon,];
        // @ts-ignore
        const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ icon: ("ph:windmill"), ...{ style: ({}) }, }));
        const __VLS_130 = __VLS_129({ icon: ("ph:windmill"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_129));
        ({}({ icon: ("ph:windmill"), ...{ style: ({}) }, }));
        const __VLS_133 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-semibold italic text-2xl ml-2") }, });
        if (!__VLS_ctx.isLogin) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-none mr-2") }, });
            // @ts-ignore
            const __VLS_134 = {}
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
            const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({}));
            const __VLS_136 = __VLS_135({}, ...__VLS_functionalComponentArgsRest(__VLS_135));
            ({}({}));
            const __VLS_139 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136));
            // @ts-ignore
            const __VLS_140 = {}
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
            const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({ to: ("/login"), }));
            const __VLS_142 = __VLS_141({ to: ("/login"), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
            ({}({ to: ("/login"), }));
            const __VLS_145 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142));
            // @ts-ignore
            const __VLS_146 = {}
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
            const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ type: ("primary"), }));
            const __VLS_148 = __VLS_147({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
            ({}({ type: ("primary"), }));
            const __VLS_151 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148));
            // @ts-ignore
            const __VLS_152 = {}
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
            const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ height: ("15"), icon: ("mdi:login"), width: ("15"), }));
            const __VLS_154 = __VLS_153({ height: ("15"), icon: ("mdi:login"), width: ("15"), }, ...__VLS_functionalComponentArgsRest(__VLS_153));
            ({}({ height: ("15"), icon: ("mdi:login"), width: ("15"), }));
            const __VLS_157 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_152, __VLS_154));
            // @ts-ignore
            [isLogin,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-1") }, });
            __VLS_nonNullable(__VLS_151.slots).default;
            __VLS_nonNullable(__VLS_145.slots).default;
            // @ts-ignore
            const __VLS_158 = {}
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
            const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({ to: ("/register"), }));
            const __VLS_160 = __VLS_159({ to: ("/register"), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
            ({}({ to: ("/register"), }));
            const __VLS_163 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160));
            // @ts-ignore
            const __VLS_164 = {}
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
            const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({ type: ("primary"), }));
            const __VLS_166 = __VLS_165({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_165));
            ({}({ type: ("primary"), }));
            const __VLS_169 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_164, __VLS_166));
            // @ts-ignore
            const __VLS_170 = {}
                .Icon;
            ({}.Icon);
            ({}.Icon);
            __VLS_components.Icon;
            __VLS_components.Icon;
            // @ts-ignore
            [Icon, Icon,];
            // @ts-ignore
            const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({ height: ("18"), icon: ("mdi:register-outline"), width: ("18"), }));
            const __VLS_172 = __VLS_171({ height: ("18"), icon: ("mdi:register-outline"), width: ("18"), }, ...__VLS_functionalComponentArgsRest(__VLS_171));
            ({}({ height: ("18"), icon: ("mdi:register-outline"), width: ("18"), }));
            const __VLS_175 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-1") }, });
            __VLS_nonNullable(__VLS_169.slots).default;
            __VLS_nonNullable(__VLS_163.slots).default;
            __VLS_nonNullable(__VLS_139.slots).default;
        }
        else {
            // @ts-ignore
            const __VLS_176 = {}
                .AMenu;
            ({}.AMenu);
            ({}.AMenu);
            __VLS_components.AMenu;
            __VLS_components.aMenu;
            __VLS_components.AMenu;
            __VLS_components.aMenu;
            // @ts-ignore
            [AMenu, AMenu,];
            // @ts-ignore
            const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({ selectedKeys: ((__VLS_ctx.selectedKeys)), items: ((__VLS_ctx.items)), ...{ class: (" flex-none") }, mode: ("horizontal"), ...{ style: ({}) }, }));
            const __VLS_178 = __VLS_177({ selectedKeys: ((__VLS_ctx.selectedKeys)), items: ((__VLS_ctx.items)), ...{ class: (" flex-none") }, mode: ("horizontal"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_177));
            ({}({ selectedKeys: ((__VLS_ctx.selectedKeys)), items: ((__VLS_ctx.items)), ...{ class: (" flex-none") }, mode: ("horizontal"), ...{ style: ({}) }, }));
            const __VLS_181 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_176, __VLS_178));
            // @ts-ignore
            [selectedKeys, items,];
        }
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    // @ts-ignore
    const __VLS_182 = {}
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
    const __VLS_183 = __VLS_asFunctionalComponent(__VLS_182, new __VLS_182({ ...{ 'onClose': {} }, closable: ((false)), open: ((__VLS_ctx.open)), placement: ((__VLS_ctx.placement)), width: ((280)), }));
    const __VLS_184 = __VLS_183({ ...{ 'onClose': {} }, closable: ((false)), open: ((__VLS_ctx.open)), placement: ((__VLS_ctx.placement)), width: ((280)), }, ...__VLS_functionalComponentArgsRest(__VLS_183));
    ({}({ ...{ 'onClose': {} }, closable: ((false)), open: ((__VLS_ctx.open)), placement: ((__VLS_ctx.placement)), width: ((280)), }));
    let __VLS_188;
    const __VLS_189 = {
        onClose: (__VLS_ctx.onClose)
    };
    const __VLS_187 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_182, __VLS_184));
    let __VLS_185;
    let __VLS_186;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_187.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        // @ts-ignore
        const __VLS_190 = {}
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
        const __VLS_191 = __VLS_asFunctionalComponent(__VLS_190, new __VLS_190({ size: ((64)), src: ((__VLS_ctx.userStore.$state.userInfo?.avatar)), }));
        const __VLS_192 = __VLS_191({ size: ((64)), src: ((__VLS_ctx.userStore.$state.userInfo?.avatar)), }, ...__VLS_functionalComponentArgsRest(__VLS_191));
        ({}({ size: ((64)), src: ((__VLS_ctx.userStore.$state.userInfo?.avatar)), }));
        const __VLS_195 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_190, __VLS_192));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { icon: __VLS_thisSlot } = __VLS_nonNullable(__VLS_195.slots);
            // @ts-ignore
            const __VLS_196 = {}
                .UserOutlined;
            ({}.UserOutlined);
            __VLS_components.UserOutlined;
            // @ts-ignore
            [UserOutlined,];
            // @ts-ignore
            const __VLS_197 = __VLS_asFunctionalComponent(__VLS_196, new __VLS_196({}));
            const __VLS_198 = __VLS_197({}, ...__VLS_functionalComponentArgsRest(__VLS_197));
            ({}({}));
            const __VLS_201 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_196, __VLS_198));
            // @ts-ignore
            [open, placement, onClose, userStore,];
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-2") }, });
        (__VLS_ctx.userStore.$state.userInfo?.userName);
        // @ts-ignore
        [userStore,];
    }
    // @ts-ignore
    const __VLS_202 = {}
        .AMenu;
    ({}.AMenu);
    ({}.AMenu);
    __VLS_components.AMenu;
    __VLS_components.aMenu;
    __VLS_components.AMenu;
    __VLS_components.aMenu;
    // @ts-ignore
    [AMenu, AMenu,];
    // @ts-ignore
    const __VLS_203 = __VLS_asFunctionalComponent(__VLS_202, new __VLS_202({ ...{ 'onClick': {} }, selectedKeys: ((__VLS_ctx.selectedKeys)), items: ((__VLS_ctx.items)), ...{ class: (" flex-row") }, mode: ("inline"), ...{ style: ({}) }, }));
    const __VLS_204 = __VLS_203({ ...{ 'onClick': {} }, selectedKeys: ((__VLS_ctx.selectedKeys)), items: ((__VLS_ctx.items)), ...{ class: (" flex-row") }, mode: ("inline"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_203));
    ({}({ ...{ 'onClick': {} }, selectedKeys: ((__VLS_ctx.selectedKeys)), items: ((__VLS_ctx.items)), ...{ class: (" flex-row") }, mode: ("inline"), ...{ style: ({}) }, }));
    let __VLS_208;
    const __VLS_209 = {
        onClick: (__VLS_ctx.clickMenu)
    };
    const __VLS_207 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_202, __VLS_204));
    let __VLS_205;
    let __VLS_206;
    // @ts-ignore
    [selectedKeys, items, clickMenu,];
    // @ts-ignore
    const __VLS_210 = {}
        .AMenu;
    ({}.AMenu);
    ({}.AMenu);
    __VLS_components.AMenu;
    __VLS_components.aMenu;
    __VLS_components.AMenu;
    __VLS_components.aMenu;
    // @ts-ignore
    [AMenu, AMenu,];
    // @ts-ignore
    const __VLS_211 = __VLS_asFunctionalComponent(__VLS_210, new __VLS_210({ ...{ 'onClick': {} }, selectedKeys: ((__VLS_ctx.apiKeys)), items: ((__VLS_ctx.apiItems)), ...{ class: (" flex-row") }, mode: ("inline"), ...{ style: ({}) }, }));
    const __VLS_212 = __VLS_211({ ...{ 'onClick': {} }, selectedKeys: ((__VLS_ctx.apiKeys)), items: ((__VLS_ctx.apiItems)), ...{ class: (" flex-row") }, mode: ("inline"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_211));
    ({}({ ...{ 'onClick': {} }, selectedKeys: ((__VLS_ctx.apiKeys)), items: ((__VLS_ctx.apiItems)), ...{ class: (" flex-row") }, mode: ("inline"), ...{ style: ({}) }, }));
    let __VLS_216;
    const __VLS_217 = {
        onClick: (__VLS_ctx.clickApiMenu)
    };
    const __VLS_215 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_210, __VLS_212));
    let __VLS_213;
    let __VLS_214;
    // @ts-ignore
    [apiKeys, apiItems, clickApiMenu,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['h-16'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['flex-none'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['flex-none'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ml-2'];
        __VLS_styleScopedClasses['grow'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['flex-none'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['w-20'];
        __VLS_styleScopedClasses['w-20'];
        __VLS_styleScopedClasses['ml-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['w-screen'];
        __VLS_styleScopedClasses['flex-none'];
        __VLS_styleScopedClasses['w-20'];
        __VLS_styleScopedClasses['ant-dropdown-link'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ml-2'];
        __VLS_styleScopedClasses['grow'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['italic'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['ml-2'];
        __VLS_styleScopedClasses['flex-none'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['ml-1'];
        __VLS_styleScopedClasses['ml-1'];
        __VLS_styleScopedClasses['flex-none'];
        __VLS_styleScopedClasses['ml-2'];
        __VLS_styleScopedClasses['flex-row'];
        __VLS_styleScopedClasses['flex-row'];
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
                UserOutlined: UserOutlined,
                userStore: userStore,
                selectedKeys: selectedKeys,
                apiKeys: apiKeys,
                items: items,
                apiItems: apiItems,
                isLogin: isLogin,
                showDrawerBnt: showDrawerBnt,
                placement: placement,
                open: open,
                showDrawer: showDrawer,
                onClose: onClose,
                clickApiMenu: clickApiMenu,
                clickMenu: clickMenu,
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
