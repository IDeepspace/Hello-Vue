<template>
  <div>
    <textarea v-model='content' :maxlength='totalcount'></textarea>
    <p>你还可以输入{{reduceCount}}字</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalcount: 200, // 总共只给输入200字
      content: '',
    };
  },
  computed: {
    reduceCount() {
      return this.totalcount - this.content.length;
    },
  },
};
</script>
