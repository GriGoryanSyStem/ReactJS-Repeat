import axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {"API-KEY": '0e63aab2-f156-445a-b8a0-ab2fbb0070ad'},
    withCredentials: true
});

export const usersAPI = {
// --------------------------- Profile Page -------------------------
    getProfileApi(userId){
        return instance.get(`/profile/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getStatusApi(userId){
        return instance.get(`/profile/status/${userId}`)
            .then(response => {
                return response.data
            });
    },
    updateStatusApi(status){
        return instance.put(`/profile/status`, {status:status})
            .then(response => {
                return response.data
            });
    },

// --------------------------- Users Page -------------------------
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
// --------------------------- Auth -------------------------
    authMeApi(){
        return instance.get(`/auth/me`)
            .then(response => {
                return response.data
            });
    },
    loginApi(email,password,rememberMe = false){
        return instance.post(`/auth/login`,{email,password,rememberMe})
            .then(response => {
                return response.data
            });
    },
    logOutApi(){
        return instance.delete(`/auth/login`)
            .then(response => {
                return response.data
            });
    },
};