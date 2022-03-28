<template>
  <div :class="`header__wrap ${state.isSticky ? 'sticky' : ''}`">
    <header class="header">
      <ul class="header__inner">
        <li class="header__menu">
          <button class="header__gnb">
            <span class="screen-out">메뉴버튼</span>
          </button>

          <!-- <layout-global-nav /> -->
        </li>

        <li class="header__logo">
          <router-link to="/">
            <h1 class="logo">OKAYOON</h1>
          </router-link>
        </li>

        <li class="header__search">
          <div class="screen-out">검색</div>
        </li>

        <li class="header__mode">
          <button :class="`header__mode-button ${state.isDarkMode ? 'dark' : 'light'}`" @click="handleChangeMode">
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
  // stickyStartHeight: 72,
  stickyStartHeight: 0,
});


onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})


const handleScroll = () => {
  const currentY = window.pageYOffset || document.documentElement.scrollTop;
  state.isSticky = currentY > state.stickyStartHeight;
};

const handleChangeMode = () => {
  console.log('handleChangeMode');
  state.isDarkMode = !state.isDarkMode;
};

</script>
<style lang="scss" scoped>
@import './header';
</style>
