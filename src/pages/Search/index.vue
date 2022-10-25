<template>
  <div>
    <h1>Search</h1>
    <h3>params参数：{{ $route.params.keyword }}</h3>
    <h3>query参数：{{ $route.query.k }}</h3>
    <h3>a:{{ a }},b:{{ b }}</h3>
  </div>
</template>

<script>
export default {
  props: ["keyword", "a", "b"],
};
</script>

<style>
</style>