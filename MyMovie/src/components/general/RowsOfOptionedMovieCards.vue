<template>
    <section class="movie-poster-container p-8">
        <div class="flex justify-between items-center">
          <h2 class="text-white text-lg"><slot>Movies</slot></h2>
          <div><RedLinkBtn text="see all" href="#" /></div>
        </div>
        <div
          class="selector-container mb-3 text-secondary flex justify-start gap-4 text-sm md:text-base"
        >
          <button v-for="option in Object.keys(options)" :key="option" :class="{'active-selector' : activeTab == option}" @click="activeTab=option">{{ option }}</button>
        </div>
        <div class="flex flex-wrap justify-between">
        <div v-for="movie in movies" :key="movie.id">
            <MainMovieCard 
            :genreID="movie.genre_ids[0]" :title="movie.title" 
            :src="movie.poster_path" :rating="movie.vote_average" 
            :releaseDate="movie.release_date"/>
          </div>
        </div>
      </section>
</template>


<script setup>
import { ref, watch } from 'vue';
import MainMovieCard from '@/components/general/MainMovieCard.vue';
import RedLinkBtn from '@/components/general/RedLinkBtn.vue'
import {client} from '@/utils'


const props = defineProps({
    'options' : Object // options must be like : {Popular : https://api-link-to-pop-movies.com/ , "On Tv" : ...}
})

const activeTab = ref(Object.keys(props.options)[0])
const movies = ref('');

watch(activeTab, () => {
    const res = client(props.options[activeTab.value]);
    res.then(data => movies.value = data.results.slice(0,6))
}, {immediate : true})


</script>

<style scoped>
.active-selector {
  color: #d91f27;
}

</style>