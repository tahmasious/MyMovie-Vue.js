<template>
    <section class="media mb-6 w-full md:w-full">
        <h2 class="text-secondary mb-2">MEDIA</h2>
        <div
        class="selector-container mb-3 text-secondary flex justify-start gap-4 text-md"
        >
            <span @click="activeTab = 'Backdrops'" 
                :class="{'active-selector' : activeTab == 'Backdrops'}">
                Backdrops
            </span>
            <span @click="activeTab = 'Logos'" 
                  :class="{'active-selector' : activeTab == 'Logos'}">
                    Logos
            </span>
            <span @click="activeTab = 'Posters'" 
                :class="{'active-selector' : activeTab == 'Posters'}">
                Posters
            </span>
        </div>
        <div
        class="w-full scroller flex rounded-lg pb-2 overflow-x-scroll overflow-y-hidden whitespace-nowrap"
        >
            <img
            v-for="(img, index) in Images" :key="index"
            :src="`${API_IMAGE_BASE_URL}${BaseURLWidth}${img.file_path}`"
            alt="movie image"
            :class="{'movie-image-size' : activeTab == 'Backdrops',
                     'poster-image-size' : activeTab == 'Logos' || activeTab == 'Posters'
                    }" 
            />
        </div>
    </section>
</template>

<script setup>
import {useFetch} from '@/composable/useFetch.js'
import {API_BASE_URL , API_IMAGE_BASE_URL} from '@/constants/api-constants'
import { ref, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute(); 
const activeTab = ref('Backdrops')
const Images = ref([''])
const BaseURLWidth = ref('/w780')

const {data , isLoading, error,fetchWrapper} = useFetch()
fetchWrapper(`${API_BASE_URL}3/movie/${route.params.id}/images`)
watch([activeTab, isLoading], () => {
    if (!isLoading.value) {
        if (activeTab.value == 'Backdrops'){
            Images.value = data.value.backdrops;
            BaseURLWidth.value = `/w780`
        }else if (activeTab.value == 'Logos'){
            Images.value = data.value.logos;
            BaseURLWidth.value = `/w185`
        }else {
            Images.value = data.value.posters;
            BaseURLWidth.value = `/w185`
        }
    }
}, {immediate : true})
</script>

<style scoped>
.active-selector {
  color: #d91f27;
}

.scroller {
  -webkit-overflow-scrolling: touch;
}

.scroller::-webkit-scrollbar {
  margin-top: 10px;
  width: 5px;
  height: 8px;
  background-color: #16171b;
}

.scroller::-webkit-scrollbar-track {
  background: #16171b;
  margin-top: 10px;
  border-radius: 5px;
}

.scroller::-webkit-scrollbar-thumb {
  background: #494b57;
  border-radius: 5px;
}

.movie-image-size {
    width: 300px;
}

.poster-image-size {
    width: 120px;
}
</style>


