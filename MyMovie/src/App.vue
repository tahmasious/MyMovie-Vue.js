<script setup>
import SuggestionBox from './components/SuggestionBox.vue';
import SideBarMoiveCard from './components/SideBarMoiveCard.vue';
import Trailer from './components/Trailer.vue';
import TrendingMovieExpandCard from './components/TrendingMovieExpandCard.vue';
</script>

<template>
  <!-- <SuggestionBox background-image="../src/assets/plus.png" title="Amelie" description="Naive girl in paris" ></SuggestionBox> -->
  <!-- <SideBarMoiveCard coverImage="../src/assets/TLOU.jpg" imdbRate="8.3" title="The Last Of Us" :genres="['action', 'horror']" ></SideBarMoiveCard> -->
  <!-- <Trailer title="Hello" imageBackground="../src/assets/TLOU.jpg"></Trailer> -->
  <TrendingMovieExpandCard title="The blade runner" imdbRate="8.3" publishYear="2016" backgroundImage="../src/assets/blade-runner.jpg" />
</template>

<style scoped>
</style>
