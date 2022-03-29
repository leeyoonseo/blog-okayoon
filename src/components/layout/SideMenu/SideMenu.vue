<template>
  <Transition name="sidemenu-fade">
    <div v-show="props.active" :class="['sidemenu', { active: props.active }]">
      <div class="sidemenu__inner">
        <h2 class="screen-out">대메뉴</h2>
        <button class="sidemenu__button-close" @click="props.onClose">
          <span class="screen-out">메뉴닫기버튼</span>
        </button>
        <ul v-if="gnb" class="sidemenu__list sidemenu__list-main">
          <li v-for="item in gnb" :key="item.name" class="sidemenu__item">
            <router-link to="/">{{ menuInfo(item) }}</router-link>

            <ul v-if="item.menu" class="sidemenu__list sidemenu__list-sub">
              <li v-for="subItem in item.menu" :key="subItem.name" class="sidemenu__item">
                <router-link to="/">{{ menuInfo(subItem) }}</router-link>
              </li>
            </ul>
          </li>
        </ul>

        <div class="sidemenu__board">
          <ul class="board__list">
            <li class="board__item">
              <span class="board__item-label">total</span>
              <span class="board__item-text">100</span>
            </li>
            <li class="board__item">
              <span class="board__item-label">month</span>
              <span class="board__item-text">100</span>
            </li>
            <li class="board__item">
              <span class="board__item-label">today</span>
              <span class="board__item-text">100</span>
            </li>
            <!-- <li class="board__item">이달 방문자수</li>
            <li class="board__item">오늘 방문자수</li> -->
          </ul>
        </div>
      </div>
    </div>
  </Transition>
  <span v-show="props.active" class="sidemenu__overlay"></span>
</template>
<script lang="ts">
export default {
  name: 'SideMenu',
};
</script>
<script lang="ts" setup>
import { gnb, Gnb } from './dummy';
import { withDefaults, defineProps, computed } from 'vue';

interface Props {
  active: boolean;
  onClose: () => void;
}

const props = withDefaults(defineProps<Props>(), {});

const menuInfo = computed(() => {
  return (item: Gnb) => {
    return `${item.name} (${item.totalNum})`;
  };
});
</script>
<style lang="scss" scoped>
@import './SideMenu';
</style>
