import axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {"API-KEY": '0e63aab2-f156-445a-b8a0-ab2fbb0070ad'},
    withCredentials: true
});

export const authAPI = {
    authMeApi() {
        return instance.get(`/auth/me`)
            .then(response => {
                return response.data
            });
    },
    loginApi(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            });
    },
    logOutApi() {
        return instance.delete(`/auth/login`)
            .then(response => {
                return response.data
            });
    },
}

export const profileAPI = {
    getProfileApi(userId) {
        return instance.get(`/profile/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getStatusApi(userId) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => {
                return response.data
            });
    },
    updateStatusApi(status) {
        return instance.put(`/profile/status`, {status: status})
            .then(response => {
                return response.data
            });
    },
    sendPhotoApi(file) {
        let formData = new FormData();
        formData.append('image', file)
        return instance.put(`/profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
            .then(response => {
                return response.data
            });
    },

    sendProfileFormApi(profileForm) {
        return instance.put(`/profile`, profileForm) // !!!error!!! put(`/profile`, {profileForm})
            .then(response => {
                return response.data
            });
    },
}

export const usersAPI = {
    getUsersApi(currentPage, pageSize, friendsPage) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}&friend=${friendsPage}`)
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
};


