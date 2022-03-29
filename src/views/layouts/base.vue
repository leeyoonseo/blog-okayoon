<template>
  <div class="base__layout" ref="layout">
    <div class="base__header">
      <layout-header />
    </div>

    <div class="base__container">
      <router-view />
    </div>

    <div class="base__footer">
      <layout-footer />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BaseLayout',
};
</script>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.base__layout {
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: #fafafa;

  .base__header {
  }

  .base__container {
  }

  .base__footer {
    margin-top: auto;
  }
}
</style>
