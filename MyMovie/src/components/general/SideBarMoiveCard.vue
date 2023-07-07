<template>
    <div class="movie-container flex justify-start gap-2 my-2">
        <div class="movie-poster-container">
        <img
            :src="`${API_IMAGE_BASE_URL}/w154${coverImagePath}`"
            alt=""
            class="w-16 rounded-2xl"
        />
        </div>
        <div class="movie-info-container flex flex-col justify-between">
        <div class="movie-name-container">
            <h2 class="text-white">{{ title }}</h2>
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
import {API_IMAGE_BASE_URL} from '../../constants/api-constants'
import {getGenreNamesByIDs} from '../../utils' ;
import imdbContainer from './ImbdContainer.vue' ;
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
console.log(`${props.genres} : ${props.title}`)
const res = getGenreNamesByIDs(props.genres); 
res.then(data => genres.value = `${data[0]}, ${data[1]}`)
</script>