<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="18" class="grid-left">
        <div class="con1 attribute">
          <dv-border-box-1>
            <dv-decoration-9 style="width: 150px; height: 150px">
              66%
            </dv-decoration-9>
            <dv-scroll-board
              :config="config"
              style="width: 500px; height: 220px"
            />
          </dv-border-box-1>
        </div>
        <div class="con2">
          <div class="dv">
            <dv-decoration-12
              style="width: 150px; height: 150px"
              class="radar"
            />
          </div>
          <div class="img">
            <dv-border-box-6 class="img-border">
              <!-- <img :src="imgSrc1" alt /> -->
            </dv-border-box-6>
            <dv-border-box-7 class="img-border">
              <!-- <img :src="imgSrc2" alt /> -->
            </dv-border-box-7>
          </div>
        </div>
      </el-col>
      <el-col :span="6" class="grid-right">
        <div class="con3">
          <dv-border-box-11 title="头像">
            <img src="../assets/portrait.jpg" alt="" />
          </dv-border-box-11>
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
      config: {
        header: ["姓名", "部门", "工号", "性别"],
        data: [
          ["行1列1", "行1列2", "行1列3", "男"],
          ["行2列1", "行2列2", "行2列3"],
          ["行3列1", "行3列2", "行3列3"],
          ["行4列1", "行4列2", "行4列3"],
          ["行5列1", "行5列2", "行5列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行7列1", "行7列2", "行7列3"],
          ["行8列1", "行8列2", "行8列3"],
          ["行9列1", "行9列2", "行9列3"],
          ["行10列1", "行10列2", "行10列3"],
        ],
        rowNum: 4,
      },
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
      height: 24%;
      margin-bottom: 5px;
      /deep/.border-box-content {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 30px;
        font-weight: 400;
        .dv-scroll-board {
          height: 200px !important;
        }
      }
    }
    .con2 {
      height: 75%;
      border: 1px solid #213eb3;
      // .radar {
      //   position: absolute;
      //   top: 12%;
      // }
      .dv {
        height: 30%;
      }
      .img,
      .dv {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
      .img {
        width: 100%;
        height: 60%;
        .img-border {
          // width: 50%;
          // height: 100%;
          img {
            width: 688px;
            height: 387px;
          }
        }
      }
    }
  }
  .grid-right {
    .con3 {
      height: 24%;
      margin-bottom: 5px;
      // .title {
      //   text-align: center;
      //   background: top center no-repeat url(../assets/titlebg.png);
      // }
      /deep/.border-box-content {
        display: flex;
        justify-content: center;
        img {
          position: absolute;
          top: 60px;
          display: block;
          height: 65%;
          // width: 130px;
          // height: 182px;
          // margin: 0 auto;
        }
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
.con1,
.con2,
.con3,
.con4 {
  animation: showCon 1s linear;
}
@keyframes showCon {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    transform: translateY(-50%);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
