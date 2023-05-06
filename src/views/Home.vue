<template>
  <div class="home">
    <el-container>
      <el-header>
        <v-header></v-header>
      </el-header>
      <el-main style="overflow: hidden">
        <!-- <v-main></v-main> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import vHeader from "../components/Header.vue";
// import vMain from "./Main.vue";
export default {
  name: "home",
  components: {
    vHeader,
    // vMain,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.home {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: 0% 0%/100% no-repeat url("../assets/bg.jpg");
  // background-color: #eee;
  .el-container {
    min-width: 1920px;
    height: 100%;
    .el-header {
      height: 8% !important;
      padding: 0;
    }
    .el-main {
      width: 100%;
      height: 92% !important;
      padding: 0;
    }
  }
}
</style>
