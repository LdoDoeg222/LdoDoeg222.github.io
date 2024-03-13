export const useUserStore = defineStore('user', () => {
  const uid = ref<string>()
  const token = ref<Symbol>()

  return {
    uid
  }
})
