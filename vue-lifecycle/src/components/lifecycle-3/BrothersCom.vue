<template>
  <div class='container'>
    <h3>兄弟组件的生命周期（打开控制台查看）</h3>
    <div>兄弟1
      <single compName='cihld1'></single>
    </div>
    <div>兄弟2
      <single compName='child2'></single>
    </div>
    <div>
      <p>兄弟两个的父亲</p>
      <button @click='dataVar += 1'>更新 {{dataVar}}</button>
      <button @click='handleDestroy'>销毁</button>
    </div>
  </div>
</template>

<script>
import Single from './Single';

const COMPONENT_NAME = 'parent';
export default {
  data() {
    return {
      dataVar: 1,
    };
  },
  components: {
    single: Single,
  },
  beforeCreate() {
    console.log(`--${COMPONENT_NAME}--beforeCreate`); // eslint-disable-line
  },
  created() {
    console.log(`--${COMPONENT_NAME}--created`); // eslint-disable-line
  },
  beforeMount() {
    console.log(`--${COMPONENT_NAME}--beforeMount`); // eslint-disable-line
  },
  mounted() {
    console.log(`--${COMPONENT_NAME}--mounted`); // eslint-disable-line
  },
  beforeUpdate() {
    console.log(`--${COMPONENT_NAME}--beforeUpdate`); // eslint-disable-line
  },
  updated() {
    console.log(`--${COMPONENT_NAME}--updated`); // eslint-disable-line
  },
  beforeDestroy() {
    console.log(`--${COMPONENT_NAME}--beforeDestroy`); // eslint-disable-line
  },
  destroyed() {
    console.log(`--${COMPONENT_NAME}--destroyed`); // eslint-disable-line
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
  margin: 5px auto;
  background-color: aliceblue;
  padding: 50px;
  text-align: center;
}
button {
  padding: 6px;
  background-color: #2196f3;
  border: none;
  color: white;
  font-size: 16px;
  margin: 5px;
}
</style>
