<template>
<MainLayOut>
    <main v-if="isLoading" class="w-full">
        <img :src="LoadingGif" alt="loading ...">
    </main>
    <main v-else-if="error" class="w-full">
        <p>Error Fetching ...</p>
    </main>
    <main v-else class="w-full">
      <!-- content section -->
      <section class="content relative h-[33rem]">
        <!-- movie to be in background -->
        <img
          v-if="data.backdrop_path"
          :src="`${API_IMAGE_BASE_URL}/w780${data.backdrop_path}`"
          class="absolute top-0 left-0 w-full h-[30rem] object-cover"
          alt="movie cover"
        />
        <div
          class="video-overlay absolute top-0 left-0 w-full p-16 pb-0 h-[30rem] flex flex-col justify-between"
        >
          <!-- header (searchbar) -->
          <header class="relative sm:flex hidden justify-between items-center">
            <a
              href="#"
              class="glss-bg w-8 h-8 flex justify-center items-center border-[1.5px] border-secondary rounded-[20px]"
            >
              <img
                class="rotate-180 inline w-4 h-4"
                src="@/assets/arrow.png"
                alt="arrow-left"
                @click="goBack"
              />
            </a>
            <GlassySearchBarVue />
          </header>
          <section>
            <div
              class="flex justify-between sm:flex-row flex-col sm:items-center items-start"
            >
              <div>
                <span class="text-white font-bold"
                  >DIRECTOR</span
                >
                <h2 class="text-white text-5xl pt-px font-bold">
                  {{ data.title }}
                </h2>
                <div class="mb-3 mt-1">
                  <span class="movie-genre mr-1" v-for="genre in data.genres" :key="genre.id">{{ genre.name }}</span>
                </div>
              </div>
              <div class="flex justify-between gap-3">
                <!-- add to watchlist btn -->
                <AddToWatchListBtn :isGlassy="true"></AddToWatchListBtn>
                <!-- rate btn -->
                <div
                  class="rate text-white text-lg glss-bg rounded-2xl py-[10px] px-3 relative z-10"
                >
                  <img
                    src="@/assets/rate.png"
                    alt="#"
                    class="inline-block w-6 h-6"
                  />
                  <div
                    class="rate-box bg-white-glass p-3 hidden absolute w-[200px] left-[-100px] flex-col items-center"
                  >
                    <p class="text-sm">How do you rate this movie ?</p>
                    <div class="star-box flex">
                      <img
                        src="@/assets/rate.png"
                        alt="#"
                        class="inline-block w-6 h-6"
                      /><img
                        src="@/assets/rate.png"
                        alt="#"
                        class="inline-block w-6 h-6"
                      /><img
                        src="@/assets/rate.png"
                        alt="#"
                        class="inline-block w-6 h-6"
                      /><img
                        src="@/assets/rate.png"
                        alt="#"
                        class="inline-block w-6 h-6"
                      /><img
                        src="@/assets/rate.png"
                        alt="#"
                        class="inline-block w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between sm:flex-row flex-col gap-2">
              <a href="#" class="info-item play-btn bg-primary">
                <img
                  src="@/assets/play-btn.png"
                  alt="play-icon"
                  class="w-12 h-12 m-auto"
                />
              </a>
              <!-- info container -->
              <div
                class="info-item glss-bg justify-center items-center relative sm:flex hidden"
              >
                <div class="info-title font-bold absolute left-0">
                  <span class="text-secondary inline-block rotate-[-90deg]"
                    >Length</span
                  >
                </div>
                <div class="info-value font-bold">
                  <span class="text-white text-4xl">{{data.runtime}} min</span>
                </div>
              </div>
              <!-- info container -->
              <div
                class="info-item glss-bg justify-center items-center relative sm:flex hidden"
              >
                <div class="info-title font-bold absolute left-0">
                  <span class="text-secondary inline-block rotate-[-90deg]"
                    >Release</span
                  >
                </div>
                <div class="info-value font-bold">
                  <span class="text-white text-4xl">{{ releaseYear }}</span>
                </div>
              </div>
              <!-- info container -->
              <div
                class="info-item glss-bg justify-center items-center relative sm:flex hidden"
              >
                <div class="info-title font-bold absolute left-0">
                  <span class="text-secondary inline-block rotate-[-90deg]"
                    >Budget</span
                  >
                </div>
                <div class="info-value font-bold">
                  <span class="text-white text-4xl">${{ budget }}M</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div class="p-16 pt-0">
        <section class="description mb-6">
          <h2 class="text-secondary mb-2">DESCRIPTION</h2>
          <p class="text-white">
            {{ data.overview }}
          </p>
        </section>
        <MediaSectionVue />
        <NotableCastSection />
        <RowOfMainMovieCard />
      </div>
    </main>    
</MainLayOut>
</template>

<script setup>
import { useRoute } from 'vue-router';
import MainLayOut from '@/components/general/MainLayOut.vue';
import RowOfMainMovieCard from '@/components/general/RowOfMainMovieCard.vue';
import {useFetch} from '@/composable/useFetch.js'
import {API_BASE_URL , API_IMAGE_BASE_URL} from '@/constants/api-constants'
import { computed, watch } from 'vue';
import LoadingGif from '@/assets/loader.gif'
import GlassySearchBarVue from '@/components/general/GlassySearchBar.vue';
import AddToWatchListBtn from '@/components/general/AddToWatchListBtn.vue';
import MediaSectionVue from '@/components/singlemoviepage/MediaSection.vue';
import NotableCastSection from './NotableCastSection.vue';

const route = useRoute(); 
const {data ,isLoading, error, fetchWrapper} = useFetch()



watch(() => route.params.id , () => {
  fetchWrapper(`${API_BASE_URL}3/movie/${route.params.id}`)
}, {immediate : true})

const releaseYear = computed(() => {
    return new Date(`${data.value.release_date}`).getFullYear();
})

const budget = computed(() => {
    return data.value.budget / 1_000_000
})

function goBack() {
    window.history.back();
}

// {
//   "adult": false,
//   "backdrop_path": null,
//   "belongs_to_collection": null,
//   "budget": 2800000,
//   "genres": [
//     {
//       "id": 35,
//       "name": "Comedy"
//     },
//     {
//       "id": 10749,
//       "name": "Romance"
//     }
//   ],
//   "homepage": "",
//   "id": 46296,
//   "imdb_id": "tt1314241",
//   "original_language": "da",
//   "original_title": "Simon & Malou",
//   "overview": "Circumstances force the unstructured yet charming Danish Bohemian novelist, Simon, to share his flat in Copenhagen with the very organized and beautiful Swedish lawyer, Malou. Simon dreams of children and a family. Malou is solely focused on her career. Despite being in opposition they warm up to each other. But even though opposites do attract - can they also manage to live together? Against all odds their meeting sets of a chain of events, which will ultimately change their lives forever.",
//   "popularity": 0.656,
//   "poster_path": "/h50E6Y59LmS1EMi48jCKY0bCmLP.jpg",
//   "production_companies": [
//     {
//       "id": 5016,
//       "logo_path": null,
//       "name": "Nepenthe Productions",
//       "origin_country": ""
//     }
//   ],
//   "production_countries": [
//     {
//       "iso_3166_1": "DK",
//       "name": "Denmark"
//     }
//   ],
//   "release_date": "2009-10-30",
//   "revenue": 0,
//   "runtime": 90,
//   "spoken_languages": [
//     {
//       "english_name": "Danish",
//       "iso_639_1": "da",
//       "name": "Dansk"
//     },
//     {
//       "english_name": "Swedish",
//       "iso_639_1": "sv",
//       "name": "svenska"
//     }
//   ],
//   "status": "Released",
//   "tagline": "Life is what happens to you while you're busy making other plans",
//   "title": "No Time for Love",
//   "video": false,
//   "vote_average": 6.4,
//   "vote_count": 5
// }
</script>

<style scoped>
.glss-bg {
  /* From https://css.glass */
  background: rgba(31, 31, 31, 0.48);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.video-overlay {
  background: rgb(22, 21, 26);
  background: -moz-linear-gradient(
    180deg,
    rgba(22, 21, 26, 0.31985294117647056) 71%,
    rgba(22, 21, 26, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(22, 21, 26, 0.31985294117647056) 71%,
    rgba(22, 21, 26, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(22, 21, 26, 0.31985294117647056) 71%,
    rgba(22, 21, 26, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#16151a",endColorstr="#16151a",GradientType=1);
}

.movie-genre {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 0 3px;
  font-size: 12px;
  color: rgb(255, 255, 255);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}



.bg-white-glass {
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.rate:hover div {
  display: flex;
}

.info-item {
    @apply rounded-2xl py-7 w-full;
  }
</style>