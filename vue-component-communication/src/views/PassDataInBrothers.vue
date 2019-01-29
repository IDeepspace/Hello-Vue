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
