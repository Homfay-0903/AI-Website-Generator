import axiosInstance from './index'

export interface User {
    name: string
    email: string
    credits: number
}

export interface UserResponse {
    user: User
}

export const userApi = {
    createOrGetUser: (): Promise<UserResponse> => {
        return axiosInstance.post('/users')
    }
}