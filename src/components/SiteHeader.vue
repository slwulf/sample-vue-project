<template>
  <div class="header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'site-header',
  data () {
    return {
      title: 'sample-project'
    }
  }
}
</script>

<style scoped>
h1 {
  color: #1ea7d2;
}

.header {
  width: 100%;
  padding: 20px 30px;
  background-color: #f0f0f0;
}
</style>
