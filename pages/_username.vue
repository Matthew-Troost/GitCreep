<template>
  <div></div>
</template>

<script>
import { mapState } from 'vuex'
import github from '@/mixins/github'

export default {
  mixins: [github],
  data() {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user.currentUser
    })
  },
  created() {
    if (!this.user) {
      this.fetchUser(this.$route.params.username)
        .then(() => (this.loading = false))
        .catch((error) => {
          if (error.response.status === 404)
            this.errormessage = 'User does not exist'
          else
            this.errormessage =
              'A creepy error occured - please try again later'
        })
    } else this.loading = false
  }
}
</script>
