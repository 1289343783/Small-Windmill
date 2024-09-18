<template>
  <div>
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        sub-title="用户首页"
        title="首页"
        @back="() => {
          router.push({path: '/home'})
        }"
    >
      <template #extra>
        <a-button v-if="!cardStyle.setInfo" class="flex justify-center items-center" type="primary"
                  @click="callChildMethod">
          <Icon icon="clarity:update-line"/>
          <span class="ml-1">修改信息</span>
        </a-button>
        <a-popconfirm cancel-text="在等等" ok-text="退出" placement="bottom" @confirm="userLogout">
          <template #icon>
            <div class="w-full flex justify-center items-center">
              <Icon icon="material-symbols:logout"/>
              <span class="ml-1">是否退出登录！</span>
            </div>
          </template>
          <a-button class="flex justify-center items-center" type="primary">
            <Icon icon="material-symbols:logout"/>
            <span class="ml-1">退出登录</span>
          </a-button>
        </a-popconfirm>
      </template>
    </a-page-header>
    <div>
      <a-card :style="{backgroundImage: `url(${cardStyle.image})`, height:'260px' }" class="author-background">
        <div class="flex flex-col justify-center items-center mt-1">
          <div>
            <a-avatar :size="{ xs: 60, sm: 32, md: 40, lg: 90, xl: 80, xxl: 100 }"
                      :src="userInfo.avatar">
              <template #icon>
                <UserOutlined/>
              </template>
            </a-avatar>
          </div>
          <a-button v-if="cardStyle.setInfo" class="flex justify-center items-center" size="small" type="link"
                    @click="callChildMethod">
            <Icon icon="clarity:update-line"/>
            <span class="ml-1">修改信息</span>
          </a-button>
          <a-space class="text-center" direction="vertical">
            <span class="font-bold text-lg text-red-50">{{ userInfo.userName }}</span>
            <span class="font-light text-sm text-orange-50">邮箱:{{ userInfo.email }}</span>
            <span class="font-light text-sm text-orange-50">创建时间:{{ userInfo.createTime }}</span>
          </a-space>
        </div>
      </a-card>
      <div>
        <GalleryListComponent :imgHeight="imgStyle.imgHeight" :spanValue="cardStyle.spanValue"
                              :styleHeight="cardStyle.styleHeight"/>
      </div>
    </div>
    <UpdateUserComponent ref="updateChildRef"/>
  </div>
</template>
<script lang="ts" setup>
import {Icon} from "@iconify/vue";
import {message} from "ant-design-vue";
import {useUserStore} from "@/store/modules/user";
import {onMounted, ref, watch} from "vue";
import {getUserInfoApi} from "@/api/user";
import router from "@/router";
import {useWindowSize} from "@vueuse/core";
import {UserOutlined} from '@ant-design/icons-vue';
import GalleryListComponent from "@/components/GalleryListComponent.vue";
import UpdateUserComponent from "@/components/UpdateUserComponent.vue";

const {width: windowWidth} = useWindowSize()
const userStore = useUserStore();
const userInfo = ref<IUserInfo>({
  createTime: "",
  email: "",
  id: 0,
  imgKey: "",
  isAdmin: 0,
  updateTime: "",
  userName: "",
  avatar: ""
})
const cardStyle = ref({spanValue: 8, styleHeight: '350px', setInfo: false, image: '/image/userinfobackdrop.jpg'})
const imgStyle = ref({imgHeight: '250px'})
const updateChildRef = ref()

const userLogout = () => {
  userStore.logout()
  router.push('/login')
  message.info('已退出登录！');
};
const getUserInfo = async () => {
  const res = await getUserInfoApi()
  if (res.code === 200) {
    userInfo.value = res.data
  }
}

const setWindowStyle = (winValue: number) => {
  if (winValue < 768) {
    imgStyle.value = {imgHeight: '150px'}
    cardStyle.value = {spanValue: 12, styleHeight: '250px', setInfo: true, image: '/image/userinfobackdrop.jpg'}
  } else {
    imgStyle.value = {imgHeight: '290px'}
    cardStyle.value = {spanValue: 6, styleHeight: '390px', setInfo: false, image: '/image/userinfobackdrop1.jpg'}
  }
}
/**
 * 打开修改用户信息drawer
 */
const callChildMethod = () => {
  updateChildRef.value.showDrawer()
}

watch(windowWidth, newVal => {
  if (newVal) {
    setWindowStyle(newVal)
  }
})

onMounted(async () => {
  if (await userStore.getIsLogin()) {
    await getUserInfo()
  } else {
    message.info('请先登录！')
    router.push('/login')
  }
  if (windowWidth.value) {
    setWindowStyle(windowWidth.value)
  }
})

</script>
<style scoped>
.author-background {
  background-repeat:no-repeat;
  background-size:100%;
}

:deep(#components-a-popconfirm-demo-placement) .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>