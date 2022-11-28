<template>
  <div>
    <!-- 三级联动全局组件 -->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :floor="floor" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from '@/views/Home/ListContainer';
import Recommend from '@/views/Home/Recommend';
import Rank from '@/views/Home/Rank';
import Like from '@/views/Home/Like';
import Floor from '@/views/Home/Floor';
import Brand from '@/views/Home/Brand';
import { mapState } from 'vuex';
export default {
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  computed: {
    ...mapState({ floorList: (state) => state.home.floorList }),
  },
  mounted() {
    // 派发action 获取floor组件的数据
    this.$store.dispatch('getFloorList');
    // // 派发action 获取个人信息
    // this.$store.dispatch('getUserInfo').catch((reason) => {
    //   console.warn(reason);
    // });
  },
};
</script>

<style></style>
