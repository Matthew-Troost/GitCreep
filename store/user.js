export const state = () => ({
  currentUser: null
})

export const mutations = {
  setCurrentUser(state, value) {
    state.currentUser = value
  }
}
