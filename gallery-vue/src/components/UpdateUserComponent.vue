<template>
  <div>
    <!--PC端720-->
    <!--手机端400-->
    <a-drawer
        :body-style="{ paddingBottom: '80px' }"
        :footer-style="{ textAlign: 'right' }"
        :open="openDrawer"
        :width="drawerStyle.drawerWidth"
        title="用户信息"
        @close="onClose"
    >
      <a-modal v-model:open="avatarOpen" title="上传头像" @ok="handleAvatarOk">
        <div>
          <a-upload-dragger
              :before-upload="beforeUpload"
              :customRequest="()=> undefined"
              :disabled="loading"
              :multiple="false"
              :show-upload-list="false"
              accept="image/*"
              list-type="picture-card"
              name="avatar"
          >
            <img v-if="isShowImage" :src="isShowImage" alt="avatar" height="90" width="90"/>
            <div v-else>
              <p class="ant-upload-drag-icon">
                <inbox-outlined></inbox-outlined>
              </p>
              <p class="ant-upload-text">单击或拖动文件到此区域进行上传</p>
              <p class="ant-upload-hint">
                严禁上传公司数据或其他不雅文件
              </p>

            </div>
          </a-upload-dragger>
        </div>
        <template #footer>
          <a-button key="back" @click="handleAvatarCancel">关闭</a-button>
          <a-button key="submit" :loading="loading" type="primary" @click="handleAvatarOk">
            提交
          </a-button>
        </template>
      </a-modal>
      <div class="flex justify-center items-center">
        <img v-if="imageUrl" :src="imageUrl" alt="avatar" height="90" width="90"/>
      </div>
      <a-button block class="bg-stone-300 mt-2" @click="showAvatarModal">上传头像
        <template #icon>
          <plus-outlined/>
        </template>
      </a-button>
      <a-form ref="formRef"
              :label-col="{ span: 4 }"
              :model="form"
              :rules="rules"
              autocomplete="off"
              class="mt-4"
              layout="vertical"
              name="custom-validation"
              @finish="handleSubmit" @finishFailed="handleFinishFailed">
        <a-form-item label="用户名:" name="userName">
          <a-input v-model:value="form.userName" placeholder="请输入用户名"/>
        </a-form-item>
        <a-form-item label="邮箱:" name="email">
          <a-input v-model:value="form.email" placeholder="请输入邮箱"/>
        </a-form-item>
        <a-form-item label="密码" name="password">
          <a-input v-model:value="form.password" placeholder="请输入密码"/>
        </a-form-item>
        <a-form-item>
          <a-button :loading="submitLoading" class="w-full" html-type="submit" type="primary">提交</a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, reactive, ref, watch} from 'vue';
import type {Rule} from 'ant-design-vue/es/form';
import {PlusOutlined, InboxOutlined} from '@ant-design/icons-vue';
import {message} from 'ant-design-vue';
import type {FormInstance} from 'ant-design-vue';
import {useWindowSize} from "@vueuse/core";
import {updateUserApi, getUserInfoApi, updateUserAvatarApi} from "@/api/user";

const {width: windowWidth} = useWindowSize()
const avatarOpen = ref(false)
const drawerStyle = ref({drawerWidth: 720})
const formRef = ref<FormInstance>();
const form = reactive<IUpdateUser>({
  id: 0,
  userName: '',
  email: '',
  password: ''
});
const fileValue = ref()
const loading = ref<boolean>(false);
const imageUrl = ref<string>('')
const openDrawer = ref<boolean>(false);

const checkEmail = async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('邮箱不能为空！');
  } else if (!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
    return Promise.reject("邮箱格式不正确");
  }
}
const checkPassword = () => {
  let password = form.password
  if (password.length > 0 || password != '') {
    if (password.length < 6 || password.length > 16) {
      message.error("密码长度不能小于6位");
      return false
    }
  }
  return true
}
const rules: Record<string, Rule[]> = {
  userName: [{required: true, message: '用户名不能为空'}],
  email: [{validator: checkEmail, trigger: 'change'}]
};

const showDrawer = () => {
  getUserInfo();
  openDrawer.value = true;
};

const onClose = () => {
  openDrawer.value = false;
};
/**
 * 修改用户信息回调函数
 */
const submitLoading = ref<boolean>(false)
const handleSubmit = async (values: IUpdateUser) => {
  if (checkPassword()) {
    submitLoading.value = true
    values.id = form.id
    const res = await updateUserApi(values)
    if (res.code == 200) {
      await getUserInfo()
      message.success("修改成功！")
    } else {
      message.error(res.msg)
    }
    setTimeout(() => {
      submitLoading.value = false
    }, 200)
  }
}
/**
 * 表单错误时回调函数
 */
const handleFinishFailed = () => {
  message.error('请完成表单验证！')
};

/**
 * 获取用户信息
 */
const getUserInfo = async () => {
  const res = await getUserInfoApi()
  if (res.code == 200) {
    form.id = res.data.id
    form.userName = res.data.userName
    form.email = res.data.email
    form.password = ''
    imageUrl.value = res.data.avatar == null ? '' : res.data.avatar
  }
}

/**
 * 上传之前校验图片大小
 * @param file
 */
const isShowImage = ref<string>('')
const beforeUpload = (file: File) => {
  loading.value = true;
  const isLt2M = file.size / (1024 * 1024) < 5;
  if (!isLt2M) {
    message.error('图像必须小于5MB!');
  } else {
    isShowImage.value = file ? URL.createObjectURL(file) : ''
    fileValue.value = file
  }
  loading.value = false;
  return isLt2M;
};
/**
 * 打开头像上传Modal
 */
const showAvatarModal = () => {
  isShowImage.value = imageUrl.value
  avatarOpen.value = true;
};
/**
 *关闭头像上传Modal
 */
const handleAvatarCancel = () => {
  isShowImage.value = ''
  avatarOpen.value = false;
};
/**
 * 提交头像函数
 * @param e
 */
const handleAvatarOk = async (e: MouseEvent) => {
  loading.value = true
  if (fileValue.value == null) {
    return message.error("请先更换新的头像")
  }
  const res = await updateUserAvatarApi(fileValue.value)
  if (res.code == 200) {
    await getUserInfo()
    loading.value = false
    avatarOpen.value = false;
  }
};
defineExpose({showDrawer})

const setWindowStyle = (winValue: number) => {
  if (winValue < 768) {
    drawerStyle.value = {drawerWidth: 400}
  } else {
    drawerStyle.value = {drawerWidth: 720}
  }
}
watch(windowWidth, newVal => {
  if (newVal) {
    setWindowStyle(newVal)
  }
})

onMounted(async () => {
  if (windowWidth.value) {
    setWindowStyle(windowWidth.value)
  }
})

</script>
<style scoped>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>