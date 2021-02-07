import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c0b41f08-198a-4e54-8351-7c86337bdf85"
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
//
    UnFollowUsers(id: number) {
        return instance.delete(`follow/${id}`)
    },
    FollowUsers(id: number) {
        return instance.post(`follow/${id}`)
    },
};


//
// export const FollowUsers = (currentPage: number,pageSize:number ) => {
//   return   insanse.get(`users?page=${currentPage}&count=${pageSize}`)
//       .then(response => {
//           return response.data
//       } )
// };