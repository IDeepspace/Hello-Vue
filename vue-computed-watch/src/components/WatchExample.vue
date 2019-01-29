<template>
  <div v-show='show'>
    <img src='https://img.alicdn.com/simba/img/TB14sYVQXXXXXc1XXXXSutbFXXX.jpg' alt>
    <img src='//img.alicdn.com/tfs/TB1iZ6EQXXXXXcsXFXXXXXXXXXX-520-280.jpg_q90_.webp' alt>
    <img src='https://img.alicdn.com/simba/img/TB1C0dOPXXXXXarapXXSutbFXXX.jpg' alt>
    <img src='//img.alicdn.com/tfs/TB1iZ6EQXXXXXcsXFXXXXXXXXXX-520-280.jpg_q90_.webp' alt>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      show: false,
    };
  },
  mounted() {
    const imgs = document.querySelectorAll('img');
    console.log(imgs); // eslint-disable-line
    Array.from(imgs).forEach((item) => {
      const img = new Image();
      img.onload = () => {
        this.count = this.count + 1;
      };
      img.src = item.getAttribute('src');
    });
  },
  watch: {
    count(val, oldval) { // eslint-disable-line
      if (val === 4) {
        this.show = true;
        alert('加载完毕'); // eslint-disable-line
        // 然后可以对后台发送一些ajax操作
      }
    },
  },
};
</script>
