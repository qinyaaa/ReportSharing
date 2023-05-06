<template>
  <div class="header">
    <h1>实时检测大屏</h1>
    <div id="showTime"></div>
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical"
      background-color="#fff0"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      mode="horizontal"
    >
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
        <span> {{ item.navItem }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  created() {
    this.myClock();
  },
  data() {
    return {
      navList: [
        {
          name: "/main",
          navItem: "首页(实时检测)",
        },
        {
          name: "/dataV",
          navItem: "报告(datav)",
        },
      ],
    };
  },
  methods: {
    // 右上角实时显示时间
    myClock() {
      setInterval(function () {
        var date = new Date();
        //date.getDay()拿到的值是阿拉伯数字，将他换成汉字
        var week = date.getDay();
        switch (week) {
          case 1:
            week = "星期一";
            break;
          case 2:
            week = "星期二";
            break;
          case 3:
            week = "星期三";
            break;
          case 4:
            week = "星期四";
            break;
          case 5:
            week = "星期五";
            break;
          case 6:
            week = "星期六";
            break;
          case 0:
            week = "星期日";
            break;
        }
        // 时间没有在此处一次性组合完毕是为了方便在 输出时美化
        // 组合年月日
        let y = date.getFullYear();
        let mon = date.getMonth() + 1;
        let d = date.getDate();
        mon = mon < 10 ? "0" + mon : mon;
        d = d < 10 ? "0" + d : d;
        let ymd = y + "年" + mon + "月" + d + "日";
        // 组合时分秒
        let h = date.getHours();
        let min = date.getMinutes();
        let s = date.getSeconds();
        h = h < 10 ? "0" + h : h;
        min = min < 10 ? "0" + min : min;
        s = s < 10 ? "0" + s : s;
        let hms = h + ":" + min + ":" + s;
        document.getElementById("showTime").innerHTML =
          ymd +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
          hms +
          "&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;" +
          week;
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 100%;
  position: relative;
  h1 {
    position: relative;
    top: 15px;
    width: 400px;
    margin: 0 auto;
    color: rgb(255, 255, 255);
    font-size: 36px;
    text-align: center;
  }
  /deep/.el-menu.el-menu--horizontal {
    position: absolute;
    top: 25px;
    left: 40px;
    .el-menu-item {
      height: 40px !important;
      line-height: 40px;
    }
  }
  #showTime {
    position: absolute;
    top: 40px;
    right: 40px;
    color: #eee;
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
