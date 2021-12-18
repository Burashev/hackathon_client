import { apiClient } from '@/services/apiClient';

export default {
    getGames() {
        return apiClient.get('/games');
    },
    getGameData(id) {
        return apiClient.get(`/game/${id}`);
    },
    addGameStatistic(token, statistic) {
        return apiClient.post('/user/statistic/add', statistic, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    },
    getUserStatistic(token) {
        return apiClient.get('/user/statistic', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }
}
