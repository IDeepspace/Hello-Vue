<template>
  <div class='welcome'>
    <router-link to='/singe-lifecycle' class='link'>
      <span>单组件的生命周期 》</span>
    </router-link>
    <router-link to='/parent-child-lifecycle' class='link'>
      <span>父子组件的生命周期 》</span>
    </router-link>
    <router-link to='/brother-lifecycle' class='link'>
      <span>兄弟组件的生命周期 》</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  text-align: center;
  margin: 100px;
  font-weight: normal;
}
.link {
  text-decoration: none !important;
  padding: 10px 20px;
  background-color: #3ab981;
  color: white;
  margin: 10px 10px 30px;
  display: inline-block;
}
</style>
