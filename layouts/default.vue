<template>
  <div>
    <section class="main-content">
      <div class="container is-10">
        <nuxt />
      </div>
    </section>
    <footer class="footer">
      <div class="columns">
        <div class="column is-two-thirds">
          Buy me a coffee
        </div>
        <div class="column">
          <a href="https://github.com/Matthew-Troost/gitcreep" target="_blank">
            <img :src="githubLogo" class="_github" />
            <small>@Matthew-Troost</small>
          </a>
          <hr />
          <a href="https://heroku.com" target="_blank">
            <img :src="herokuLogo" class="_heroku" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import herokuLogo from '@/assets/images/built-on-heroku-light.svg'
import githubLogo from '@/assets/images/GitHub-Mark-Light.png'

export default {
  data() {
    return {
      herokuLogo,
      githubLogo
    }
  }
}
</script>
<style scoped>
.main-content {
  min-height: 100vh;
  background-color: #32363b;
}
.footer {
  background-color: #222;
  color: #9aa1aa;
}
.footer .columns {
  max-width: 1000px;
  margin: auto;
}
._heroku {
  max-width: 250px;
}
._github {
  max-width: 32px;
}
hr {
  background-color: #32363b;
}
</style>
