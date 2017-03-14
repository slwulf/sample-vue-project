<template>
  <li class="post">
    <strong>{{ post.title }}</strong>
    <p>{{ post.body }}</p>
  </li>
</template>

<script>
export default {
  name: 'post',
  props: ['post']
}
</script>

<style scoped lang="scss">
.post {
  background-color: #f0f0f0;
  margin-bottom: 15px;
  padding: 15px;
  list-style: none;

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
