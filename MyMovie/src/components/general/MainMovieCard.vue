<template>
    <div class="w-[150px]">
        <a class="thumbnail-image relative">
        <img
            :src="`${API_IMAGE_BASE_URL}/w154${src}`"
            alt="movie poster"
            class="movie-poster"
        />
        <div
            class="overlay-desc absolute top-0 left-0 rounded-2xl w-full h-full p-3 flex justify-end flex-col gap-1 transition-all opacity-0"
        >
            <div class="scores">
            <ImbdContainer textColor="white" :imdbRate="rating"></ImbdContainer>
            </div>
            <div class="genre">{{mainGenre}}</div>
            <div class="more-infos">{{ year }} - America</div>
        </div>
        </a>
        <h3 class="text-white ml-1">{{ title }}</h3>
      </div>
</template>

<script setup>
import { computed,ref } from 'vue';
import ImbdContainer from './ImbdContainer.vue';
import {client} from '../../utils';
import {API_IMAGE_BASE_URL} from '../../constants/api-constants'
import {getGenreNamesByIDs} from '../../utils' ;
const props = defineProps({
  src: String,
  rating: Number,
  releaseDate: String,
  title: String,
  genreID : String
})
const year = computed(() =>  new Date(props.releaseDate).getFullYear())
const mainGenre = ref('');
const res = getGenreNamesByIDs([props.genreID]); 
res.then(data => mainGenre.value = data[0])

// const res = client('https://api.themoviedb.org/3/genre/movie/list');
// res.then(data => {
//   for (let genre of data.genres) {
//     if (genre.id == props.genreID){
//       mainGenre.value = genre.name ;
//     }
//   }
// })

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