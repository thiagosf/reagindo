export default {
  endpoint: () => {
    return 'http://api.dev.azk.io'
  },
  url: function(path) {
    return `${this.endpoint()}${path}`
  }
}
