<template>
    <div
    :style="{ 'background-image' : `url(${API_IMAGE_BASE_URL}/w780${movie.backdrop_path})` }"
    class="h-60 w-[23%] min-w-[14rem] mb-3 bg-center bg-cover rounded-2xl overflow-hidden"
    >
        <div
        class="overlay bg-slate-800 bg-opacity-60 w-full h-full p-4 text-white flex flex-col justify-between"
        >
        <ImbdContainer textColor="white" :imdbRate="movie.vote_average"></ImbdContainer>
        <div class="movie-info">
            <h2>{{ movie.title }}</h2>
            <span class="text-[#CCCCCC]">{{new Date(movie.release_date).getFullYear()}}</span>
            <div class="flex justify-between items-center">
            <primary-btn :href="{name : 'movieDetail', params : {id : movie.id}}"  px="7px" py="10px" />
            <add-to-watch-list-btn media_type="movie" :media_id="movie.id" px="5px" py="7px"></add-to-watch-list-btn>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import AddToWatchListBtn from '@/components/general/AddToWatchListBtn.vue';
import PrimaryBtn from '@/components/general/PrimaryBtn.vue';
import ImbdContainer from '@/components/general/ImbdContainer.vue'
import {API_BASE_URL,API_IMAGE_BASE_URL} from '@/constants/api-constants';
defineProps(['movie'])
</script>

