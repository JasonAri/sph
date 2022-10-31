<template>
  <div class="type-nav">
    <div class="container">
      <!-- 事件的委派 -->
      <div @mouseleave="leaveHide" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 过渡动画包裹 -->
        <transition name="sort">
          <!-- 分类 -->
          <div class="sort" v-show="isShow">
            <!-- 分类类表 -->
            <div class="all-sort-list2" @click="goSearch">
              <!--一级分类地盘-->
              <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId">
                <h3 :class="{ active: currentIndex == index }" @mouseenter="changeIndex(index)">
                  <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId" href="javascript:;">
                    {{ c1.categoryName }}
                  </a>
                </h3>
                <div class="item-list clearfix" :style="{ display: currentIndex == index ? 'block' : 'none' }">
                  <!--二级分类-->
                  <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">
                          {{ c2.categoryName }}
                        </a>
                      </dt>
                      <dd>
                        <!--三级分类-->
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a :data-categoryName="c2.categoryName">{{ c3.categoryName }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="javascript:void(0)">服装城</a>
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
import { mapState } from 'vuex';
// 按需引入lodash
import throttle from 'lodash/throttle';
export default {
  name: 'TypeNav',
  data() {
    return {
      //利用响应式属性,将来存储用户鼠标进入哪一个一级分类的索引值
      currentIndex: -1,
      isShow: true, //默认显示
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
    // 判断路由
    if (this.$route.path !== '/home') {
      // 若不在home路由下，则隐藏
      this.isShow = false;
    }
  },
  methods: {
    // 鼠标进入显示一级分类的回调
    enterShow() {
      // 非home路由下，移入展示
      if (this.$route.path !== '/home') {
        this.isShow = true;
      }
    },
    // 鼠标离开隐藏一级分类的回调
    leaveHide() {
      this.currentIndex = -1;
      // 非home路由下，离开隐藏
      if (this.$route.path !== '/home') {
        this.isShow = false;
      }
    },
    // 鼠标进入一级分类的回调
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    // 进行路由跳转的方法
    goSearch(event) {
      let element = event.target;
      // dataset属性可以获取当前节点的自定义属性与属性值
      let { categoryname, category1id, category2id, category3id } = element.dataset;
      if (categoryname) {
        // 整理路由跳转的参数
        let location = { name: 'search' };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1id = category1id;
        } else if (category2id) {
          query.category2id = category2id;
        } else if (category3id) {
          query.category3id = category3id;
        }
        location.query = query;
        this.$router.push(location);
      }
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
      transition: all 0.5s;
      overflow: hidden;
    }
    .sort-enter-to {
      height: 461px;
    }
    /*过渡动画:商品分类 离开阶段*/
    .sort-leave {
      height: 461px;
    }
    .sort-leave-active {
      transition: all 0.5s;
      overflow: hidden;
    }
    .sort-leave-to {
      height: 0;
    }
  }
}
</style>
