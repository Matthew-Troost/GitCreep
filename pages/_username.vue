<template>
  <div>
    <section class="section">
      <!-- <b-input
        ref="username"
        v-model="username"
        class="username-input"
        placeholder="username"
        @keyup.enter.native="verifyUser"
      ></b-input> -->
    </section>
    <section>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification">
                <p class="title">Vertical...</p>
                <p class="subtitle">Top tile</p>
              </article>
              <article class="tile is-child notification">
                <p class="title">...tiles</p>
                <p class="subtitle">Bottom tile</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification">
                <p class="title">Middle tile</p>
                <p class="subtitle">With an image</p>
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png" />
                </figure>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <p class="title">Wide tile</p>
              <p class="subtitle">Aligned with the right tile</p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <div class="content">
              <p class="title">Tall tile</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                <!-- Content -->
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getUser } from '@/apollo/github/queries.gql'

export default {
  data() {
    return {
      loading: true,
      userVerified: false,
      repos: []
    }
  },
  computed: {
    ...mapState({
      selectedUser: (state) => state.user.currentUser
    })
  },
  watch: {
    userVerified(value) {
      // if (value) this.getRepos()
    }
  },
  created() {
    if (!this.selectedUser)
      this.$apollo
        .query({
          query: getUser,
          variables: { username: this.$route.params.username }
        })
        .then(({ data }) => {
          this.setUser(data)
          this.userVerified = true
        })
        .catch((error) => {
          console.log(error)
        })
    else this.userVerified = true
  },
  methods: {
    ...mapMutations({
      setUser: 'user/setCurrentUser'
    })
  }
  // apollo: {
  //   user() {
  //     return {
  //       query: getUser,
  //       variables() {
  //         return { username: 'Matthew-Troost' }
  //       }
  //     }
  //   }
  // }
}
</script>
