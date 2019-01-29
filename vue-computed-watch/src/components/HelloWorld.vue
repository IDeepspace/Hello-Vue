<template>
  <div class='hello'>
    <h1>{{ message.split('').reverse().join('') }}</h1>
    <h1>{{ message | reverseString }}</h1>
    <h1>{{ this.reversedMessageMethod() }}</h1>
    <!-- add this -->
    <h1>{{ reversedMessage }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'Welcome to Your Vue.js App',
    };
  },
  filters: {
    reverseString(val) {
      let value = val;
      if (!value) return '';
      value = value.split('').reverse().join('');
      return value;
    },
  },
  // add this
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  },
  methods: {
    reversedMessageMethod() {
      return this.message.split('').reverse().join('');
    },
  },
};
</script>
