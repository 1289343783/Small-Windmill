<template>
  <div :style="{backgroundImage: `url(${cardStyle.image})`}"
       class=" flex justify-center items-center h-screen login-background">
    <a-card
        :style="{width: cardStyle.width, height:cardStyle.height, borderRadius: cardStyle.borderRadius}"
        class="justify-center bg-slate-100" hoverable>
      <template #title>
        <div class="text-center font-semibold text-xl">
          登录
        </div>
      </template>
      <div>
        <a-form
            :model="formState"
            autocomplete="off"
            class="justify-center items-center"
            name="basic"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
        >
          <a-form-item
              :rules="[{ required: true, message: '邮箱不能为空！!' }]"
              :wrapper-col="{ offset: 0, span: 20 }"
              label="邮箱："
              name="email"
          >
            <a-input v-model:value="formState.email" placeholder="请输入邮箱"/>
          </a-form-item>

          <a-form-item
              :rules="[{ required: true, message: '密码不能为空!' }]"
              :wrapper-col="{ offset: 0, span: 20 }"
              label="密码："
              name="password"
          >
            <a-input-password v-model:value="formState.password" placeholder="请输入密码"/>
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 1, span: 12 }" name="remember">
            <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
          </a-form-item>
          <a-form-item>
            <a-button :loading="loginLoading" class="w-full" html-type="submit" size="large" type="primary">登录
            </a-button>
          </a-form-item>
        </a-form>
      </div>
      <router-link to="/register">
        <a class="text-blue-500" href="#">没有账号？去注册</a>
      </router-link>
    </a-card>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, reactive, ref, watch} from "vue";
import {useWindowSize} from "@vueuse/core";
import {getLoginInfo, removeLoginInfo, setLoginInfo, setToken} from "../utils/auth";
import {message} from "ant-design-vue";
import {loginApi} from "@/api/login";
import {useUserStore} from "@/store/modules/user";
import router from "@/router";

const {width: windowWidth} = useWindowSize()
let cardStyle = ref({
  width: '540px',
  height: '400px',
  borderRadius: '10px',
  image: '/image/login.jpg'
})

interface FormState {
  email: string;
  password: string;
  remember: boolean;
}

const loginLoading = ref(false)
const formState = reactive<FormState>({
  email: '',
  password: '',
  remember: false,
});
/**
 * 表单验证成功
 * @param values
 */
const onFinish = async (values: FormState) => {
  console.log('Success:', values);
  loginLoading.value = true
  const res = await loginApi(values.email, values.password)
  if (res.code === 200) {
    setToken(res.data.token)
    rememberInfo()
    await useUserStore().getUserApi()
    loginLoading.value = false
    router.push("/home")
    message.success('登录成功！')
  } else {
    loginLoading.value = false
    message.error(res.msg)
  }
};

/**
 * 表单验证失败
 */
const onFinishFailed = () => {
  message.error('请完成表单验证！')
};
/**
 * 设置记住密码
 */
const rememberInfo = () => {
  if (formState.remember) {
    setLoginInfo({email: formState.email, password: formState.password, remember: formState.remember});
  } else {
    removeLoginInfo()
  }
}
/**
 * 获取记住密码信息
 */
const getRememberInfo = () => {
  const info = getLoginInfo()
  console.log(info)
  if (info) {
    formState.remember = info.remember
    if (info.remember) {
      formState.email = info.email
      formState.password = info.password
    }
  }
}


watch(windowWidth, newVal => {
  if (newVal) {
    if (newVal < 768) {
      cardStyle.value = {width: '300px', height: '430px', borderRadius: '10px', image: '/image/login1.jpg'}
    }
  } else {
    cardStyle.value = {width: '460px', height: '350px', borderRadius: '10px', image: '/image/login.jpg'}
  }
})
getRememberInfo()
onMounted(async () => {
  if (windowWidth.value) {
    if (windowWidth.value < 768) {
      cardStyle.value = {width: '300px', height: '430px', borderRadius: '10px', image: '/image/login1.jpg'}
    } else {
      cardStyle.value = {width: '460px', height: '350px', borderRadius: '10px', image: '/image/login.jpg'}
    }
  }
})
</script>
<style scoped>
.login-background {
  /* background-color: rgb(255, 208, 0); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>