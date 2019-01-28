<template>
  <div>
    <div>父组件传递的props：{{compName}}</div>
    <button @click='dataVar += 1'>子组件更新 {{dataVar}}</button>
    <button @click='handleDestroy'>子组件销毁</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataVar: 1,
    };
  },
  props: {
    compName: {
      type: String,
      default: 'single',
    },
  },
  beforeCreate() {
    console.log(` --此时data未初始化--child--beforeCreate`); // eslint-disable-line
  },
  created() {
    console.log(`--${this.compName}--child--created`); // eslint-disable-line
  },
  beforeMount() {
    console.log(`--${this.compName}--child--beforeMount`); // eslint-disable-line
  },
  mounted() {
    console.log(`--${this.compName}--child--mounted`); // eslint-disable-line
  },
  beforeUpdate() {
    console.log(`--${this.compName}--child--beforeUpdate`); // eslint-disable-line
  },
  updated() {
    console.log(`--${this.compName}--child--updated`); // eslint-disable-line
  },
  beforeDestroy() {
    console.log(`--${this.compName}--child--beforeDestroy`); // eslint-disable-line
  },
  destroyed() {
    console.log(`--${this.compName}--child--destroyed`); // eslint-disable-line
  },
  methods: {
    handleDestroy() {
      this.$destroy();
    },
  },
};
</script>

<style lang="postcss" scoped>
button {
  padding: 6px;
  background-color: #35b880;
  border: none;
  color: white;
  font-size: 16px;
  margin: 5px;
}
</style>
