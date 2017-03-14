<template>
  <div class="dashboard">
    <div class="users">
      <h3>Users</h3>
      <ul>
        <user v-for="user in users"
              :user="user"
              :key="user.id">
        </user>
      </ul>
    </div>

    <div class="posts">
      <h3>Posts</h3>
      <ul>
        <post v-for="post in posts"
              :post="post"
              :key="post.id">
        </post>
      </ul>
    </div>
  </div>
</template>

<script>
import dashboard from '@/controllers/DashboardController'

export default {
  name: 'dashboard',
  data () {
    return {
      users: [],
      posts: []
    }
  },
  created () {
    const self = this
    dashboard.getUsers()
      .then(users => self.users = users)

    dashboard.getPosts()
      .then(posts => posts.filter(firstTen))
      .then(posts => self.posts = posts)
  }
}

function firstTen(post) {
  return post.id <= 10
}
</script>

<style scope lang="scss">
h3 {
  color: #333;
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

.dashboard {
  padding: 20px 30px;
  display: flex;
  justify-content: space-between
}

.users {
  width: 50%;
  margin-right: 10px;
}

.posts {
  width: 50%;
  margin-left: 10px;
}

.users, .posts {
  flex-grow: 1;
}
</style>
