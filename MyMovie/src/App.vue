<script setup>
import SuggestionBox from './components/SuggestionBox.vue';
import SideBarMoiveCard from './components/SideBarMoiveCard.vue';
</script>

<template>
  <!-- <SuggestionBox background-image="../src/assets/plus.png" title="Amelie" description="Naive girl in paris" ></SuggestionBox> -->
  <SideBarMoiveCard coverImage="../src/assets/TLOU.jpg" imdbRate="8.3" title="The Last Of Us" :genres="['action', 'horror']" ></SideBarMoiveCard>
</template>

<style scoped>
</style>
