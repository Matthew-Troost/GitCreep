import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      setUser: 'user/setCurrentUser'
    }),
    fetchUser(username) {
      return new Promise((resolve, reject) => {
        this.$githubAPI
          .$get(`/users/${username}`)
          .then((user) => {
            this.setUser(user)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }
}
