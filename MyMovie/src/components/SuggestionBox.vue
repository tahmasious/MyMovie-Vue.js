<template>
 <section class="content mt-7">
        <!-- suggestion section -->
        <section class="mb-7">
          <h2 class="text-white mb-3 text-lg">Suggestion</h2>
          <div class="suggestion-box relative h-96 w-full">
            <div
              class="background-image rounded-3xl absolute left-0 top-0 w-full h-full z-10"
              :style="{ 'background-image' : 'url(' + backgroundImage + ')' }"
            ></div>
            <div
              class="content z-20 absolute left-0 flex bottom-0 h-full w-full flex-col justify-end p-10"
            >
              <div class="movie-title-container">
                <h3 class="movie-title text-white text-5xl">{{ title }}</h3>
                <h4 class="mb-7 text-gray-300">{{ description }}</h4>
                <div class="flex items-center gap-6">
                  <primary-btn>More Detail</primary-btn>
                  <add-to-watch-list-btn />
                </div>
              </div>
            </div>
          </div>
         </section>
      </section>   
</template>

<script setup>
import AddToWatchListBtn from './general/AddToWatchListBtn.vue';
import PrimaryBtn from './general/PrimaryBtn.vue';
defineProps([
  'backgroundImage',
  'title',
  'description'
])
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