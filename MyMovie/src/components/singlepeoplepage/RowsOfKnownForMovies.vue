<template>
    <section class="p-8">
        <div class="flex justify-between mb-3 items-center">
          <h2 class="text-white text-lg mb-2">Known For</h2>
            <button v-if="RecCount == 6" @click="showFullKnownForMovies" class="text-primary text-sm">show all</button>
            <button v-else @click="showLessKnownForMovies" class="text-primary text-sm">show less</button>
        </div>
        <h3 class="text-secondary mb-4 mt-6">cast : </h3>
        <RowOfMainMovieCard v-if="data.cast" style="margin-top: 0 !important;" :movies="data.cast.slice(0,RecCount)" />
        <h3 class="text-secondary mb-4 mt-6">crew : </h3>
        <RowOfMainMovieCard v-if="data.crew" style="margin-top: 0 !important;" :movies="data.crew.slice(0,RecCount)" />
    </section>
</template>

<script setup>
import {useFetch} from '@/composable/useFetch.js'
import RowOfMainMovieCard from '@/components/general/RowOfMainMovieCard.vue' 
import { useRoute } from 'vue-router';
import { ref } from 'vue';
const {data , fetchWrapper} = useFetch({'cast' : []})
const route = useRoute(); 
fetchWrapper(`3/person/${route.params.id}/movie_credits`)

const RecCount = ref(6)
const isShowingAll = ref(false)


function showFullKnownForMovies(){
    RecCount.value = 20;
}

function showLessKnownForMovies(){
    RecCount.value = 6;
}

defineExpose({
    showFullKnownForMovies,
    showLessKnownForMovies
})
</script>