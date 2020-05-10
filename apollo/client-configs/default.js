export default function(context) {
  return {
    httpEndpoint: 'https://api.github.com/graphql',
    httpLinkOptions: {
      headers: {
        'User-Agent': 'Matthew-Troost',
        Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`
      }
    }
  }
}
