<template>

    <div>
      <div>
        <input type="text" name="text" class="bg-slate-600" v-model="searchTerm">
      </div>
      <div class="flex justify-between bg-black flex-wrap">
        <div v-if="isLoading">
          <h1 class="text-4xl text-white">LOADING</h1>
        </div>
  
        <div v-else v-for="movie in searchResults" :key="movie.id">
          <MainMovieCard :genreID="movie.genre_ids[0]" :title="movie.title" :src="movie.poster_path" :rating="movie.vote_average" :releaseDate="movie.release_date"/>
        </div>
  
      </div>
  </div>
  </template>
  
  <script setup>
  import MainMovieCard from '../general/MainMovieCard.vue';
  import {client} from '../../utils.js'
  import {API_BASE_URL} from '../../constants/api-constants'

  import {  ref, watch } from 'vue';
  const searchTerm = ref('')
  const searchResults = ref('');
  const isLoading = ref(false);
  watch(searchTerm, () => {
    if(searchTerm.value.length > 3) {
      isLoading.value = true;
      const res = client(`${API_BASE_URL}3/search/movie?query=${searchTerm.value}&include_adult=false&language=en-US&page=1`);
      res.then(data => {
        isLoading.value = false;
        return searchResults.value = data.results
      })
    }else {
      searchResults.value = []; 
    }
  })
  </script>

  <style scoped>
  body {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  </style>
  