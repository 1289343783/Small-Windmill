<template>
  <a-layout >
    <a-space direction="vertical">
      <GalleryHeaderCard/>
      <GalleryLayoutContent class="p-2">
        <router-view v-slot="{ Component, route }">
          <keep-alive :include="keepAliveComponents" :max="10">
            <component :is="Component" :key="route.fullPath"/>
          </keep-alive>
        </router-view>
      </GalleryLayoutContent>
      <GalleryLayoutFooter/>
    </a-space>
  </a-layout>
</template>

<script lang="ts" setup>
import GalleryHeaderCard from "./components/GalleryHeaderCard.vue";
import GalleryLayoutContent from "./components/GalleryLayoutContent.vue";
import GalleryLayoutFooter from "./components/GalleryLayoutFooter.vue";
import router from "../router";
import {computed, ref} from "vue";

// 获取需要缓存的路由
const keepAliveComponents = computed((): string[] => {
  const cacheRoute = router.getRoutes().filter(item => item.meta.isKeepAlive)
  return cacheRoute.map(item => String(item.name))
})


</script>
<style scoped>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>