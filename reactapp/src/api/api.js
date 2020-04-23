import axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {"API-KEY": '0e63aab2-f156-445a-b8a0-ab2fbb0070ad'},
    withCredentials: true
});

export const usersAPI = {
    getUsersApi(currentPage = 1, pageSize = 20) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    followApi(userId) {
        return instance.post(`/follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    unFollowApi(userId) {
        return instance.delete(`/follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getProfileApi(userId){
        return instance.get(`/profile/${userId}`)
            .then(response => {
                return response.data
            });
    },
    authMeApi(){
        return instance.get(`/auth/me`)
            .then(response => {
                return response.data
            });
    },
};