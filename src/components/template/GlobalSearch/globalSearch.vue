<template>
  <div :class="['search__wrap', { active: state.isSearchBarActive }]">
    <base-input
      class="search__input"
      :value="state.searchValue"
      placeholder="검색어 입력 후 엔터"
      @input="handleInput"
      @keyup.enter="handleEnter"
    />
    <button class="search__button" @click="handleClick">
      <span class="screen-out">검색</span>
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'globalSearch',
};
</script>
<script lang="ts" setup>
import { reactive } from 'vue';
interface State {
  searchValue: string | number;
  isSearchBarActive: boolean;
}

const state: State = reactive({
  searchValue: '',
  isSearchBarActive: false,
});

const handleClick = () => {
  state.isSearchBarActive = !state.isSearchBarActive;
};

const handleInput = (value: string | number) => {
  state.searchValue = value;
};

const handleEnter = () => {
  console.log('handleEnter', state.searchValue);
  // TODO: 검색
};
</script>
<style lang="scss">
@import 'globalSearch';
</style>
