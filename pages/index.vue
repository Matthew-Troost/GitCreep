<template>
  <div class="_page-center-container">
    <div class="_page-center">
      <img :src="logo" width="200" />
      <h2 class="_name">GIT<span class="_purple">CREEP</span></h2>
      <p class="font-light">
        A quick and detailed view of a GitHub user's profile
      </p>
      <b-input
        ref="username"
        v-model="username"
        class="_username-input"
        placeholder="username"
        @keyup.enter.native="fetchUser"
      ></b-input>
    </div>
  </div>
</template>
<script>
import logo from '@/assets/images/logo.svg'
export default {
  data() {
    return {
      username: '',
      logo
    }
  },
  methods: {
    loading() {
      this.$buefy.loading.open({
        container: this.$refs.username.$el
      })
    },
    fetchUser() {
      this.loading()
      this.$githubAPI
        .$get(`/users/${this.username}`)
        .then((user) => {
          // save to vuex
          console.log(user)
        })
        .catch((error) => {
          if (error.response.status === 404) {
            // display not found
          } else {
            // display there was an issue
          }
        })
    }
  }
}
</script>

<style scoped>
._page-center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
._page-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
}
._name {
  letter-spacing: 0.58em;
  margin-right: -0.58em;
  margin-top: 0.7em;
}
._purple {
  color: #886ada;
}
._username-input {
  border-radius: 10px;
}
</style>
<style>
._username-input input {
  font-size: 3rem;
  padding: 15px 45px 15px 30px;
  font-family: 'Source Code Pro', 'SFMono-Regular', Consolas, 'Liberation Mono',
    Menlo, Courier, monospace;
  font-weight: 300;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: -0.7px;
  border-radius: 10px;
  background: transparent;
  color: white;
  text-align: center;
  border-color: #6b6b6b;
}
._username-input .loading-overlay .loading-background {
  border-radius: 10px;
}
</style>
