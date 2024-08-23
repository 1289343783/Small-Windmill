<template>
  <div :style="{backgroundImage: `url(${cardStyle.image})`}"
       class=" flex justify-center h-screen login-background">
    <a-card
        :style="{width: cardStyle.width, height:cardStyle.height,
        borderRadius: cardStyle.borderRadius,marginTop: cardStyle.marginTop}"
        class="justify-center bg-slate-100" hoverable>
      <template #title>
        <div class="text-center font-semibold text-xl">
          注册
        </div>
      </template>
      <div>
        <a-form
            ref="formRef"
            :label-col="{ span: 4 }"
            :model="formState"
            :rules="rules"
            autocomplete="off"
            class="justify-center items-center"
            name="custom-validation"
            @finish="handleFinish"
            @finishFailed="handleFinishFailed"
        >
          <a-form-item
              :wrapper-col="{ offset: 0, span: 19 }"
              has-feedback
              label="用户名："
              name="username"
          >
            <a-input v-model:value="formState.username" autocomplete="off" placeholder="请输入用户名"/>
          </a-form-item>
          <a-form-item
              :wrapper-col="{ offset: 0, span: 19 }"
              has-feedback
              label="邮箱："
              name="email"
          >
            <a-input v-model:value="formState.email" autocomplete="off" placeholder="请输入邮箱"/>
          </a-form-item>

          <a-form-item
              :wrapper-col="{ offset: 0, span: 19 }"
              has-feedback
              label="密码："
              name="password"
          >
            <a-input-password v-model:value="formState.password" autocomplete="off" placeholder="请输入密码"/>
          </a-form-item>
          <a-form-item>
            <a-button :loading="registerLoading" class="w-full" html-type="submit" size="large" type="primary">
              注册账号
            </a-button>
          </a-form-item>
        </a-form>
      </div>
      <router-link to="/login">
        <a class="text-blue-500" href="#">已账号？去登录</a>
      </router-link>
    </a-card>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, reactive, ref, watch} from "vue";
import {useWindowSize} from "@vueuse/core";
import {message} from "ant-design-vue";
import {Rule} from "ant-design-vue/es/form";
import type {FormInstance} from 'ant-design-vue';
import {registerApi} from "@/api/user";
import router from "@/router";

const {width: windowWidth} = useWindowSize()
let cardStyle = ref({
  width: '450px',
  height: '360px',
  borderRadius: '10px',
  image: '/image/login.jpg',
  marginTop: '250px'
})

interface FormState {
  username: string;
  email: string;
  password: string;
}

const registerLoading = ref(false)
const formRef = ref<FormInstance>();
const formState = reactive<FormState>({
  username: '',
  email: '',
  password: '',
});

const checkName = async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('用户名不能为空！');
  } else if (value.length < 3 || value.length > 10) {
    return Promise.reject("用户名长度在3到10之间");
  }
}
const checkEmail = async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('邮箱不能为空！');
  } else if (!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
    return Promise.reject("邮箱格式不正确");
  }
}
const checkPassword = async (_rule: Rule, value: string) => {
  if (value.length < 6 || value.length > 16) {
    return Promise.reject("密码长度不能小于6位");
  }
}

const rules: Record<string, Rule[]> = {
  username: [{required: true, validator: checkName, trigger: 'change'}],
  email: [{validator: checkEmail, trigger: 'change'}],
  password: [{validator: checkPassword, trigger: 'change'}],
};

/**
 * 表单提交回调函数
 * @param values
 */
const handleFinish = async (values: FormState) => {
  console.log('Success:', values);
  registerLoading.value = true
  let data: IRegister = {userName: values.username, email: values.email, password: values.password}
  const res = await registerApi(data);
  if (res.code === 200) {
    message.success('注册成功！')
    registerLoading.value = false
    router.push('/login')
  } else {
    registerLoading.value = false
    message.success(res.msg)
  }
}
/**
 * 表单错误时回调函数
 */
const handleFinishFailed = () => {
  message.error('请完成表单验证！')
};


const setStyle = (newVal: number) => {
  if (newVal) {
    if (newVal < 768) {
      cardStyle.value = {
        width: '300px',
        height: '460px',
        borderRadius: '10px',
        image: '/image/login1.jpg',
        marginTop: '100px'
      }
    }
  } else {
    cardStyle.value = {
      width: '450px',
      height: '360px',
      borderRadius: '10px',
      image: '/image/login.jpg',
      marginTop: '250px'
    }
  }
}

watch(windowWidth, newVal => {
  setStyle(newVal)
})
onMounted(async () => {
  setStyle(windowWidth.value)
})
</script>
<style scoped>
.login-background {
  /* background-color: rgb(255, 208, 0); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>