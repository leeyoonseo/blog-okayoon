<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__menu">
        <button class="header__gnb">메뉴버튼</button>

        <layout-global-nav />
      </div>

      <router-link to="/" class="header__logo">
        <h1>OKAYOON</h1>
      </router-link>

      <div>모드</div>
      <div>검색</div>

      <div class="header__auth">
        <div>로그인</div>
        <div>로그아웃</div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
export default {
  name: 'layoutHeader',
};
</script>
<style lang="scss" scoped>
@import './header';
</style>
