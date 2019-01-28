<template>
  <div class='container'>
    <button @click='dataVar += 1'>更新 {{dataVar}}</button>
    <button @click='handleDestroy'>销毁</button>
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
    console.log(`--此时data未初始化--beforeCreate`); // eslint-disable-line
  },
  created() {
    console.log(`--${this.compName}--created`); // eslint-disable-line
  },
  beforeMount() {
    console.log(`--${this.compName}--beforeMount`); // eslint-disable-line
  },
  mounted() {
    console.log(`--${this.compName}--mounted`); // eslint-disable-line
  },
  beforeUpdate() {
    console.log(`--${this.compName}--beforeUpdate`); // eslint-disable-line
  },
  updated() {
    console.log(`--${this.compName}--updated`); // eslint-disable-line
  },
  beforeDestroy() {
    console.log(`--${this.compName}--beforeDestroy`); // eslint-disable-line
  },
  destroyed() {
    console.log(`--${this.compName}--destroyed`); // eslint-disable-line
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
  padding: 10px;
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
