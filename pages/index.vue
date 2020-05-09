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
        @keyup.enter.native="verifyUser"
      ></b-input>
      <small class="_error-message"
        ><b>{{ errormessage }}</b></small
      >
    </div>
  </div>
</template>
<script>
import github from '@/mixins/github'
import logo from '@/assets/images/logo.svg'

export default {
  mixins: [github],
  data() {
    return {
      username: '',
      errormessage: '',
      loadingComponent: null,
      logo
    }
  },
  watch: {
    username() {
      if (this.errormessage) this.errormessage = ''
    }
  },
  methods: {
    loading() {
      this.loadingComponent = this.$buefy.loading.open({
        container: this.$refs.username.$el
      })
    },
    verifyUser() {
      this.loading()
      this.fetchUser(this.username)
        .then(() => this.$router.push(`/${this.username.toLowerCase()}`))
        .catch((error) => {
          if (error.response.status === 404)
            this.errormessage = 'User does not exist'
          else
            this.errormessage =
              'A creepy error occured - please try again later'

          this.loadingComponent.close()
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
._error-message {
  color: #cc4e4e;
}
</style>
<style>
._username-input input {
  font-size: 3rem;
  padding: 15px 30px 15px 30px;
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
