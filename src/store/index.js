import {createStore} from 'vuex'
import GameService from "@/services/GameService";
import AuthService from "@/services/AuthService";
import notifications from "@/store/modules/notifications";

export default createStore({
    state: {
        games: [],
        gameData: [],
        user: null
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
        }
    },
    actions: {
        loadGames({commit}) {
            GameService.getGames().then(res => {
                commit('SET_GAMES', res.data.data)
            })
        },
        loadGameData({commit}, id) {
            GameService.getGameData(id).then(res => {
                commit('SET_GAME_DATA', res.data.data)
            })
        },
        registerUser({commit, dispatch}, userData) {
            return AuthService.postSignUp(userData)
                .then(res => {
                    commit('SET_USER', res.data.data);
                    AuthService.lsSet(res.data.data.api_token);
                })
                .catch(error => {
                    dispatch('addNotification', {message: 'error', error: true})
                    throw(error);
                })
        },
        loginUser({ commit }, userData) {
            return AuthService.postSignIn(userData)
                .then(res => {
                    commit('SET_USER', res.data.data);
                    AuthService.lsSet(res.data.data.api_token);
                })
                .catch(error => {
                    throw(error);
                })
        },
        getUser({ commit, state }) {
            return AuthService.getUser(AuthService.lsGet())
                .then((res) => {
                    commit('SET_USER', res.data.data)
                })
                .catch(error => {
                    commit('SET_USER', null)
                })
        }
    },
    modules: { notifications }
})
