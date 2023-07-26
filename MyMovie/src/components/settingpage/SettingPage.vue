<template>
    <MainLayOut>
        <main class="w-[100%] p-8">
            <div class="flex sm:flex-row flex-col gap-3">
            <!-- profile statics  -->
            <ProfileContainer></ProfileContainer>
            <div class="w-full flex flex-col gap-3">
                <MostWatchedGenres />
                <RowsOfStatics />
            </div>
            </div>
            <section>
                <section class="movie-poster-container mt-8">
                    <p v-if="isLoading">loading ...</p>
                    <p v-else-if="error" >error fetching</p>
                    <RowOfMovies v-else :movies="data.results">Watchlist Movies</RowOfMovies>
                </section>
            </section>
        </main>
    </MainLayOut>
</template>
<script setup>
import MainLayOut from '@/components/general/MainLayOut.vue';
import MostWatchedGenres from './MostWatchedGenres.vue';
import ProfileContainer from './ProfileContainer.vue';
import RowsOfStatics from './RowsOfStatics.vue';
import RowOfMovies from '@/components/general/RowOfMainMovieCard.vue'
import {useFetch} from '@/composable/useFetch.js'
import { inject, watch } from 'vue';
const userInfo = inject('user');

const {data ,isLoading, error, fetchWrapper} = useFetch([]); 
fetchWrapper(`3/account/${userInfo.id}/watchlist/movies`);

</script>