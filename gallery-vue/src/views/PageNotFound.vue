<template>
  <a-result>
    <template #title>
      <span class="text-base font-semibold">
      太好了，被你发现这个页面了!
      </span>
    </template>
    <template #icon>
      <Icon height="200" icon="tabler:error-404-off" width="200"/>
    </template>

    <template #extra>
      <a-button type="primary" @click="router.push('/home')">返回首页</a-button>
    </template>
  </a-result>
</template>
<script lang="ts" setup>
import {Icon} from "@iconify/vue";
import router from "@/router";
</script>
<style scoped>
</style>