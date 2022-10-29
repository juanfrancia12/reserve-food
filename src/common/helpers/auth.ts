export const getToken = localStorage.getItem("tokenAPP")
export const setToken = (token: string) =>
  localStorage.setItem("tokenAPP", token)
export const removeToken = () => localStorage.removeItem("tokenAPP")
