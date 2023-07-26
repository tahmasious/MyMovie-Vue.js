<template>
    <MainLayOut> 
        <main class="w-[100%] p-8">
            <p v-if="isLoading" class="text-white">Loading</p>
            <p v-else-if="error">error</p>
            <div v-else>
                <RowOfMainMovieCard :movies="data.results">Popular</RowOfMainMovieCard>
            </div>
        </main>
        <template #aside>
           <RightSideBar /> 
        </template>
    </MainLayOut>
</template>

<script setup>
import MainLayOut from '@/components/general/MainLayOut.vue';
import RowsOfCustomPeople from '@/components/peoplepage/RowsOfCustomPeople.vue';
import RowOfMainMovieCard from '@/components/general/RowOfMainMovieCard.vue'
import {useFetch} from '@/composable/useFetch.js'
import RightSideBar from '@/components/moviespage/RightSideBar.vue'
const {data ,isLoading, error, fetchWrapper} = useFetch([]); 
fetchWrapper(`3/movie/now_playing`);
</script>