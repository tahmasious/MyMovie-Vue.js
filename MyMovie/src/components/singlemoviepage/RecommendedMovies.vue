<template>
    <section>
        <div class="flex justify-between mb-3 items-center">
          <h2 class="text-secondary mb-2">SIMILAR MOVIES</h2>
            <button v-if="RecCount == 6" @click="showFullRecommendedMovies" class="text-primary text-sm">show all</button>
            <button v-else @click="showLessRecommendedMovies" class="text-primary text-sm">show less</button>
        </div>
        <RowOfMainMovieCard style="margin-top: 0 !important;" :movies="data.results.slice(0,RecCount)" />
    </section>
</template>

<script setup>
import {useFetch} from '@/composable/useFetch.js'
import RowOfMainMovieCard from '@/components/general/RowOfMainMovieCard.vue' 
import { useRoute } from 'vue-router';
import { ref } from 'vue';
const {data , fetchWrapper} = useFetch({'results' : []})
const route = useRoute(); 
fetchWrapper(`3/movie/${route.params.id}/recommendations`)

const RecCount = ref(6)
const isShowingAll = ref(false)


function showFullRecommendedMovies(){
    RecCount.value = 20;
}

function showLessRecommendedMovies(){
    RecCount.value = 6;
}

defineExpose({
    showFullRecommendedMovies,
    showLessRecommendedMovies
})
</script>