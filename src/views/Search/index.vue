<template>
  <div>
    <!-- 全局组件商品分类 -->
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread:面包屑-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <!-- 面包屑列表 -->
          <ul class="fl sui-tag">
            <!-- 分类 -->
            <li class="with-x" v-if="searchParams.categoryName">
              {{ searchParams.categoryName }}
              <i @click="clearCategoryName">x</i>
            </li>
            <!-- 关键字 -->
            <li class="with-x" v-if="searchParams.keyword">
              {{ searchParams.keyword }}
              <i @click="clearKeyword">x</i>
            </li>
            <!-- 品牌 -->
            <li class="with-x" v-if="searchParams.trademark">
              {{ searchParams.trademark.split(':')[1] }}
              <i @click="clearTrademark">x</i>
            </li>
            <!-- 平台售卖属性 -->
            <li class="with-x" v-for="(attrValue, index) in searchParams.props" :key="index">
              {{ attrValue.split(':')[1] }}
              <i @click="clearAttr(index)">x</i>
            </li>
          </ul>
        </div>

        <SearchSelector />

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <!-- 综合|价格排序的地方 -->
              <ul class="sui-nav">
                <li :class="{ active: isOrderOne }" @click="changeOrder('1')">
                  <a
                    >综合
                    <!-- 如果为acitve元素，则展示排序情况 -->
                    <span v-show="isOrderOne">
                      <!-- 降序 -->
                      <i v-show="isOrderDesc">⬇︎</i>
                      <!-- 升序 -->
                      <i v-show="isOrderAsc">⬆︎</i>
                    </span>
                  </a>
                </li>
                <li><a>销量</a></li>
                <li><a>新品</a></li>
                <li><a>评价</a></li>
                <li :class="{ active: isOrderTwo }" @click="changeOrder('2')">
                  <a
                    >价格
                    <span v-show="isOrderTwo">
                      <!-- 降序 -->
                      <i v-show="isOrderDesc">⬇︎</i>
                      <!-- 升序 -->
                      <i v-show="isOrderAsc">⬆︎</i>
                    </span></a
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- 商品展示区域 -->
          <el-skeleton :loading="loading" animated>
            <template slot="template">
              <div class="goods-list">
                <ul class="yui3-g">
                  <li class="yui3-u-1-5">
                    <div class="list-wrap">
                      <div class="p-img">
                        <el-skeleton-item variant="image" style="width: 215px; height: 255px" />
                      </div>
                      <div class="price">
                        <el-skeleton-item style="width: 50%" />
                      </div>
                      <div class="attr">
                        <el-skeleton-item />
                        <el-skeleton-item />
                      </div>
                      <div class="commit">
                        <el-skeleton-item style="width: 50%" />
                      </div>
                      <div class="operate">
                        <el-skeleton-item style="width: 45%" />
                        <el-skeleton-item style="width: 45%; margin-left: 10%" />
                      </div>
                    </div>
                  </li>
                  <li class="yui3-u-1-5">
                    <div class="list-wrap">
                      <div class="p-img">
                        <el-skeleton-item variant="image" style="width: 215px; height: 255px" />
                      </div>
                      <div class="price">
                        <el-skeleton-item style="width: 50%" />
                      </div>
                      <div class="attr">
                        <el-skeleton-item />
                        <el-skeleton-item />
                      </div>
                      <div class="commit">
                        <el-skeleton-item style="width: 50%" />
                      </div>
                      <div class="operate">
                        <el-skeleton-item style="width: 45%" />
                        <el-skeleton-item style="width: 45%; margin-left: 10%" />
                      </div>
                    </div>
                  </li>
                  <li class="yui3-u-1-5">
                    <div class="list-wrap">
                      <div class="p-img">
                        <el-skeleton-item variant="image" style="width: 215px; height: 255px" />
                      </div>
                      <div class="price">
                        <el-skeleton-item style="width: 50%" />
                      </div>
                      <div class="attr">
                        <el-skeleton-item />
                        <el-skeleton-item />
                      </div>
                      <div class="commit">
                        <el-skeleton-item style="width: 50%" />
                      </div>
                      <div class="operate">
                        <el-skeleton-item style="width: 45%" />
                        <el-skeleton-item style="width: 45%; margin-left: 10%" />
                      </div>
                    </div>
                  </li>
                  <li class="yui3-u-1-5">
                    <div class="list-wrap">
                      <div class="p-img">
                        <el-skeleton-item variant="image" style="width: 215px; height: 255px" />
                      </div>
                      <div class="price">
                        <el-skeleton-item style="width: 50%" />
                      </div>
                      <div class="attr">
                        <el-skeleton-item />
                        <el-skeleton-item />
                      </div>
                      <div class="commit">
                        <el-skeleton-item style="width: 50%" />
                      </div>
                      <div class="operate">
                        <el-skeleton-item style="width: 45%" />
                        <el-skeleton-item style="width: 45%; margin-left: 10%" />
                      </div>
                    </div>
                  </li>
                  <li class="yui3-u-1-5">
                    <div class="list-wrap">
                      <div class="p-img">
                        <el-skeleton-item variant="image" style="width: 215px; height: 255px" />
                      </div>
                      <div class="price">
                        <el-skeleton-item style="width: 50%" />
                      </div>
                      <div class="attr">
                        <el-skeleton-item />
                        <el-skeleton-item />
                      </div>
                      <div class="commit">
                        <el-skeleton-item style="width: 50%" />
                      </div>
                      <div class="operate">
                        <el-skeleton-item style="width: 45%" />
                        <el-skeleton-item style="width: 45%; margin-left: 10%" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </template>
            <template>
              <div class="goods-list">
                <ul class="yui3-g">
                  <li class="yui3-u-1-5" v-for="(good, index) in goodsList" :key="good.id">
                    <div class="list-wrap">
                      <div class="p-img">
                        <router-link :to="`/detail/${good.id}`">
                          <img v-lazy="good.defaultImg" />
                        </router-link>
                      </div>
                      <div class="price">
                        <strong>
                          <em>¥</em>&nbsp;
                          <i>{{ good.price }}.00</i>
                        </strong>
                      </div>
                      <div class="attr">
                        <a :title="good.title">{{ good.title }}</a>
                      </div>
                      <div class="commit">
                        <i class="command"
                          >已有<span>{{ good.id }}</span
                          >人评价</i
                        >
                      </div>
                      <div class="operate">
                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger"
                          >加入购物车</a
                        >
                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div></template
            >
          </el-skeleton>

          <!-- 分页的地方 -->
          <!-- <div class="fr page">
            <Pagination
              :total="total"
              :pageSize="searchParams.pageSize"
              :pageNo="searchParams.pageNo"
              :pagerCount="5"
              @currentPage="currentPage"
            ></Pagination>
          </div> -->
          <Pagination :pageNo="searchParams.pageNo" :pageSize="searchParams.pageSize" :total="total" :continues="5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelector from '@/views/Search/SearchSelector/SearchSelector.vue';
import { mapGetters } from 'vuex';
export default {
  components: { SearchSelector },
  data() {
    return {
      // 显示骨架图
      loading: true,
      // 初始化路由参数对象
      searchParams: {
        category1Id: '',
        category2Id: '',
        category3Id: '',
        categoryName: '',
        keyword: '',
        order: '1:desc',
        pageNo: 1,
        pageSize: 5,
        props: [],
        trademark: '',
      },
    };
  },
  computed: {
    ...mapGetters(['goodsList', 'attrsList', 'trademarkList', 'total']),
    isOrderOne() {
      return this.searchParams.order.split(':', 1) == 1;
    },
    isOrderTwo() {
      return this.searchParams.order.split(':', 1) == 2;
    },
    isOrderDesc() {
      return this.searchParams.order.indexOf('desc') !== -1;
    },
    isOrderAsc() {
      return this.searchParams.order.indexOf('asc') !== -1;
    },
  },
  watch: {
    // // 监听路由(简单写法)
    // $route() {
    //   // 更新搜索参数
    //   this.updateSearchParams();
    //   // 发请求
    //   this.getData();
    // },
    // 监听路由
    $route: {
      immediate: true,
      handler() {
        console.log('路由变化');
        // 开启骨架图
        this.loading = true;
        this.updateSearchParams(); // 更新路由参数
        this.getData(); // 获取最新结果
      },
      deep: true,
    },
  },
  mounted() {
    // 订阅trademarkInfo的事件回调
    this.$bus.$on('trademarkInfo', (trademark) => {
      // 整理品牌
      this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`;
      // 发请求
      this.getData();
    });
    // 订阅attrInfo的事件回调
    this.$bus.$on('attrInfo', (attr, attrValue) => {
      // 整理属性
      let props = `${attr.attrId}:${attrValue}:${attr.attrName}`;
      // 判断去重
      if (this.searchParams.props.indexOf(props) == -1) {
        // 更新props
        this.searchParams.props.push(props);
        // 发请求
        this.getData();
      }
    });
    // 订阅更新pageNo的事件
    this.$bus.$on('pageNoInfo', (newPageNo) => {
      // 更新pageNo
      this.searchParams.pageNo = newPageNo;
      // 发请求
      this.getData();
    });
  },
  beforeDestroy() {
    // 解绑事件总线
    this.$bus.$off();
  },
  methods: {
    // 更新搜索参数的回调
    updateSearchParams() {
      // 将初始化的searchParams参数与路由参数整合
      this.searchParams = { ...this.$options.data().searchParams, ...this.$route.query, ...this.$route.params };
      console.log('更新searchParams');
    },
    // 发请求的回调
    getData() {
      // 通知vuex派发一个action
      this.$store.dispatch('getSearchList', this.searchParams).then(() => {
        setTimeout(() => {
          // 关闭骨架图
          this.loading = false;
        }, 500);
      });
      console.log('发送请求');
    },
    // 清除categoryName的回调
    clearCategoryName() {
      // 清楚query参数，路由跳转
      this.$router.replace({ query: {} });
    },
    // 清除keyword的回调
    clearKeyword() {
      // 清楚params参数，路由跳转
      this.$router.replace({ name: 'search', params: {}, query: this.$route.query || undefined });
    },
    // 清空tradmark的回调
    clearTrademark() {
      // 置空
      this.searchParams.trademark = undefined;
      // 发送请求
      this.getData();
    },
    // 删除attr的回调
    clearAttr(index) {
      this.searchParams.props.splice(index, 1);
      // 发送请求
      this.getData();
    },
    // 修改排序的回调
    changeOrder(flag) {
      // 解构order
      let order = this.searchParams.order.split(':'); // order[flag,sort]
      // 判断是否切换标签
      if (flag == order[0]) {
        // 若否，则反转升降序
        order[1] = order[1] == 'desc' ? 'asc' : 'desc';
      } else {
        // 若是，则切换flag，并默认降序
        order[0] = flag;
        order[1] = 'desc';
      }
      // 拼串
      this.searchParams.order = `${order[0]}:${order[1]}`;
      // 发请求
      this.getData();
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;
                overflow: hidden;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>
