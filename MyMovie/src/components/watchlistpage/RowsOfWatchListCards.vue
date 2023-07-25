<template>
    <div class="row flex justify-start flex-nowrap sm:flex-wrap gap-3">
        <p v-if="isLoading" >loading</p>
        <WatchListCard 
        v-else
        v-for="(movie, index) in data.results" 
        :key="movie.id"
        :movie="movie"
        @removeFromWatchList="data.results.splice(index, 1)"
        />
    </div>
</template>

<script setup>

import {useFetch} from '@/composable/useFetch.js'
import {inject, onBeforeMount } from 'vue';
import WatchListCard from './WatchListCard.vue';
const {data ,isLoading, error, fetchWrapper} = useFetch([]); 

onBeforeMount(() => {
    fetchWrapper(`3/account/${inject('user_id')}/watchlist/movies`);
})
</script>