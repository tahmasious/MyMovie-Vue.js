<template>
    <div class="movie-container flex justify-start gap-2 my-2">
        <div class="movie-poster-container">
        <img
            :src="`${API_IMAGE_BASE_URL}/w154${coverImagePath}`"
            :alt="title"
            class="w-16 rounded-2xl"
        />
        </div>
        <div class="movie-info-container flex flex-col justify-between">
        <div class="movie-name-container">
            <h2 class="text-white w-full md:max-w-[120px]">{{ title }}</h2>
            <h3 class="text-secondary" >{{ genres }}</h3>
        </div>
        <div class="movie-imdb-container text-white">
            <imdbContainer :imdbRate="imdbRate" text-color="white"></imdbContainer>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {API_IMAGE_BASE_URL} from '@/constants/api-constants'
import {getGenreNamesByIDs} from '@/utils' ;
import imdbContainer from '@/components/general/ImbdContainer.vue' ;
const genres = ref('')
const props = defineProps({
    'coverImagePath' : {
        type : String
    },
    'title' : {
        type : String,
    },
    'genres' : {
        type : Array 
    },
    'imdbRate' : {
        type : Number
    }
})

const res = getGenreNamesByIDs(props.genres); 
res.then(data => genres.value = `${data[0]}, ${data[1]}`)
</script>