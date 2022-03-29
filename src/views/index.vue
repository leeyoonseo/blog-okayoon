<template>
  <div>
    <h1>Index</h1>
    <div v-for="(item, index) in 100" :key="index">
      <p>item</p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'indexPage',
  layout: 'base',
  title: '인덱스',
};
</script>
<script setup lang="ts"></script>
<style lang="scss" scoped>
body {
  color: red;
}
</style>
