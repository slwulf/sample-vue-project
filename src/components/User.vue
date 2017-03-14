<template>
  <li class="user">
    {{ user.name }} - {{ user.email }}
  </li>
</template>

<script>
export default {
  name: 'user',
  props: ['user']
}
</script>

<style scoped lang="scss">
.user {
  background-color: #f0f0f0;
  margin-bottom: 15px;
  padding: 15px;
  list-style: none;

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
