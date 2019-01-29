<template>
  <div>
    <h1>比赛时间：{{time}}s</h1>
    <h2>直播播报：{{result}}</h2>
    <div class='team'>
      <div>
        <p>中国队进球数：{{team.china}}</p>
        <button @click='team.china++'>点击中国队进一球</button>
      </div>
      <div>
        <p>韩国队进球数：{{team.korea}}</p>
        <button @click='team.korea++'>点击韩国队进一球</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const time = setInterval(() => {
      this.time = this.time + 1;
      if (this.time === 90) {
        clearInterval(time);
      }
    }, 1000);
  },
  data() {
    return {
      time: 0,
      team: {
        china: 0,
        korea: 0,
      },
    };
  },
  // 计算属性
  computed: {
    result() {
      if (this.time < 90) {
        if (this.team.china > this.team.korea) {
          return '中国队领先';
        } else if (this.team.china < this.team.korea) {
          return '韩国队领先';
        }
        return '双方僵持';
      }
      if (this.team.china > this.team.korea) {
        return '中国队赢';
      } else if (this.team.china < this.team.korea) {
        return '韩国队赢';
      }
      return '平局';
    },
  },
  // 监听器
  // watch: {
  //   time(value, oldval) { // eslint-disable-line
  //     if (value < 90) {
  //       if (this.team.china > this.team.korea) {
  //         this.result = '中国队领先';
  //       } else if (this.team.china < this.team.korea) {
  //         this.result = '韩国队领先';
  //       } else {
  //         this.result = '双方僵持';
  //       }
  //     } else if (this.team.china > this.team.korea) {
  //       this.result = '中国队赢';
  //     } else if (this.team.china < this.team.korea) {
  //       this.result = '韩国队赢';
  //     } else {
  //       this.result = '平局';
  //     }
  //   },
  //   team(value, oldval) { // eslint-disable-line
  //     if (this.time < 90) {
  //       if (value.china > value.korea) {
  //         this.result = '中国队领先';
  //       } else if (value.china < value.korea) {
  //         this.result = '韩国队领先';
  //       } else {
  //         this.result = '双方僵持';
  //       }
  //     } else if (value.china > value.korea) {
  //       this.result = '中国队赢';
  //     } else if (value.china < value.korea) {
  //       this.result = '韩国队赢';
  //     } else {
  //       this.result = '平局';
  //     }
  //   },
  // },
};
</script>


<style scoped>
.team {
  display: flex;
  justify-content: center;
}
button {
  padding: 15px 60px;
  outline: none;
  background-color: #27ae60;
  display: block;
  font-size: 1rem;
  color: #fff;
  margin: 10px;
}
</style>
