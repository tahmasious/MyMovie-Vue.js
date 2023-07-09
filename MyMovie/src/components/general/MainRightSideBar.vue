<template>
    <aside class="w-[25%] p-5 hidden sm:block">
      <section class="flex flex-col gap-8 sticky top-5">
        <!-- top rated movies bar -->
        <section>
          <h2 class="mb-4 text-white">Top rated movies</h2>
          <div class="top-rated-movies text-sm">
            <SideBarMoiveCard v-for="movie in topRatedMovies" :key="movie.id" :cover-image-path="movie.poster_path" :title="movie.title" :genres="movie.genre_ids" :imdb-rate="movie.vote_average"/>
          </div>
          <RedLinkBtn text="see all" href="#" />
        </section>
        <!-- upcoming movies bar -->
        <section>
          <h2 class="mb-4 text-white">Upcoming movies</h2>
          <div class="upcoming-movies text-sm">
            <SideBarMoiveCard v-for="movie in upcomingMoives" :key="movie.id" :cover-image-path="movie.poster_path" :title="movie.title" :genres="movie.genre_ids" :imdb-rate="movie.vote_average"/>
          </div>
          <RedLinkBtn text="see all" href="#" />
        </section>
      </section>
    </aside>
</template>


<script setup>
import { ref } from 'vue';
import {client} from './../../utils.js'
import SideBarMoiveCard from './SideBarMoiveCard.vue';
import RedLinkBtn from './RedLinkBtn.vue'
import {API_BASE_URL} from '../../constants/api-constants'

const topRatedMovies = ref([]);
const upcomingMoives = ref([]);

const res = client(`${API_BASE_URL}3/movie/top_rated`);
res.then(data => {
  topRatedMovies.value = data.results.slice(0, data.results.length > 3 ? 3 : data.results.length);
})

const secRes = client(`${API_BASE_URL}3/movie/upcoming`);
secRes.then(data => {
  upcomingMoives.value = data.results.slice(0, data.results.length > 3 ? 3 : data.results.length);
})

</script>

<style scoped>
aside {
  background: rgb(33, 35, 41);
  background: -moz-linear-gradient(
    180deg,
    rgba(33, 35, 41, 1) 0%,
    rgba(31, 32, 39, 1) 23%,
    rgba(29, 30, 36, 1) 50%,
    rgba(26, 28, 32, 1) 75%,
    rgba(25, 27, 31, 1) 90%,
    rgba(24, 26, 30, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(33, 35, 41, 1) 0%,
    rgba(31, 32, 39, 1) 23%,
    rgba(29, 30, 36, 1) 50%,
    rgba(26, 28, 32, 1) 75%,
    rgba(25, 27, 31, 1) 90%,
    rgba(24, 26, 30, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(33, 35, 41, 1) 0%,
    rgba(31, 32, 39, 1) 23%,
    rgba(29, 30, 36, 1) 50%,
    rgba(26, 28, 32, 1) 75%,
    rgba(25, 27, 31, 1) 90%,
    rgba(24, 26, 30, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#212329",endColorstr="#181a1e",GradientType=1);
}

</style>