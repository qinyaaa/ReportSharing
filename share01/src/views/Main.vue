<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="18" class="grid-left">
        <div class="con1 attribute">
          <div class="att1">
            姓名<span>{{ atts.name }}</span>
          </div>
          <div class="att2">
            部门<span>{{ atts.department }}</span>
          </div>
          <div class="att3">
            工号<span>{{ atts.id }}</span>
          </div>
          <div class="att4">
            性别<span>{{ atts.sex }}</span>
          </div>
        </div>
        <div class="con2 img">
          <img :src="imgSrc1" alt />
          <img :src="imgSrc2" alt />
        </div>
      </el-col>
      <el-col :span="6" class="grid-right">
        <div class="con3">
          <div class="title">头像</div>
          <img src="../assets/portrait.jpg" alt="" />
        </div>
        <div class="con4">
          <p>设备检测</p>
          <div class="det" v-for="item in detections">
            <div>
              <i class="el-icon-check" v-show="item.state"></i>
              <i class="el-icon-close" v-show="!item.state"></i>
              {{ item.name }} {{ item.value }}
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      atts: {
        name: "周伯通",
        department: "采购部",
        id: "2300230",
        sex: "男",
      },
      detections: [
        {
          name: "体温",
          value: "36.5℃",
          state: true,
        },
        {
          name: "酒精",
          value: "432/100",
          state: true,
        },
        {
          name: "头盔",
          state: false,
        },
        {
          name: "毛巾",
          state: false,
        },
        {
          name: "胶鞋",
          state: false,
        },
        {
          name: "矿灯",
          state: false,
        },
        {
          name: "自救器",
          state: false,
        },
      ],
      imgSrc1: "",
      imgSrc2: "",
    };
  },
  mounted() {
    this.getImgSrc();
  },
  methods: {
    getImgSrc() {
      // 图片地址
      this.imgSrc1 = "***";
      this.imgSrc2 = "***";
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 98%;
  height: 99%;
  margin: 0 auto;
  color: #eee;
  .el-row,
  .el-col {
    height: 100%;
  }
  .grid-left {
    .con1 {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 5px;
      height: 9%;
      font-size: 34px;
      font-weight: 400;
      border: 1px solid #213eb3;
      span {
        display: inline-block;
        width: 200px;
        border: 3px solid #213eb3;
        padding: 10px;
      }
    }
    .con2 {
      height: 90%;
      border: 1px solid #213eb3;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      img {
        width: 688px;
        height: 387px;
      }
    }
  }
  .grid-right {
    .con3 {
      // display: flex;
      // flex-direction: column;
      // justify-content: space-between;
      height: 24%;
      margin-bottom: 5px;
      border: 1px solid #213eb3;
      .title {
        text-align: center;
        background: top center no-repeat url(../assets/titlebg.png);
      }
      img {
        display: block;
        width: 130px;
        height: 182px;
        margin: 0 auto;
      }
    }
    .con4 {
      height: 75%;
      border: 1px solid #213eb3;

      .det {
        margin: 15px 80px 0 80px;
        padding: 10px;
        font-size: 34px;
        text-align: left;
        border: 2px solid #213eb3;
        .el-icon-check {
          color: greenyellow;
        }
        .el-icon-close {
          color: red;
        }
      }
    }
  }
}
</style>
