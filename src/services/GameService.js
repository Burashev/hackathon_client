import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getGames() {
        return apiClient.get('/games');
    },
    getGameData(id) {
        return apiClient.get(`/game/${id}`);
    }
}
