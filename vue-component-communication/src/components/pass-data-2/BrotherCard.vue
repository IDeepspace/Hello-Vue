<!-- 通过父组件进行兄弟组件之间通讯 -->
<!--
<template>
  <div>
    <div>
      <p>我是子组件：Brother</p>
      <button @click='messageSister'>给妹妹发消息</button>
      <div v-if='messageSon' v-html='messageSon'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrotherCard',
  props: ['messageSon'],
  methods: {
    messageSister() {
      this.$emit('brotherSaid', 'Hi，妹妹');
    },
  },
};
</script>
-->

<!-- 通过EventHub进行兄弟间组件通讯 -->
<template>
  <div>
    <p>我是Brother组件</p>
    <button @click='messageSister'>给妹妹发消息</button>

    <div v-if='fromSister' v-html='fromSister'></div>
  </div>
</template>

<script>
import { eventHub } from '../../main';

export default {
  name: 'BrotherCard',
  data: () => ({
    fromSister: '',
  }),
  methods: {
    messageSister() {
      eventHub.$emit('brotherSaid', 'Hi，妹妹');
    },
  },
  /* eslint-disable */
  created() {
    eventHub.$on('sisterSaid', message => {
      this.fromSister = message;
    });
  },
};
</script>
