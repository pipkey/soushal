import axios from "axios";
import {FormDataType} from "../components/Login/Login";

export type APIResponseType<D = {}, T = ResultCodes> = {
    data: D
    message: string[]
    resultCode: T
}

export enum ResultCodes {
    Success = 0,
    Error = 1
}


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a6426bec-7226-42f8-9744-9ee811f5483e"
    },
    data: {}
});
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    UnFollowUsers(id: number) {
        return instance.delete(`follow/${id}`)
    },
    FollowUsers(id: number) {
        return instance.post(`follow/${id}`)
    },
};

export const profileAPI = {
    setUserProfile(id: string) {
        return instance.get(`profile/${id}`)
    },

    getStatus(id: string) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },

};
export const headerAPI = {
    setDataUser() {
        return instance.get(`auth/me`)
    },
    login(formData: FormDataType) {

        return instance.post(`auth/login`, formData)
    },
    logOut() {
        return instance.delete(`auth/login`)
    }
};
