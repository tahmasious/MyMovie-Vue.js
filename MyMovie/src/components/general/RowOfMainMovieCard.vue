<template>
    <section class="movie-poster-container mt-8">
      <div class="flex justify-between mb-3 items-center">
        <h2 class="text-white text-lg"><slot></slot></h2>
      </div>
      <div class="flex justify-between flex-wrap">
      <div v-for="movie in movies" :key="movie.id">
         <MainMovieCard :movie="movie" /> 
      </div>
      </div>
    </section>
</template>


<script setup>
import MainMovieCard from '@/components/general/MainMovieCard.vue';

const props = defineProps({
    'movies' : Object
})

</script>