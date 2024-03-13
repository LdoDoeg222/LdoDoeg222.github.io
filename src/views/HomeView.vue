<script setup lang="ts">
const userName = ref('Dy镝')
</script>

<template>
  <main id="home">
    <div class="intro">
      <h1>{{ userName }} 的博客</h1>
      <RouterLink to="/user-access/login">UA/Login</RouterLink>
    </div>
    <div class="links">或许可以看看我活动的区域：</div>
  </main>
</template>

<style scoped>
#home {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
