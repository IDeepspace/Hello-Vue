<template>
  <div class='container'>
    <h3>单组件的生命周期（打开控制台查看）</h3>
    <button @click='dataVar += 1'>更新 {{dataVar}}</button>
    <button @click='handleDestroy'>销毁</button>
  </div>
</template>

<script>
const compName = 'single';

export default {
  name: 'SingleComLifecycle',
  data() {
    return {
      dataVar: 1,
    };
  },
  beforeCreate() {
    console.log(`--${compName}--beforeCreate`); // eslint-disable-line
  },
  created() {
    console.log(`--${compName}--created`); // eslint-disable-line
  },
  beforeMount() {
    console.log(`--${compName}--beforeMount`); // eslint-disable-line
  },
  mounted() {
    console.log(`--${compName}--mounted`); // eslint-disable-line
  },
  beforeUpdate() {
    console.log(`--${compName}--beforeUpdate`); // eslint-disable-line
  },
  updated() {
    console.log(`--${compName}--updated`); // eslint-disable-line
  },
  beforeDestroy() {
    console.log(`--${compName}--beforeDestroy`); // eslint-disable-line
  },
  destroyed() {
    console.log(`--${compName}--destroyed`); // eslint-disable-line
  },
  methods: {
    handleDestroy() {
      this.$destroy();
    },
  },
};
</script>


<style lang="postcss" scoped>
.container {
  width: 70%;
  margin: 0 auto;
  background-color: aliceblue;
  padding: 50px;
  text-align: center;
}
button {
  padding: 6px;
  background-color: #35b880;
  border: none;
  color: white;
  font-size: 16px;
  margin: 5px;
}
</style>
