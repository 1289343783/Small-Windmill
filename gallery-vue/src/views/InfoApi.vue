<template>
  <div class="bg-slate-50">
    <a-card :style="{width: drawerStyle.drawerWidth,margin:drawerStyle.margin}">
      <div class="md-content" v-html="apiContent"></div>
    </a-card>
  </div>
</template>
<script lang="ts" setup>
import ApiMarDAta from '../assets/document/apiDocument.md?raw'
import MarkdownIt from '@/utils/markdown-it'
import {buildCodeBlock} from "@/utils/code-block";
import {ref, nextTick, onMounted, watch} from "vue";
import {useWindowSize} from "@vueuse/core";
import {getUserKey} from "@/api/user";
import {isLogin} from "@/utils/auth";
import router from "@/router";

const {width: windowWidth} = useWindowSize()
const apiContent = ref();
const drawerStyle = ref({
  drawerWidth: "70%",
  margin: "0 auto"
})
/**
 * 初始化api文档内容
 */
const initApiContent = async () => {
  const res = await getUserKey()
  if (res.code === 200) {
    let markdownValue = setTKeyValue(String(res.data))
    console.log(markdownValue)
    apiContent.value = MarkdownIt.render(markdownValue)
    await nextTick(() => {
      buildCodeBlock(".md-content");
    })
  }

};
/**
 * 设置api文档key
 * @param key
 */
const setTKeyValue = (key: string) => {
  return ApiMarDAta.replace("userKey", key)
}
const setWindowStyle = (winValue: number) => {
  if (winValue < 768) {
    drawerStyle.value = {drawerWidth: "", margin: ""}
  } else {
    drawerStyle.value = {drawerWidth: "70%", margin: "0 auto"}
  }
}

watch(windowWidth, newVal => {
  if (newVal) {
    if (newVal < 768) {
      setWindowStyle(newVal)
    } else {
      setWindowStyle(newVal)
    }
  }
})
onMounted(async () => {
  if (isLogin()) {
    await initApiContent()
  } else {
    router.push("/login")
  }
  if (windowWidth.value) {
    if (windowWidth.value < 768) {
      setWindowStyle(windowWidth.value)
    } else {
      setWindowStyle(windowWidth.value)
    }
  }
})

</script>
<style lang="less" scoped>
:deep(.md-content) {
  p {
    color: var(--text-color);
    font-size: 18px;
    line-height: 28px;
  }


  h4,
  h5,
  h6 {
    font-size: 18px;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 17px;
  }

  /* 代码样式 */

  pre {
    white-space: pre;
    position: relative;
    border-radius: 7px;
    background-color: #282c34;
    font-size: 14px;
    padding: 0;

    code {
      border: none;
      border-radius: 7px;
      font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace !important;
      line-height: 21px;
    }
  }
}
</style>