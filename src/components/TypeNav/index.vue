<template>
  <div class="type-nav">
    <div class="container">
      <!-- 事件的委派 -->
      <div @mouseleave="leaveIndex">
        <h2 class="all">全部商品分类</h2>
        <!--商品分类的地方:虽然刚开始的时候商品分类结构在底部,调整到当前位置，但是页面结构没有太大的变化,因为老师们已经把样式搞定了-->
        <div class="sort">
          <div class="all-sort-list2">
            <!--一级分类地盘-->
            <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId">
              <h3 :class="{ active: currentIndex == index }" @mouseenter="changeIndex(index)">
                <a href="javascript:;">{{ c1.categoryName }}</a>
              </h3>
              <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                <!--二级分类-->
                <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                    </dt>
                    <dd>
                      <!--三级分类-->
                      <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                        <a>{{ c3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="javascript:;">服装城</a>
        <a href="javascript:;">美妆馆</a>
        <a href="javascript:;">尚品汇超市</a>
        <a href="javascript:;">全球购</a>
        <a href="javascript:;">闪购</a>
        <a href="javascript:;">团购</a>
        <a href="javascript:;">有趣</a>
        <a href="javascript:;">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 按需引入lodash
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      //利用响应式属性,将来存储用户鼠标进入哪一个一级分类的索引值
      currentIndex: -1,
      show: true, //默认显示
    };
  },
  computed: {
    ...mapState({
      // 右侧需要的是一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
      // 注入一个参数state，其实为大仓库里的数据
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
  mounted() {
    // 通知vuex发请求，获取数据，存储在仓库中
    this.$store.dispatch("categoryList");
  },
  methods: {
    // 鼠标进入一级分类的回调
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    // 鼠标离开xxx的回调
    leaveIndex() {
      this.currentIndex = -1;
    },
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 27px; // 数据增加压缩行高
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }

            &.active {
              background: skyblue;
            }
          }

          .item-list {
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }

    /*过渡动画:商品分类 进入阶段*/
    .sort-enter {
      height: 0px;
    }

    .sort-enter-active {
      transition: all 0.3s;
    }
    .sort-enter-to {
      height: 461px;
    }
  }
}
</style>

