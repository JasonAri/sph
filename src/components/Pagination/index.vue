<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$bus.$emit('pageNoInfo', pageNo - 1)">上一页</button>
    <button v-if="startNumAndEndNum[0] > 1" @click="$bus.$emit('pageNoInfo', 1)">1</button>
    <button v-if="startNumAndEndNum[0] > 2">.....</button>

    <!-- 中间连续页码的地方:v-for、数组、对象、数字、字符串 -->
    <button
      :class="{ active: pageNo == page }"
      v-for="(page, index) in startNumAndEndNum"
      :key="index"
      @click="$bus.$emit('pageNoInfo', page)"
    >
      {{ page }}
    </button>

    <button v-if="startNumAndEndNum[continues - 1] < totalPage - 1">......</button>
    <button v-if="startNumAndEndNum[continues - 1] < totalPage" @click="$bus.$emit('pageNoInfo', totalPage)">
      {{ totalPage }}
    </button>

    <button :disabled="pageNo == totalPage" @click="$bus.$emit('pageNoInfo', pageNo + 1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      const { continues, pageNo, totalPage } = this;
      let start = 0;
      let end = 0;
      // 初始化一个结果数组
      let arr = [];
      // 总页码<=连续页码
      if (totalPage <= continues) {
        start = 1;
        end = totalPage;
        for (let i = 0; i < totalPage; i++) {
          arr.push(start + i);
        }
      } else {
        // 总页码>连续页码
        start = pageNo - (continues - 1) / 2;
        end = start + continues - 1;
        // 左边界
        if (start < 1) {
          start = 1;
          end = continues;
        }
        // 右边界
        if (end > totalPage) {
          end = totalPage;
          start = totalPage - continues + 1;
        }
        // 循环push
        for (let i = 0; i < continues; i++) {
          arr.push(start + i);
        }
      }
      return arr;
    },
  },
};
</script>

<style scoped lang="less">
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
