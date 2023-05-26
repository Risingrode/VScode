import axios from 'axios';

//封装一个工具

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API
})

//拦截器
request.interceptors.request.use((req) => {
    let token = localStorage.getItem("token");
    if (token) {
        req.headers.token = token;
    }
    return req
})

export default request;