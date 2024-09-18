<template>
  <div style="background-color: #ececec; padding: 5px">
    <div class="flex justify-center items-center ">
      <Icon icon="maki:art-gallery"></Icon>
      <span class="font-bold text-lg ml-1">图库</span>
    </div>
    <hr>
    <a-divider v-if="galleryList.length <= 0"/>
    <div v-if="galleryList.length > 0">
      <!--    手机端gutter="[5, 2]" :span="8" -->
      <!--    PC端gutter="[5, 2]" :span="6" -->
      <a-spin :spinning="loadingInfo">
        <a-row :gutter="[5, 2]">
          <a-image-preview-group>
            <a-col v-for="item in galleryList" :key="item" :span="props.spanValue">
              <a-card :style="{height: props.styleHeight}" hoverable>
                <div>
                  <!-- PC端 height = 250-->
                  <!-- 手机端 height = 150-->
                  <a-image :height="props.imgHeight" :src="item.imgUrl"
                           fallback="/image/login.jpg"
                           width="100%"/>
                </div>
                <a-card-meta>
                  <template #title>
                    <div class="text-center truncate mt-2">
                      {{ item.imgName }}
                    </div>
                  </template>
                  <template #description>
                    <div class="text-center truncate mt-2">
                      <a-button type="link" @click="getGalleryInfo(item.id)">
                        查看信息
                      </a-button>
                      <a-button v-if="isDownloadBut" danger @click="downloadFile(item.imgName,item.imgUrl)">下载
                      </a-button>
                    </div>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-image-preview-group>
        </a-row>
      </a-spin>
      <div class="flex justify-center items-center mt-5">
        <a-pagination v-model:current="current" :pageSize="12" :total="pageTotal" show-less-items
                      @change="getGalleryList"/>
      </div>
    </div>
    <div v-else class="mt-2">
      <a-empty/>
    </div>
    <div>
      <a-modal v-model:open="open" title="图信息" @ok="handleOk">
        <template #footer>
          <a-button key="back" @click="open = false">关闭</a-button>
          <a-button :loading="delLoading" danger @click="delGallery()">删除</a-button>
          <a-button key="submit" :loading="loading" type="primary" @click="handleOk">提交</a-button>
        </template>
        <a-form
            ref="formRef"
            :label-col="{span: 5}"
            :model="formState"
            :rules="rules"
            :wrapper-col="{span: 18}"
        >
          <a-form-item label="图片名字" name="imgName">
            <a-input v-model:value="formState.imgName" placeholder="请输入名称"/>
          </a-form-item>
          <a-form-item ref="imgSize" label="图片大小" name="imgSize">
            <a-input v-model:value="formState.imgSize" disabled/>
          </a-form-item>
          <a-form-item label="图片宽度" name="imgWidth">
            <a-input v-model:value="formState.imgWidth" placeholder="请输入图片宽度"/>
          </a-form-item>
          <a-form-item label="图片高度" name="imgHeight">
            <a-input v-model:value="formState.imgHeight" placeholder="请输入图片高度"/>
          </a-form-item>
          <a-form-item label="图片格式" name="imgFormat">
            <a-input v-model:value="formState.imgFormat" disabled/>
          </a-form-item>
          <a-form-item label="图片hash" name="imgHash">
            <a-input v-model:value="formState.imgHash" disabled/>
          </a-form-item>
          <a-form-item label="图片地址" name="imgUrl">
            <a-input v-model:value="formState.imgUrl" disabled/>
          </a-form-item>
          <a-form-item label="创建时间" name="imgUrl">
            <a-input v-model:value="formState.createTime" disabled/>
          </a-form-item>
          <a-form-item label="图片描述" name="imgDesc">
            <a-textarea v-model:value="formState.imgDesc" placeholder="请输入图片描述"/>
          </a-form-item>
          <a-button v-if="!isDownloadBut" :loading="downloadLoading" class="w-full" danger
                    @click="downloadFile(formState.imgName,formState.imgUrl)">
            <template #icon>
              <DownloadOutlined/>
            </template>
            下载
          </a-button>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {Icon} from "@iconify/vue";
import {message} from "ant-design-vue";
import {DownloadOutlined} from '@ant-design/icons-vue';
import {UnwrapRef, watch} from 'vue';
import {onMounted, reactive, ref} from 'vue';
import type {Rule} from 'ant-design-vue/es/form';
import {getGalleryPageListApi} from "@/api/gallert";
import {isLogin} from "@/utils/auth";
import {getGalleryDetailApi, updateGalleryApi, deleteGalleryApi} from "@/api/gallert";
import {useWindowSize} from "@vueuse/core";

const props = defineProps({
  spanValue: {
    type: Number,
  },
  styleHeight: {
    type: String,
  },
  imgHeight: {
    type: String,
  }
})
const {width: windowWidth} = useWindowSize()
const isDownloadBut = ref<boolean>(false)
const pageTotal = ref<number>(0);
const galleryList = ref<IGallery[]>([])
const current = ref(1);
const loading = ref<boolean>(false);
const loadingInfo = ref<boolean>(false);
const delLoading = ref<boolean>(false)
const open = ref<boolean>(false);
const formRef = ref();

const formState: UnwrapRef<IGallery> = reactive({
  id: 0,
  userid: 0,
  imgType: "",
  imgSize: 0,
  imgWidth: 0,
  imgHeight: 0,
  imgFormat: "",
  imgHash: "",
  imgName: "",
  imgUrl: "",
  imgDesc: "",
  createTime: "",
  updateTime: "",
});
const checkImgWidth = async (_rule: Rule, value: number) => {
  if (!value) {
    return Promise.reject('用户名不能为空！');
  } else if (value < 10 || value > 500) {
    return Promise.reject("图片宽度长度在10到500之间");
  }
}
const checkImgHeight = async (_rule: Rule, value: number) => {
  if (!value) {
    return Promise.reject('用户名不能为空！');
  } else if (value < 10 || value > 500) {
    return Promise.reject("图片长度长度在10到500之间");
  }
}
const rules: Record<string, Rule[]> = {
  imgName: [
    {required: true, message: '名称不能为空！', trigger: 'change'},
    {min: 1, max: 12, message: '名称1-12到个字', trigger: 'blur'},
  ],
  imgWidth: [
    {required: true, validator: checkImgWidth, trigger: 'change'}],
  imgHeight: [{required: true, validator: checkImgHeight, trigger: 'change', type: 'object'}],
  imgDesc: [{required: true, message: '描述不能为空！', trigger: 'change'}],
};

/**
 * 删除图片回调函数
 */
const delGallery = async () => {
  delLoading.value = true
  const res = await deleteGalleryApi(formState.id)
  if (res.code == 200) {
    await getGalleryList(current.value, 12)
    open.value = false;
    delLoading.value = false
  }
};

/**
 * 获取文件列表
 * @param page
 * @param pageSize
 */
const getGalleryList = async (page: number, pageSize: number) => {
  loadingInfo.value = true
  const res = await getGalleryPageListApi(page, pageSize);
  if (res.code === 200) {
    current.value = page
    galleryList.value = res.data.rows;
    pageTotal.value = Number(res.data.total)
    setTimeout(() => {
      loadingInfo.value = false
    }, 200)
  }
}
/**
 * 查看信息
 * @param id
 */
const getGalleryInfo = async (id: number) => {
  loadingInfo.value = true
  const res = await getGalleryDetailApi(id)
  if (res.code == 200) {
    Object.assign<IGallery, IGallery>(formState, res.data)
    loadingInfo.value = false
    open.value = true
  }
}
/**
 * 修啊图回调函数
 */
const handleOk = () => {
  loading.value = true;
  formRef.value.validate().then(async () => {
    let data: IUpdateGallery = {
      id: formState.id,
      imgDesc: formState.imgDesc,
      imgFormat: formState.imgFormat,
      imgHeight: formState.imgHeight,
      imgName: formState.imgName,
      imgWidth: formState.imgWidth
    }
    const res = await updateGalleryApi(data)
    if (res.code == 200) {
      message.success("修改成功！")
      loading.value = false;
      open.value = false;
      await getGalleryList(current.value, 12)
    }
  }).catch(() => {
    message.error("请完成表单验证！")
  });
};

const setWindowStyle = (winValue: number) => {
  winValue < 768 ? isDownloadBut.value = false : isDownloadBut.value = true
}

watch(windowWidth, newVal => {
  if (newVal) {
    setWindowStyle(newVal)
  }
})

/**
 * 下载文件
 */
const downloadLoading = ref<boolean>(false)
const downloadFile = (fileName: string, fileUrl: string) => {
  downloadLoading.value = true
  const link = document.createElement('a')
  link.href = fileUrl
  link.download = fileName
  link.click()
  downloadLoading.value = false
}

onMounted(() => {
  if (isLogin()) {
    getGalleryList(1, 12)
  }
  if (windowWidth.value) {
    setWindowStyle(windowWidth.value)
  }
})

</script>
<style scoped>

</style>