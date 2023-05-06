<template>
  <dv-full-screen-container>
    <div id="app">
      <router-view></router-view>
    </div>
  </dv-full-screen-container>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="less" scoped>
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  // min-height: 900px;
  // overflow-y: hidden;
}
</style>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}
</style>
