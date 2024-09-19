import ApiMarDAta from '../assets/document/apiDocument.md?raw';
import MarkdownIt from '@/utils/markdown-it';
import { buildCodeBlock } from "@/utils/code-block";
import { ref, nextTick, onMounted, watch } from "vue";
import { useWindowSize } from "@vueuse/core";
import { getUserKey } from "@/api/user";
import { isLogin } from "@/utils/auth";
import router from "@/router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { width: windowWidth } = useWindowSize();
const apiContent = ref();
const drawerStyle = ref({
    drawerWidth: "70%",
    margin: "0 auto"
});
/**
 * 初始化api文档内容
 */
const initApiContent = async () => {
    const res = await getUserKey();
    if (res.code === 200) {
        let markdownValue = setTKeyValue(String(res.data));
        console.log(markdownValue);
        apiContent.value = MarkdownIt.render(markdownValue);
        await nextTick(() => {
            buildCodeBlock(".md-content");
        });
    }
};
/**
 * 设置api文档key
 * @param key
 */
const setTKeyValue = (key) => {
    return ApiMarDAta.replace("userKey", key);
};
const setWindowStyle = (winValue) => {
    if (winValue < 768) {
        drawerStyle.value = { drawerWidth: "", margin: "" };
    }
    else {
        drawerStyle.value = { drawerWidth: "70%", margin: "0 auto" };
    }
};
watch(windowWidth, newVal => {
    if (newVal) {
        if (newVal < 768) {
            setWindowStyle(newVal);
        }
        else {
            setWindowStyle(newVal);
        }
    }
});
onMounted(async () => {
    if (isLogin()) {
        await initApiContent();
    }
    else {
        router.push("/login");
    }
    if (windowWidth.value) {
        if (windowWidth.value < 768) {
            setWindowStyle(windowWidth.value);
        }
        else {
            setWindowStyle(windowWidth.value);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-slate-50") }, });
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ style: (({ width: __VLS_ctx.drawerStyle.drawerWidth, margin: __VLS_ctx.drawerStyle.margin })) }, }));
    const __VLS_2 = __VLS_1({ ...{ style: (({ width: __VLS_ctx.drawerStyle.drawerWidth, margin: __VLS_ctx.drawerStyle.margin })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ style: (({ width: __VLS_ctx.drawerStyle.drawerWidth, margin: __VLS_ctx.drawerStyle.margin })) }, }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("md-content") }, });
    __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.apiContent));
    // @ts-ignore
    [drawerStyle, drawerStyle, vHtml, apiContent,];
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['bg-slate-50'];
        __VLS_styleScopedClasses['md-content'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                apiContent: apiContent,
                drawerStyle: drawerStyle,
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
