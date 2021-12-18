import { apiClient } from '@/services/apiClient';

export default {
    getGames() {
        return apiClient.get('/games');
    },
    getGameData(id) {
        return apiClient.get(`/game/${id}`);
    },

}
