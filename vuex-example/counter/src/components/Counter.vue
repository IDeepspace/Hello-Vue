<template>
  <div class='counter'>
    <button @click='toggle'>show/hide counter</button>
    <div v-if='show'>
      <p>{{ count }}</p>
      <p>
        <button @click='increment'>+</button>
        <button @click='decrement'>-</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    count: state => state.count,
    show: state => state.showCount,
  }),
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
    toggle() {
      this.$store.commit('toggle');
    },
  },
};
</script>
