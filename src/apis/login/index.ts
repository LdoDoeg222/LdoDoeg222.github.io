import { instance } from '@/apis/axios'
import type { userLoginDto, phoneLoginDto } from '@/types/login'

export const login = (data: userLoginDto) => {

  return instance({
    url: '/login',
    method: 'POST',
    data: data
  })
}
export const getVerifyCode = (params: string) =>
  instance({
    url: '/login/getVerifyCode',
    method: 'POST',
    params: params
  })

export const loginByPhone = (data: phoneLoginDto) =>
  instance({
    url: '/login',
    method: 'POST',
    data: data
  })
