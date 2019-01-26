<!--
<template>
  <div class='container'>
    <h2>父组件</h2>
    <button @click='stopCommunicate' v-if='showButton'>停止通讯</button>
    <div class='card-body'>
      <brother-card :messageSon='messageson' @brotherSaid='messageDaughter' class='card-brother'></brother-card>
      <sister-card :messageDaughter='messagedaughter' @sisterSaid='messageSon' class='card-sister'></sister-card>
    </div>
  </div>
</template>

<script>
import BrotherCard from './BrotherCard';
import SisterCard from './SisterCard';

export default {
  name: 'ParentCard',
  data() {
    return {
      messagedaughter: '',
      messageson: '',
    };
  },
  components: { BrotherCard, SisterCard },
  methods: {
    messageDaughter(message) {
      this.messagedaughter = message;
    },
    messageSon(message) {
      this.messageson = message;
    },
    showButton() {
      return this.messagedaughter && this.messageson;
    },
    stopCommunicate() {
      this.messagedaughter = '';
      this.messageson = '';
    },
  },
};
</script>
-->

<!-- 通过EventHub进行兄弟间组件通讯 -->
<template>
  <div class='container'>
    <h2>父组件</h2>
    <div class='card-body'>
      <brother-card class='card-brother'></brother-card>
      <sister-card class='card-sister'></sister-card>
    </div>
  </div>
</template>

<script>
import BrotherCard from './BrotherCard';
import SisterCard from './SisterCard';

export default {
  name: 'ParentCard',
  components: {
    'brother-card': BrotherCard,
    'sister-card': SisterCard,
  },
};
</script>

<style scoped>
.container {
  width: 70%;
  margin: 10px auto;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(50, 50, 93, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.07);
  padding: 30px;
}
.card-body {
  display: flex;
  justify-content: center;
}
.card-brother,
.card-sister {
  margin: 0 50px;
}
</style>
