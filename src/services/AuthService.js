import { apiClient } from '@/services/apiClient';

export default {
    postSignUp(userData) {
        return apiClient.post('/register', userData)
    },
    postSignIn(userData) {
        return apiClient.post('/login', userData)
    },
    getUser(token) {
        return apiClient.get('/user', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    },
    lsSet(token) {
        localStorage.setItem('api_token', token)
    },
    lsGet() {
        return localStorage.getItem('api_token')
    }
}