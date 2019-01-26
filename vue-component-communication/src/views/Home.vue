<template>
  <div class='welcome'>
    <img src='../assets/logo.png'>
    <h1>{{ msg }}</h1>
    <router-link to='/pass-data-in-parent-child' class='link'>
      <span>父子组件之间的数据传递 》</span>
    </router-link>
    <router-link to='/pass-data-in-brothers' class='link'>
      <span>兄弟组件之间的数据传递 》</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
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
