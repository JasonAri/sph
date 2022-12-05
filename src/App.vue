<template>
  <div id="app" :class="{ gray: $route.meta.gray }">
    <Header />
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 派发一个action（通知vuex发请求，获取三级导航数据，存储在仓库中）
    this.$store.dispatch('categoryList');
  },
  beforeDestroy() {
    localStorage.removeItem('TOKEN');
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.gray {
  -webkit-filter: grayscale(0.85) saturate(0.8);
}
</style>
