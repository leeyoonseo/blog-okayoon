<template>
  <div :class="['header__wrap', { sticky: state.isSticky }]">
    <header class="header">
      <ul class="header__inner">
        <li class="header__menu">
          <button class="header__gnb" @click="handleMenu">
            <span class="screen-out">메뉴버튼</span>
          </button>

          <layout-side-menu :active="state.isMenuOpened" :onClose="handleMenu" />
        </li>

        <li class="header__logo">
          <router-link to="/">
            <h1 class="logo">OKAYOON</h1>
          </router-link>
        </li>

        <li class="header__search">
          <span class="screen-out">검색</span>
          <global-search />
        </li>

        <li class="header__mode">
          <button
            :class="`header__mode-button ${state.isDarkMode ? 'dark' : 'light'}`"
            @click="handleChangeMode"
          >
            <span class="screen-out">모드변경 버튼</span>
          </button>
        </li>

        <!-- <li class="header__auth">
          <div v-if="!state.isLogined">로그인</div>
          <div v-else>로그아웃</div>
        </li> -->
      </ul>
    </header>
  </div>
</template>
<script lang="ts">
export default {
  name: 'layoutHeader',
};
</script>
<script lang="ts" setup>
import { reactive, onMounted, onUnmounted } from 'vue';

const state = reactive({
  isLogined: false,
  isDarkMode: false,
  isSticky: false,
  isMenuOpened: false,
  // stickyStartHeight: 72,
  stickyStartHeight: 0,
});

onMounted(() => {
  // TODO: throttle
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  const currentY = window.pageYOffset || document.documentElement.scrollTop;
  state.isSticky = currentY > state.stickyStartHeight;
};

const handleMenu = () => {
  console.log('handleMenu');
  state.isMenuOpened = !state.isMenuOpened;
};

const handleChangeMode = () => {
  console.log('handleChangeMode');
  state.isDarkMode = !state.isDarkMode;
};
</script>
<style lang="scss" scoped>
@import './header';
</style>
