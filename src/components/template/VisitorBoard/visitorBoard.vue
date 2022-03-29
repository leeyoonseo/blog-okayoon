<template>
  <div class="visitor__board">
    <ul class="board__list">
      <li
        v-for="item in visitors"
        :class="`board__item board__item-${item.label.toLocaleLowerCase()}`"
        :key="item.label"
      >
        <span class="board__item-label">{{ item.label }}</span>
        <span class="board__item-text">{{ visitorsNumber(item.visitorsNum) }}</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  name: 'visitorBoard',
};
</script>
<script lang="ts" setup>
import { visitors, Visitors } from './dummy';
import { computed } from 'vue';

const visitorsNumber = computed(() => {
  return (num: Visitors['visitorsNum']) => {
    return num.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  };
});
</script>
<style lang="scss">
@import './visitorBoard';
</style>
