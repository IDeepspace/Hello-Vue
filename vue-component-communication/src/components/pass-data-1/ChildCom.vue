<template>
  <div>
    <div class='list'>
      <ul>
        <li v-for='item in list' :key='item'>{{ item }}</li>
      </ul>
    </div>
    <div class='buttons'>
      <button @click='run'>执行父组件的方法</button>
      <button @click='getParent()'>获取父组件的数据和方法</button>
      <button @click='submit("我是子组件传递给父组件的数据")'>子组件触发更改父组件的数据</button>
      <button @click='addItem("我是通过子组件props方式传递给父组件的数据")'>子组件触发更改父组件的数据-2</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getParent() {
      alert(this.home); // eslint-disable-line
      alert(this.home.list); // eslint-disable-line
      alert(this.home.run); // eslint-disable-line
      alert(this.home.addItem); // eslint-disable-line
    },
    submit(text) {
      this.$emit('addItem', text);
    },
  },
  props: ['list', 'run', 'home', 'addItem'],
};
</script>

<style lang="postcss" scoped>
.list {
  margin-bottom: 10px;
}
li {
  list-style: none;
  margin: 10px 0;
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
