<template>
    <MainLayOut>
        
        <main class="w-[100%] p-8">
            <header class="flex items-center justify-start sm:justify-between">
                <SearchAndNavigation></SearchAndNavigation>
                <ProfileContainer />
            </header>
            <suggestion-box></suggestion-box>
            <rows-of-trailers :options="options" />
            <RowsOfTrendingMovies>Trending movies</RowsOfTrendingMovies>
        </main>
    </MainLayOut>
</template>

<script setup>
import MainLayOut from '@/components/general/MainLayOut.vue';
import SuggestionBox from '@/components/homepage/SuggestionBox.vue';
import { useRoute } from 'vue-router'
import RowsOfTrailers from '@/components/homepage/RowsOfTrailers.vue';
import RowsOfTrendingMovies from '@/components/homepage/RowsOfTrendingMovies.vue';
import SearchAndNavigation from '@/components/homepage/SearchAndNavigation.vue';
import ProfileContainer from './ProfileContainer.vue';

const options = {
    'Upcoming' : 'https://api.themoviedb.org/3/movie/upcoming',
    'Top Rated' : 'https://api.themoviedb.org/3/movie/top_rated'
}
</script>