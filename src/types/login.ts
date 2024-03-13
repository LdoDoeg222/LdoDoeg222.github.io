type userLoginDto = {
  password: string
  userName: string
}
type phoneLoginDto = {
  phone: string
  verifycode: string
}

export type { userLoginDto, phoneLoginDto }
