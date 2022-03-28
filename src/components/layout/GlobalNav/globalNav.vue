<template>
  <div>
    <h2>대메뉴</h2>
    <ul v-if="gnb">
      <li v-for="item in gnb" :key="item.name">
        {{ item.name }}
        <ol v-if="item.menu">
          <li v-for="subItem in item.menu" :key="subItem.name">
            {{ subItem.name }}
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  name: 'GlobalNav',
};
</script>
<script lang="ts" setup>
import { gnb } from './dummy';

console.log(gnb);
</script>
<style lang="scss" scoped>
@import './globalNav';
</style>
