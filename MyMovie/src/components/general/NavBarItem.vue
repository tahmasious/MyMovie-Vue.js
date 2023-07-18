<template>
  <router-link :to="{name : title.toLowerCase()}" v-slot="{ isActive }" >
    <div :class="{ active: isActive }" class="w-full nav-link">
      <img
      :src="isActive ? activeIcon : icon"
      :alt="`${title} icon`"
      class="w-4 h-4 inline mr-3"
    />
    <span>{{ title }}</span>
    </div>
  </router-link>
</template>

<script setup>
  import { defineProps, ref } from 'vue';
  import { RouterLink } from 'vue-router';
  const props = defineProps(['title']);
  const importPath = `../../assets/${props.title}.png`;
  const importPathActive = `../../assets/${props.title}-active.png`;
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

.nav-link:not(.active) {
  margin-left: 3px;
}

</style>
