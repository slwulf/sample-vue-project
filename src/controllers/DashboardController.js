const baseUrl = 'https://jsonplaceholder.typicode.com'

export default {
  getPosts () {
    return fetch(baseUrl + '/posts')
      .then(body => body.json())
  },
  getUsers() {
    return fetch(baseUrl + '/users')
      .then(body => body.json())
  }
}
