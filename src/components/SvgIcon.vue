<template>
  <svg :class="['svg-icon', iconClass]" :style="iconStyle" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  iconClass: {
    type: String,
    default: '',
  },
  iconStyle: {
    type: Object,
    default: () => ({}),
  },
  name: {
    type: String,
    default: '',
  },
});

const iconName = computed(() => {
  return `#icon-${props.name}`;
});
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
