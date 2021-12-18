import { createStore } from 'vuex'
import GameService from "@/services/GameService";

export default createStore({
  state: {
    games: [],
    gameData: [],
  },
  mutations: {
    SET_GAMES(state, games) {
      state.games = games;
    },
    SET_GAME_DATA(state, data) {
      state.gameData = data;
    }
  },
  actions: {
    loadGames({ commit }) {
      GameService.getGames().then(res => {
        commit('SET_GAMES', res.data.data)
      })
    },
    loadGameData({ commit }, id) {
      GameService.getGameData(1).then(res => {
        commit('SET_GAME_DATA', res.data.data)
      })
    }
  },
  modules: {
  }
})
