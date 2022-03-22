<template>
  <div>
    <layout-header />
    <div>
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BaseLayout',
};
</script>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
