<template>
    <MainLayOut>
        <main class="w-[100%] p-8">
            <suggestion-box title="Hello mother fucker"></suggestion-box>
            <rows-of-trailers :options="options" />
            <RowsOfTrendingMovies>Trending movies</RowsOfTrendingMovies>
        </main>
    </MainLayOut>
</template>

<script setup>
import MainLayOut from '@/components/general/MainLayOut.vue';
import SuggestionBox from '@/components/homepage/SuggestionBox.vue';
import TrailerVue from '@/components/homepage/Trailer.vue';
import RowsOfTrailers from '@/components/homepage/RowsOfTrailers.vue';
import RowsOfTrendingMovies from './RowsOfTrendingMovies.vue';

const options = {
    'Upcoming' : 'https://api.themoviedb.org/3/movie/upcoming',
    'Top Rated' : 'https://api.themoviedb.org/3/movie/top_rated'
}
</script>