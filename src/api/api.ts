import axios from "axios";


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
    setUserProfile(id:string) {
        return instance.get(`profile/${id}`)

    }
};
export const headerAPI = {
    setDataUser() {
        return instance.get(`auth/me`)
    }
};
