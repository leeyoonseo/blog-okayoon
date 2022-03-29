<template>
  <div class="ticker__wrap">
    <ul class="ticker__list">
      <li
        v-for="(item, index) in notice"
        :key="item.title"
        :class="['ticker__item', { active: index === state.activeIndex }]"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
      >
        <nuxt-link :to="item.path">
          <a class="item__link">
            <strong class="item__title">{{ item.title }}</strong>
            <!-- <span class="item__text">{{ item.text }}</span> -->
          </a>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  name: 'autoScrollTicker',
};
</script>
<script lang="ts" setup>
import { reactive, onMounted, onUnmounted, defineProps, withDefaults } from 'vue';
import { notice } from './dummy';

interface Props {
  timer: number;
}

interface State {
  activeIndex: number;
  maxIndex: number;
  intervalFunc: ReturnType<typeof setInterval>;
}

const props = withDefaults(defineProps<Props>(), {
  timer: 3000,
});

const state: State = reactive({
  activeIndex: 0,
  maxIndex: notice.length - 1,
  intervalFunc: 0,
});

onMounted(() => {
  console.log('timer', props.timer);
  state.intervalFunc = setInterval(() => {
    autoScrollingIndex();
  }, props.timer);
});

onUnmounted(() => {
  clearInterval(state.intervalFunc);
});

const autoScrollingIndex = () => {
  state.activeIndex = state.activeIndex >= state.maxIndex ? 0 : state.activeIndex + 1;
};

const handleMouseenter = () => {
  clearInterval(state.intervalFunc);
};

const handleMouseleave = () => {
  state.intervalFunc = setInterval(() => {
    autoScrollingIndex();
  }, props.timer);
};
</script>
<style lang="scss" scoped>
@import './autoScrollTicker';
</style>
