<template>
    <section>
        <section class="movie-poster-container mt-8">
          <div class="flex justify-between mb-3 items-center">
            <h2 class="text-white text-lg"><slot></slot></h2>
          </div>
          <div class="flex justify-between flex-wrap">
            <TrendingMovieExpandCard 
            v-for="movie in movies" :key="movie.id"
            :title="movie.title" 
            :backgroundImage="movie.backdrop_path" 
            :imdbRate="movie.vote_average" 
            :publishYear="new Date(movie.release_date).getFullYear()"/>
          </div>
        </section>
      </section>
</template>


<script setup>
import MainMovieCard from '@/components/general/MainMovieCard.vue';
import  TrendingMovieExpandCard  from '@/components/homepage/TrendingMovieExpandCard.vue'
import {API_BASE_URL} from '@/constants/api-constants'
import { ref } from 'vue';
import {client} from '@/utils'
const movies = ref([])
const res = client(`${API_BASE_URL}3/movie/popular`);
res.then(data => {
    movies.value = data.results.slice(0, data.results.length > 4 ? 4 : data.results.length);
})
</script>