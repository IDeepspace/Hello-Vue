<template>
  <div>
    <ChildCom :list='list' :run='run' :home='this' @addItem='addItem' :addItem='addItem'></ChildCom>
  </div>
</template>

<script>
import ChildCom from './ChildCom';

export default {
  data() {
    return {
      list: ['我是父组件里面的数据', '我来自父组件'],
    };
  },
  components: {
    ChildCom,
  },
  methods: {
    run() {
      alert('我是父组件里面的方法'); // eslint-disable-line
    },
    addItem(item) {
      this.list.push(item);
    },
  },
};
</script>
