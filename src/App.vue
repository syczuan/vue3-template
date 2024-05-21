<template>
  <RouterView v-if="isRouterActive" />
</template>
<script setup lang="ts">
import { ref, provide, nextTick } from 'vue';

const isRouterActive = ref(true);
provide('reload', () => {
  isRouterActive.value = false;
  nextTick(() => {
    isRouterActive.value = true;
  });
});
</script>
<style lang="scss"></style>
