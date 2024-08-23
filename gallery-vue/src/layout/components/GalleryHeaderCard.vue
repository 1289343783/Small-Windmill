<template>
  <a-layout-header
      :style="{ position: 'fixed', zIndex: 1, width: '100%' ,paddingInline: 0,backgroundColor: 'rgb(236,238,243)'}"
  >
    <div class="flex items-center h-16  text-center">
      <div v-if="showDrawerBnt" class="flex-none w-full">
        <div class="flex justify-center items-center">
          <div class="flex-none">
            <div class="flex justify-center items-center ml-2">
              <Icon icon="ph:windmill" style="height:40px; width: 40px"></Icon>
            </div>
          </div>
          <div class="grow font-semibold">
            <p class="text-base">GALLERY-WINDMILL</p>
          </div>
          <div class="flex-none mr-2">
            <div v-if="!isLogin">
              <a-dropdown>
                <template #overlay>
                  <a-menu>
                    <a-menu-item key="1">
                      <router-link to="/login">
                        <a-button class="w-20" size="small" type="primary">
                          登录
                        </a-button>
                      </router-link>
                    </a-menu-item>
                    <a-menu-item key="2">
                      <router-link to="/register">
                        <a-button class="w-20" size="small" type="primary">
                          注册账号
                        </a-button>
                      </router-link>
                    </a-menu-item>
                  </a-menu>
                </template>
                <a-button>
                  <icon icon="solar:list-down-bold"></icon>
                </a-button>
              </a-dropdown>
            </div>
            <div v-else>
              <a-button class="ml-2" type="primary" @click="showDrawer">
                <icon icon="mdi:menu-close"></icon>
              </a-button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="flex w-screen">
        <div class="flex-none  w-20">
          <a-dropdown>
            <a class="ant-dropdown-link flex justify-center items-center" @click.prevent>
              <span>关于</span>
              <icon class="ml-2" icon="subway:down-2"></icon>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a href="/info/api">
                    <icon icon="eos-icons:api"></icon>
                    API接口文档
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a href="/author">
                    <icon icon="lets-icons:user-box-duotone"></icon>
                    关于作者
                  </a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
        <div class="grow ">
          <div class="">
            <Icon icon="ph:windmill" style="height:20px; width: 20px"></Icon>
            <span class="font-semibold italic text-2xl ml-2">GALLERY-WINDMILL</span>
          </div>
        </div>
        <div v-if="!isLogin" class="flex-none mr-2">
          <a-space>
            <router-link to="/login">
              <a-button type="primary">
                <icon height="15" icon="mdi:login" width="15"></icon>
                <span class="ml-1">登录</span>
              </a-button>
            </router-link>
            <router-link to="/register">
              <a-button type="primary">
                <Icon height="18" icon="mdi:register-outline" width="18"></Icon>
                <span class="ml-1">注册账号</span>
              </a-button>
            </router-link>
          </a-space>
        </div>
        <a-menu v-else
                v-model:selectedKeys="selectedKeys"
                :items="items"
                class=" flex-none"
                mode="horizontal"
                style="background-color: rgb(236,238,243)"
        >
        </a-menu>
      </div>
    </div>
  </a-layout-header>
  <a-drawer :closable="false" :open="open" :placement="placement" :width="280" @close="onClose">
    <template #title>
      <div>
        <a-avatar :size="64" :src="userStore.$state.userInfo?.avatar">
          <template #icon>
            <UserOutlined/>
          </template>
        </a-avatar>
        <span class="ml-2">{{ userStore.$state.userInfo?.userName }}</span>
      </div>
    </template>
    <a-menu
        v-model:selectedKeys="selectedKeys"
        :items="items"
        class=" flex-row"
        mode="inline"
        style="border-inline-end: none"
        @click="clickMenu"
    ></a-menu>
    <a-menu
        v-model:selectedKeys="apiKeys"
        :items="apiItems"
        class=" flex-row"
        mode="inline"
        style="border-inline-end: none"
        @click="clickApiMenu"
    ></a-menu>

  </a-drawer>
</template>
<script lang="ts" setup>
import {h, onMounted, ref, watch} from 'vue';
import {Icon} from '@iconify/vue'
import {useWindowSize} from "@vueuse/core";
import type {DrawerProps, MenuProps} from 'ant-design-vue';
import {UserOutlined} from '@ant-design/icons-vue';
import {useUserStore} from "@/store/modules/user";
import router from "@/router";

const userStore = useUserStore()
const {width: windowWidth} = useWindowSize()
const selectedKeys = ref<string[]>(['Home']);
const apiKeys = ref<string[]>([''])
const items = ref<MenuProps['items']>([
  {
    key: 'Home',
    icon: () => h(Icon, {
      icon: 'ant-design:home-outlined',
    }),
    label: '主页',
    title: '主页',
    onClick: () => {
      router.push('/home')
    }
  },
  {
    key: 'userMenu',
    icon: () => h(Icon, {
      icon: 'material-symbols:settings',
    },),
    label: '用户设置',
    title: '用户设置',
    children: [
      {
        key: 'userInfo',
        label: h('a', {
          href: '/user/info', target: '_blank'
        }, '用户信息'),
      },
      {
        key: 'loginOut',
        label: '退出登录',
        onClick: () => {
          userStore.logout()
          router.push('/login')
        }
      },
    ],
  }
])
const apiItems = ref<MenuProps['items']>([
  {
    key: 'InfoApi',
    icon: () => h(Icon, {
      icon: 'eos-icons:api',
    }),
    label: 'Api接口',
    title: 'Api接口',
    onClick: () => {
      router.push({name: 'InfoApi'})
    }
  }, {
    key: 'AboutAuthor',
    icon: () => h(Icon, {
      icon: 'lets-icons:user-box-duotone',
    }),
    label: '关于作者',
    title: '关于作者',
    onClick: () => {
      router.push({name: 'AboutAuthor'})
    }
  }
])
const isLogin = ref<boolean>(false)
const showDrawerBnt = ref<boolean>(false)
const placement = ref<DrawerProps['placement']>('left');
const open = ref<boolean>(false);
const showDrawer = () => {
  open.value = true;
};
const onClose = () => {
  open.value = false;
};
const clickApiMenu = () => {
  selectedKeys.value = ['']
}

const clickMenu = () => {
  apiKeys.value = ['']
}

watch(windowWidth, newVal => {
  if (newVal) {
    if (newVal < 768) {
      showDrawerBnt.value = true
    } else {
      showDrawerBnt.value = false
    }
  }
})
onMounted(async () => {
  isLogin.value = await userStore.getIsLogin()
  if (windowWidth.value) {
    if (windowWidth.value < 768) {
      showDrawerBnt.value = true
    } else {
      showDrawerBnt.value = false
    }
  }
})
</script>
<style scoped>
</style>
