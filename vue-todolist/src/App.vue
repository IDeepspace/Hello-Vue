<template>
  <div id='app'>
    <img src='./assets/logo.png'>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="postcss" scoped>
#app {
  text-align: center;
  display: block;
}
</style>
