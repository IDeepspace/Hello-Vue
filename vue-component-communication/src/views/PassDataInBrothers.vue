<template>
  <div class='hello'>
    <ParentCard/>
  </div>
</template>

<script>
import ParentCard from '../components/pass-data-2/ParentCard';

export default {
  components: { ParentCard },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
