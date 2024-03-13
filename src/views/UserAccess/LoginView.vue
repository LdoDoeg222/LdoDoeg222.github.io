<template>
  <div>
    <h1>登录</h1>
    <ElForm :model="form">
      <ElFormItem label="用户名">
        <ElInput v-model="form.userName" />
      </ElFormItem>
      <ElFormItem label="密码">
        <ElInput v-model="form.password" type="password" />
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" @click="onLogin">提交</ElButton>
      </ElFormItem>
    </ElForm>
    <div :style="' font-size: 32px '">
      {{ temp }}
      <div v-for="(item, key, index) of temp">{{ item }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { axiosErrorHandler } from '@/apis/axios/error'
import { login } from '@/apis/login'
import type { userLoginDto } from '@/types/login'
import type { AxiosError } from 'axios'

const form = reactive<userLoginDto>({
  userName: '',
  password: ''
})

const temp = ref<any>({ uid: 1, pswd: 1 })

function onLogin() {
  ElMessage('Logining. . .')
  login(form)
    .then((resp) => {
      ElMessage.success('Success')
      temp.value = resp.data
    })
    .catch((error) => {
      ElMessage.error('error')
      temp.value = axiosErrorHandler(error)
    })
}

onMounted(() => {
  ElMessage('Hello, Vue 3 + Element Plus!')
})
</script>

<style scoped></style>
