<template>
  <div>
    <div>
      <a-upload-dragger
          :customRequest="customRequest"
          :disabled="loading"
          :multiple="false"
          :show-upload-list="false"
          accept="image/*"
          list-type="picture-card"
          name="file"
      >
        <div v-if="loading">
          <Icon icon="eos-icons:loading" style="height:50px; width: 50px;"/>
          <p class="ant-upload-text">上传中....</p>
          <p class="ant-upload-hint">支持单次上传。严禁上传公司数据或其他乐队文件 </p>
        </div>
        <div v-else>
          <p class="ant-upload-drag-icon">
            <Icon icon="pixelarticons:cloud-upload" style="height:50px; width: 50px;"/>
          </p>
          <p class="ant-upload-text">单击或拖动文件到此区域进行上传</p>
          <p class="ant-upload-hint">支持单次上传。严禁上传公司数据或其他乐队文件 </p>
        </div>
      </a-upload-dragger>
    </div>
    <div class=" flex mt-2 justify-center items-center">
      <icon icon="oui:app-recently-viewed"></icon>
      <span class="text-lg font-semibold  ml-2">
      最近上传
      </span>
    </div>
    <div v-if="galleryList.length == 0">
      <a-card class="text-center font-semibold">
        <Icon icon="carbon:data-error" style="height:40px; width: 40px;"></Icon>
        <p>暂未有上传</p>
      </a-card>
    </div>
    <div v-else>
      <a-spin :spinning="spinningGallery" tip="加载中">
        <a-card v-for="item in galleryList" class="hover:bg-zinc-200">
          <div class="flex justify-center items-center "
               style="border-top: 1px  #666; ">
            <div class="flex-none p-2">
              <a-image :height="60" :src="item.imgUrl" :width="60">
              </a-image>
            </div>
            <div class="grow p-2">
              <a :href="item.imgUrl">{{ item.imgName }}</a>
              <div v-if="windowWidth >= 768">
                <span>{{ item.imgDesc == '' ? '暂无描述' : item.imgDesc }}</span>
              </div>
            </div>
            <div class="flex-none p-2">
              <a-button type="primary" @click="showGallery(item.id)">查看</a-button>
            </div>
          </div>
        </a-card>
      </a-spin>
    </div>
    <GalleryInfoComponent ref="galleryInfoComponent"/>
  </div>
</template>
<script lang="ts" setup>
import {message} from 'ant-design-vue';
import {Icon} from "@iconify/vue";
import {onMounted, ref,} from 'vue';
import {useWindowSize} from "@vueuse/core";
import {getGalleryPageListApi} from "../api/gallert";
import {uploadImageApi} from "../api/upload";
import {isLogin} from "@/utils/auth";
import GalleryInfoComponent from "@/components/GalleryInfoComponent.vue";

const {width: windowWidth} = useWindowSize()
const spinningGallery = ref<boolean>(true);
const pageSize = ref<number>(10);
const galleryList = ref<IGallery[]>([])
const loading = ref<boolean>(false);
const galleryInfoComponent = ref();
// 手动上传文件回调
const customRequest = async (file: any) => {
  loading.value = true;
  const res = await uploadImageApi(file.file as File)
  if (res.code == 200) {
    await getGalleryList(1)
    setTimeout(() => {
      loading.value = false;
    }, 300);
    message.success('上传成功')
  }
};
/**
 * 获取文件列表
 * @param pageNum
 */
const getGalleryList = async (pageNum: number) => {
  spinningGallery.value = true;
  const res = await getGalleryPageListApi(pageNum, pageSize.value);
  if (res.code === 200) {
    galleryList.value = res.data.rows;
    setTimeout(() => {
      spinningGallery.value = false;
    }, 200)
  }
}
/**
 * 查看相册modal
 * @param id
 */
const showGallery = (id: number) => {
  galleryInfoComponent.value.showGalleryInfo(id)
}
onMounted(() => {
  if (isLogin()) {
    getGalleryList(1)
  }
})

</script>
<style scoped>

</style>