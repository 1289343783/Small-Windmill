<template>
  <a-page-header
      class=""
      style="height: 70px"
      sub-title="关于作者"
      title="首页"
      @back="() => {
          router.push({path: '/home'})
        }"
  >
    <template #extra>
      <Icon icon="ph:windmill" style="height: 20px; width: 20px"></Icon>
      <span class="font-semibold text-base">
        GALLERY-WINDMILL
      </span>
    </template>
  </a-page-header>
  <div :style="{backgroundImage: `url(${cardStyle.image})`,height:'84vh'}"
       class=" flex justify-center items-center bg-slate-50  author-background">
    <a-card :style="{width:cardStyle.widthValue,margin: cardStyle.marginValue}"
            hoverable>
      <template #title>
        <div class="text-center">
          关于作者
        </div>
      </template>
      <div class="flex flex-col justify-center items-center mt-1">
        <div>
          <a-avatar :size="{ xs: 60, sm: 32, md: 40, lg: 90, xl: 80, xxl: 100 }"
                    src="https://q2.qlogo.cn/headimg_dl?dst_uin=1289343783&spec=100">
            <template #icon>
              <UserOutlined/>
            </template>
          </a-avatar>
        </div>
        <a-space class="text-center" direction="vertical">
          <span class="font-bold text-lg ">无敌小风车大王</span>
          <span class="font-light text-sm text-slate-500">邮箱:1289343783@qq.com</span>
        </a-space>
      </div>
      <template #actions>
        <a href="https://gitee.com/wh578/projects">
          <div class="flex justify-center items-center">
            <Icon icon="simple-icons:gitee" style="width: 20px; height: 20px"/>
            <span class="ml-2">gitee</span>
          </div>
        </a>
        <!-- GitHub -->
        <a href="https://github.com/1289343783">
          <div class="flex justify-center items-center">
            <Icon icon="mdi:github" style="width: 20px; height: 20px"/>
            <span class="ml-2">github</span>
          </div>
        </a>
        <a href="mailto:1289343783@qq.com">
          <div class="flex justify-center items-center">
            <Icon icon="ic:outline-email" style="width: 20px; height: 20px"/>
            <span class="ml-2">邮箱</span>
          </div>
        </a>
      </template>
    </a-card>
  </div>
  <div class="font-semibold text-base flex justify-center items-center">
    <a-card>
      gallery windmill ©2024 @author gallery-windmill
    </a-card>
  </div>
</template>
<script lang="ts" setup>
import {UserOutlined} from '@ant-design/icons-vue';
import {Icon} from "@iconify/vue";
import {onMounted, ref, watch} from "vue";
import {useWindowSize} from "@vueuse/core";
import GalleryLayoutFooter from "@/layout/components/GalleryLayoutFooter.vue";
import router from "@/router";

const {width: windowWidth} = useWindowSize()
const cardStyle = ref({widthValue: "100%", marginValue: "0 auto", image: '/image/author.jpg'})

const setCardStyle = (newVal: number) => {
  if (newVal) {
    if (newVal < 768) {
      cardStyle.value = {widthValue: "90%", marginValue: "", image: '/image/login1.jpg'}
    } else {
      cardStyle.value = {widthValue: "70%", marginValue: "0 auto", image: '/image/author.jpg'}
    }
  }
}
watch(windowWidth, newVal => {
  setCardStyle(newVal)
})
onMounted(() => {
  setCardStyle(windowWidth.value)
})
</script>

<style scoped>
.author-background {
  /* background-color: rgb(255, 208, 0); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>