<template>
 <section class="content mt-7">
        <!-- suggestion section -->
        <section class="mb-7">
          <h2 class="text-white mb-3 text-lg">Suggestion</h2>
          <div class="suggestion-box relative h-96 w-full">
            <div
              class="background-image rounded-3xl absolute left-0 top-0 w-full h-full z-10"
              :style="{ 'background-image' : `url(${API_IMAGE_BASE_URL}/w780${popularMovie.backdrop_path})` }"
            ></div>
            <div
              class="content z-20 absolute left-0 flex bottom-0 h-full w-full flex-col justify-end p-10"
            >
              <div class="movie-title-container">
                <h3 class="movie-title text-white text-5xl mb-7">{{ popularMovie.title }}</h3>
                <div class="flex items-center gap-6">
                  <primary-btn px="12px" py="16px">More Detail</primary-btn>
                  <add-to-watch-list-btn px="9px" py="9px" />
                </div>
              </div>
            </div>
          </div>
         </section>
      </section>   
</template>

<script setup>
import AddToWatchListBtn from '@/components/general/AddToWatchListBtn.vue';
import PrimaryBtn from '@/components/general/PrimaryBtn.vue';
import {API_BASE_URL,API_IMAGE_BASE_URL} from '@/constants/api-constants';
import {client} from '@/utils.js'
import { ref } from 'vue';


const popularMovie = ref('')
const res = client(`${API_BASE_URL}3/movie/popular`);
res.then(data => {
  popularMovie.value = data.results[0];
})

</script>

<style scoped>
.suggestion-box .background-image {
  background-position: center;
  background-size: cover;
  overflow: hidden;
}

.active-selector {
  color: #d91f27;
}

</style>