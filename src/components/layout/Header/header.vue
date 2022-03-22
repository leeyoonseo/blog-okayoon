<template>
  <header>
    <div class="header-inner">
      <router-link to="/">
        <h1>OKAYOON</h1>
      </router-link>

      <div>
        <!-- TODO: 메뉴 -->
        <strong>전체보기</strong>
        <ul>
          <li>
            <strong>대 메뉴1</strong>
            <ul>
              <li>전체보기</li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>전체보기</li>
        </ul>
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

body {
  background: red;
}
</style>
