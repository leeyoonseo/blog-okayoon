<template>
  <div class="page__main">
    <h1 class="screen-out">메인페이지</h1>

    <section class="main__section main__banner">
      메인비주얼
      <h2>zzolaB-log :)</h2>
      <span>FE 성장 기록물</span>
    </section>

    <section class="main__section main__section-ticker">
      <h3 class="screen-out">공지사항</h3>
      <auto-scroll-ticker :timer="2000" />
    </section>

    <section class="main__section">
      <h3>New</h3>
      <ul>
        <li>
          <div>
            <nuxt-link to="/"><a>카테고리</a></nuxt-link>
            <strong>타이틀</strong>
            <div>
              할일 목록을 만들면서 Vue3 배워보자 - 01 할일 목록을 만들면서 Vue3 배워보자 - 02 > 할일
              목록을 만들면서 Vue3 배워보자 - 03 이번에는 Store를 통해 작업을 진행해보겠습니다.
            </div>
          </div>
          <div>
            <img src="" />
          </div>
        </li>
      </ul>
    </section>

    <section class="main__section">
      <h3>Best</h3>
      <ul>
        <li>BestBestBestBest</li>
      </ul>
    </section>

    <section class="main__section main__banner-sub">
      <strong>배너배너</strong>
      <div>이미지</div>
    </section>

    <section class="main__section">
      <h3>Keywords</h3>
      <ul>
        <li>KeywordsKeywordsKeywords</li>
      </ul>
    </section>
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
.page__main {
  .main__section {
    & + .main__section {
      margin-top: 80px;
    }

    &-ticker {
      padding: 0 2%;
      margin-top: 0 !important;
    }
  }
  .main__banner {
    width: 100%;
    height: 480px;
    background: pink;
  }
}
</style>
