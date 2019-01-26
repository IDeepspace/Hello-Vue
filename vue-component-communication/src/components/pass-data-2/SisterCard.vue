<!-- 通过父组件进行兄弟组件之间通讯 -->
<!--
<template>
  <div>
    <div>
      <p>我是子组件：Sister</p>
      <button @click='messageBrother'>给哥哥发消息</button>
      <div v-if='messageDaughter' v-html='messageDaughter'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SisterCard',
  props: ['messageDaughter'],
  methods: {
    messageBrother() {
      this.$emit('sisterSaid', 'Hi，哥哥');
    },
  },
};
</script>
-->

<!-- 通过EventHub进行兄弟间组件通讯 -->
<template>
  <div>
    <p>我是Sister组件</p>
    <button @click='messageBrother' class='btn'>给哥哥发消息</button>
    <div v-if='fromBrother' v-html='fromBrother'></div>
  </div>
</template>

<script>
import { eventHub } from '../../main';

export default {
  name: 'SisterCard',
  data: () => ({
    fromBrother: '',
  }),
  methods: {
    messageBrother() {
      eventHub.$emit('sisterSaid', 'Hi，哥哥');
    },
  },
  /* eslint-disable */
  created() {
    eventHub.$on('brotherSaid', message => {
      this.fromBrother = message;
    });
  },
};
</script>
