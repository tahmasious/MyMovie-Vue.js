<template>
    <MainLayOut>
        <main class="w-[100%]">
            <!-- content section -->
            <section class="content relative h-[33rem] sm:block hidden">
                <!-- movie to be in background -->
                <img :src="`${API_IMAGE_BASE_URL}/w780${activeMovie.backdrop_path}`" 
                alt="backgournd image"
                class="absolute top-0 left-0 w-full h-[30rem] object-cover"
                >
                <div
                class="video-overlay absolute top-0 left-0 w-full p-16 pb-0 h-[30rem] flex flex-col justify-between"
                >
                <!-- header (searchbar) -->
                <header class="relative">
                    <GlassySearchBarVue />
                </header>
                <section class="trend-movies-container">
                    <span class="movie-name">{{ activeMovieYear }}</span>
                    <h2 class="text-white text-4xl pb-3 pt-px">{{activeMovie.title}}</h2>
                    <div class="flex justify-between">
                    <!-- a trend movie -->
                    <router-link :to="{name : 'movieDetail', params: {id : movie.id}}" class="trend-movie-container" v-for="movie in nowPlaying" :key="movie.id">
                        <img
                        :src="`${API_IMAGE_BASE_URL}/w154${movie.poster_path}`"
                        alt="movie cover"
                        :class="{'selected' : movie.id == activeMovie.id}"
                        class="trend-movie"
                        />
                    </router-link>
                    </div>
                </section>
                </div>
            </section>
            <RowsOfOptionedMovieCards :options="firstRowOptions">Movies</RowsOfOptionedMovieCards>    
            <RowsOfOptionedMovieCards :options="secondRowOptions">TV shows</RowsOfOptionedMovieCards>   
            <RowsOfPeopleCard /> 
        </main>
        <!-- side bar slot -->
        <template #aside>
           <BrowseRightSideBar /> 
        </template>
    </MainLayOut>
</template>

<script setup>
import MainLayOut from '@/components/general/MainLayOut.vue';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { client } from '@/utils';
import GlassySearchBarVue from '@/components/general/GlassySearchBar.vue';
import BrowseRightSideBar from '@/components/browsepage/BrowseRightSideBar.vue';
import { API_BASE_URL, API_IMAGE_BASE_URL } from '@/constants/api-constants';
import RowsOfOptionedMovieCards from '@/components/general/RowsOfOptionedMovieCards.vue'
import RowsOfPeopleCard from './RowsOfPeopleCard.vue';
const nowPlaying = ref('');
const activeMovie = ref('')
let counter = 0;
const activeMovieYear = computed(() => new Date(activeMovie.value.release_date).getFullYear())
const res = client(`${API_BASE_URL}3/movie/now_playing`);
res.then(data => {
    nowPlaying.value = data.results.slice(0,4);
    activeMovie.value = nowPlaying.value[counter];
})
let interval;
onMounted(() => {
    interval = setInterval(function() {
        // updating active movei
        activeMovie.value = nowPlaying.value[(counter++) % 4];
    }, 5000);
});

onUnmounted(() => {
    clearInterval(interval);
})

const firstRowOptions = {
    'Popular' : 'https://api.themoviedb.org/3/movie/popular' ,
    'Now playing' : 'https://api.themoviedb.org/3/movie/now_playing',
    'Upcoming' : 'https://api.themoviedb.org/3/movie/upcoming',
    'Top rated' : 'https://api.themoviedb.org/3/movie/top_rated',
}

const secondRowOptions = {
    'Popular' : 'https://api.themoviedb.org/3/tv/popular' ,
    'Top rated' : 'https://api.themoviedb.org/3/tv/top_rated',
    'Airing Today' : 'https://api.themoviedb.org/3/tv/airing_today',
    'On TV' : 'https://api.themoviedb.org/3/tv/on_the_air',
}
</script>

<style scoped>
.trend-movie {
    @apply rounded-2xl mb-[-50px] border-[3px] border-transparent transition-all  w-[150px] h-[220px];
}


.video-overlay {
  background: rgb(22, 21, 26);
  background: -moz-linear-gradient(
    180deg,
    rgba(22, 21, 26, 0) 0%,
    rgba(22, 21, 26, 0.0985644257703081) 5%,
    rgba(22, 21, 26, 0.2498249299719888) 11%,
    rgba(22, 21, 26, 0.3534663865546218) 16%,
    rgba(22, 21, 26, 0.4543067226890757) 23%,
    rgba(22, 21, 26, 0.48792016806722693) 31%,
    rgba(22, 21, 26, 0.7008053221288515) 39%,
    rgba(22, 21, 26, 0.8772759103641457) 48%,
    rgba(22, 21, 26, 0.9557072829131653) 61%,
    rgba(22, 21, 26, 0.9697128851540616) 74%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(22, 21, 26, 0) 0%,
    rgba(22, 21, 26, 0.0985644257703081) 5%,
    rgba(22, 21, 26, 0.2498249299719888) 11%,
    rgba(22, 21, 26, 0.3534663865546218) 16%,
    rgba(22, 21, 26, 0.4543067226890757) 23%,
    rgba(22, 21, 26, 0.48792016806722693) 31%,
    rgba(22, 21, 26, 0.7008053221288515) 39%,
    rgba(22, 21, 26, 0.8772759103641457) 48%,
    rgba(22, 21, 26, 0.9557072829131653) 61%,
    rgba(22, 21, 26, 0.9697128851540616) 74%
  );
  background: linear-gradient(
    180deg,
    rgba(22, 21, 26, 0) 0%,
    rgba(22, 21, 26, 0.0985644257703081) 5%,
    rgba(22, 21, 26, 0.2498249299719888) 11%,
    rgba(22, 21, 26, 0.3534663865546218) 16%,
    rgba(22, 21, 26, 0.4543067226890757) 23%,
    rgba(22, 21, 26, 0.48792016806722693) 31%,
    rgba(22, 21, 26, 0.7008053221288515) 39%,
    rgba(22, 21, 26, 0.8772759103641457) 48%,
    rgba(22, 21, 26, 0.9557072829131653) 61%,
    rgba(22, 21, 26, 0.9697128851540616) 74%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#16151a",endColorstr="#16151a",GradientType=1);
}
.selected {
  border: 3px solid #d91f27;
}
.movie-name {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 0 3px;
  font-size: 12px;
  color: rgb(191, 191, 191);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.active-selector {
  color: #d91f27;
}

</style>