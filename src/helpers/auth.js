export const getToken = localStorage.getItem("tokenCMS");
export const setToken = () => localStorage.setItem("tokenCMS", "juan");
export const removeToken = () => localStorage.removeItem("tokenCMS");
