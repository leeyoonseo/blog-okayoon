<template>
  <input
    class="base__input"
    v-bind="$attrs"
    type="text"
    :value="props.value"
    @input="handleInput"
  />
</template>
<script lang="ts">
export default {
  name: 'BaseInput',
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

interface Props {
  value?: string | number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'input', value: string | number): void;
}>();

const handleInput = (e: Event) => {
  emit('input', (e.target as HTMLInputElement).value);
};
</script>
<style lang="scss">
@import 'input';
</style>
