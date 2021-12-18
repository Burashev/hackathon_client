import {createStore} from 'vuex'
import GameService from "@/services/GameService";
import AuthService from "@/services/AuthService";
import notifications from "@/store/modules/notifications";

export default createStore({
    state: {
        games: [],
        gameData: [],
        user: null,
        statistic: []
    },
    mutations: {
        SET_GAMES(state, games) {
            state.games = games;
        },
        SET_GAME_DATA(state, data) {
            state.gameData = data;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_STATISTIC(state, statistic) {
            state.statistic = statistic
        }
    },
    actions: {
        loadGames({commit}) {
            GameService.getGames()
                .then(res => {
                    commit('SET_GAMES', res.data.data)
                })
        },
        loadGameData({commit}, id) {
            GameService.getGameData(id)
                .then(res => {
                    commit('SET_GAME_DATA', res.data.data)
                })
        },
        registerUser({commit, dispatch}, userData) {
            return AuthService.postSignUp(userData)
                .then(res => {
                    commit('SET_USER', res.data.data);
                    AuthService.lsSet(res.data.data.api_token);
                    dispatch('addNotification', {message: 'Успешная регистрация'})
                })
                .catch(error => {
                    dispatch('addNotification', {message: 'Ошибка регистрации', error: true})
                    throw(error);
                })
        },
        loginUser({commit, dispatch}, userData) {
            return AuthService.postSignIn(userData)
                .then(res => {
                    commit('SET_USER', res.data.data);
                    AuthService.lsSet(res.data.data.api_token);
                    dispatch('addNotification', {message: 'Успешный вход'})
                })
                .catch(error => {
                    dispatch('addNotification', {message: 'Вход не выполнен. Проверьте данные', error: true})
                    throw(error);
                })
        },
        getUser({commit, state}) {
            if (!AuthService.lsGet()) {
                commit('SET_USER', null);
                return null;
            }
            return AuthService.getUser(AuthService.lsGet())
                .then((res) => {
                    commit('SET_USER', res.data.data);
                })
                .catch(error => {
                    AuthService.lsClear();
                    commit('SET_USER', null);
                })
        },
        logoutUser({commit}) {
            commit('SET_USER', null);
            AuthService.lsClear();
        },
        changeUserFullname({commit}, fullname) {
            AuthService.changeFullname(AuthService.lsGet(), fullname)
                .then(res => {

                })
                .catch(error => {

                })
        },
        addUserStatistic({commit}, statistic) {
            GameService.addGameStatistic(AuthService.lsGet(), statistic)
                .then(res => {

                })
                .catch(error => {

                })
        },
        getUserStatistic({commit}) {
            GameService.getUserStatistic(AuthService.lsGet())
                .then(res => {
                    commit('SET_STATISTIC', res.data.data)
                })
                .catch(error => {

                })
        }
    },
    getters: {
        isAuth(state) {
            return !!AuthService.lsGet();
        }
    },
    modules: {notifications}
})
