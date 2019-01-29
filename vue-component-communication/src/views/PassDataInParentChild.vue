<template>
  <div class='hello'>
    <ParentCom/>
  </div>
</template>

<script>
import ParentCom from '../components/pass-data-1/ParentCom';

export default {
  name: 'HelloWorld',
  components: { ParentCom },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>
