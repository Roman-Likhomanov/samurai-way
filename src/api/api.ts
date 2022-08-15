import React from 'react';
import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e7ad35f3-1018-43ff-8616-df879477bca0'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=
        ${currentPage} & count=${pageSize}`)
            .then(response => response.data)
    },
    getUnfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    getFollow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}






