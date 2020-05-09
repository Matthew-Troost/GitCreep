export default function({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const githubAPI = $axios.create()

  githubAPI.setBaseURL('https://api.github.com')
  githubAPI.setToken(
    `${process.env.GITHUB_USERNAME}:${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`
  )

  // Inject to context as $githubAPI
  inject('githubAPI', githubAPI)
}
