<template>
    <aside class="w-[25%] p-5 hidden sm:block">
      <section class="flex flex-col gap-8 sticky top-5">
        <!-- top rated movies bar -->
        <section>
          <h2 class="mb-4 text-white">Top rated movies</h2>
          <div class="top-rated-movies text-sm">
            <SideBarMoiveCard v-for="movie in topRatedMovies" :key="movie.id" 
            :cover-image-path="movie.poster_path" 
            :title="movie.title" 
            :genres="movie.genre_ids" 
            :imdb-rate="movie.vote_average"
            :movieID="movie.id"
            />
          </div>
          <RedLinkBtn text="see all" href="#" />
        </section>
        <!-- upcoming movies bar -->
        <section>
          <h2 class="mb-4 text-white">Upcoming movies</h2>
          <div class="upcoming-movies text-sm">
            <SideBarMoiveCard v-for="movie in upcomingMoives" 
            :key="movie.id" 
            :cover-image-path="movie.poster_path" 
            :title="movie.title" 
            :genres="movie.genre_ids" 
            :imdb-rate="movie.vote_average"
            :movieID="movie.id"
            />
          </div>
          <RedLinkBtn text="see all" href="#" />
        </section>
      </section>
    </aside>
</template>


<script setup>
import { ref } from 'vue';
import {client} from '@/utils.js'
import SideBarMoiveCard from '@/components/general/SideBarMoiveCard.vue';
import RedLinkBtn from '@/components/general/RedLinkBtn.vue'
import {API_BASE_URL} from '@/constants/api-constants'

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

