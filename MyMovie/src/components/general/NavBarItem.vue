<template>
  <a class="nav-link" :class="{ active: isActive }" :href="href">
    <img
      :src="isActive ? activeIcon : icon"
      :alt="`${title} icon`"
      class="w-4 h-4 inline mr-3"
    />
    <span>{{ title }}</span>
  </a>
</template>

<script setup>
  import { defineProps, ref } from 'vue';

  const props = defineProps(['title', 'isActive', 'href']);
  const importPath = `../../assets/${props.title}.png`;
  const importPathActive = `../../assets/${props.title}-active.png`;
  console.log(importPathActive);
  let icon = ref();
  let activeIcon = ref();
  import(importPath).then((module) => icon.value = module.default);
  import(importPathActive).then((module) => activeIcon.value = module.default);
</script>

<style scoped>
.active span {
  color: white;
}
.active {
  border-left: solid #d91f27 3px;
}
.nav-link {
  @apply pl-9 flex items-center text-secondary mt-3 mb-3;
}
</style>
