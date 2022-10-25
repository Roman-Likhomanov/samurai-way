import React from 'react';
import axios from 'axios';
import {ProfileType} from '../redux/types';

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
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false, captcha: any) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}






