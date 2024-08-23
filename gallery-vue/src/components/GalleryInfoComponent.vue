<template>
  <div>
    <a-spin :spinning="spinningGallery" tip="加载中">
      <a-modal v-model:open="openGalleryInfo" title="图信息">
        <template #footer>
          <a-button key="back" danger type="primary" @click="openGalleryInfo = false">关闭</a-button>
        </template>
        <a-form
            :label-col="{span: 5}"
            :wrapper-col="{span: 18}"
        >
          <a-form-item label="图片名字" name="imgName">
            <a-input v-model:value="galleryInfo.imgName" disabled/>
          </a-form-item>
          <a-form-item label="图片大小" name="imgSize" r>
            <a-input v-model:value="galleryInfo.imgSize" disabled/>
          </a-form-item>
          <a-form-item label="图片宽度" name="imgWidth">
            <a-input v-model:value="galleryInfo.imgWidth" disabled/>
          </a-form-item>
          <a-form-item label="图片高度" name="imgHeight">
            <a-input v-model:value="galleryInfo.imgHeight" disabled/>
          </a-form-item>
          <a-form-item label="图片格式" name="imgFormat">
            <a-input v-model:value="galleryInfo.imgFormat" disabled/>
          </a-form-item>
          <a-form-item label="图片hash" name="imgHash">
            <a-input v-model:value="galleryInfo.imgHash" disabled/>
          </a-form-item>
          <a-form-item label="图片地址" name="imgUrl">
            <a-input v-model:value="galleryInfo.imgUrl" disabled/>
          </a-form-item>
          <a-form-item label="创建时间" name="imgUrl">
            <a-input v-model:value="galleryInfo.createTime" disabled/>
          </a-form-item>
          <a-form-item label="图片描述" name="imgDesc">
            <a-textarea v-model:value="galleryInfo.imgDesc" disabled/>
          </a-form-item>
        </a-form>
      </a-modal>
    </a-spin>
  </div>
</template>
<script lang="ts" setup>

import {reactive, ref} from "vue";
import {getGalleryDetailApi} from "@/api/gallert";

const galleryInfo = reactive<IGallery>({
  createTime: "",
  id: 0,
  imgDesc: "",
  imgFormat: "",
  imgHash: "",
  imgHeight: 0,
  imgName: "",
  imgSize: 0,
  imgType: "",
  imgUrl: "",
  imgWidth: 0,
  updateTime: "",
  userid: 0

})
const openGalleryInfo = ref<boolean>(false)
const spinningGallery = ref<boolean>(false)
/**
 * 获取图信息
 * @param id
 */
const showGalleryInfo = async (id: number) => {
  spinningGallery.value = true
  const res = await getGalleryDetailApi(id)
  if (res.code == 200) {
    Object.assign<IGallery, IGallery>(galleryInfo, res.data)
    openGalleryInfo.value = true
    setTimeout(() => {
      spinningGallery.value = false
    }, 200)
  }
}
defineExpose({showGalleryInfo})
</script>

<style scoped>

</style>