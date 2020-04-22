import axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    timeout: 15000,
    headers: {"API-KEY": '0e63aab2-f156-445a-b8a0-ab2fbb0070ad'},
    withCredentials: true
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 20) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data   /* amboxjy chenq veradardsznum ayl menak data */
            });
    },
    followUser(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    unFollowUser(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then(response => {
                return response.data
            });
    }
};