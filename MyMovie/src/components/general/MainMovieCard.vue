<template>
    <div class="w-[150px]">
        <router-link :to="{name : 'movieDetail', params : {id : movie.id}}" class="thumbnail-image relative">
        <img
            :src="`${API_IMAGE_BASE_URL}/w154${movie.poster_path}`"
            alt="movie poster"
            class="movie-poster"
        />
        <div
            class="overlay-desc absolute top-0 left-0 rounded-2xl w-full h-full p-3 flex justify-end flex-col gap-1 transition-all opacity-0"
        >
            <div class="scores">
            <ImbdContainer textColor="white" :imdbRate="movie.vote_average"></ImbdContainer>
            </div>
            <div class="genre">{{mainGenre}}</div>
            <div class="more-infos">{{ year }} - America</div>
        </div>
        </router-link>
        <h3 class="text-white ml-1">{{ movie.title ? movie.title : movie.name }}</h3>
      </div>
</template>

<script setup>
import { computed,ref } from 'vue';
import ImbdContainer from '@/components/general/ImbdContainer.vue';
import {API_IMAGE_BASE_URL} from '@/constants/api-constants'
import {getGenreNamesByIDs} from '@/utils' ;
import { RouterLink } from 'vue-router';

const props = defineProps(['movie'])
const year = computed(() =>  new Date(props.movie.release_date ? props.movie.release_date : props.movie.first_air_date).getFullYear())
const mainGenre = ref('');
const res = getGenreNamesByIDs([props.movie.genre_ids[0]]);
res.then(data => mainGenre.value = data[0])
</script>

<style scoped>
.thumbnail-image:hover .overlay-desc {
  opacity: 1;
}
img.movie-poster {
    @apply bg-slate-50  w-[150px] h-[220px]  rounded-2xl border-transparent transition-all mb-2;
}

.overlay-desc {
  background-color: rgba(41, 41, 41, 0.7);
  color: white;
}
</style>