<template>
  <div class='container'>
    <h3>父子组件的生命周期（打开控制台查看）</h3>
    <child-com :compName='dataVar.toString()'></child-com>
    <button @click='dataVar += 1'>父组件更新 {{dataVar}}</button>
    <button @click='handleDestroy'>父组件销毁</button>
  </div>
</template>

<script>
import ChildCom from './ChildCom';

const COMPONENT_NAME = 'parent';
export default {
  data() {
    return {
      dataVar: 1,
    };
  },
  components: {
    'child-com': ChildCom,
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
  margin: 20px auto;
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
