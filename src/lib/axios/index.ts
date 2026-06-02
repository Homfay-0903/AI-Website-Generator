import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        const errorMessage = error.response?.data?.message || error.message || '请求失败'
        console.error('API Error:', errorMessage)
        return Promise.reject(error)
    }
)

export default axiosInstance