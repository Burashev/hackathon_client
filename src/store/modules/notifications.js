const state = {
  notifications: []
}

const mutations = {
  ADD_NOTIFICATION(state, notification) {
    state.notifications.push(notification)
  },
  REMOVE_NOTIFICATION(state, notification) {
    state.notifications = state.notifications.filter(
      notif => notif.id !== notification.id
    )
  }
}

const actions = {
  addNotification({ commit, }, {message, error = false}) {
    const notification = {
      message,
      error,
      id: Date.now()
    }
    commit('ADD_NOTIFICATION', notification)
    setTimeout(() => {
      commit('REMOVE_NOTIFICATION', notification)
    }, 5000)
  }
}

export default {
  state,
  mutations,
  actions
}