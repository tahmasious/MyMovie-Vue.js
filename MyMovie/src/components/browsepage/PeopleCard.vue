<template>
    <router-link :to="{name : 'person', params : {id : personID}}" class="thumbnail-image relative mb-3">
        <img
        :src="imageFinalPath"
        alt="movie poster"
        class="movie-poster w-[150px] h-[230px]"
        />
        <div
        class="overlay-desc absolute top-0 left-0 rounded-2xl w-full h-full p-3 flex items-center justify-between flex-col gap-1 transition-all opacity-0"
        >
        <div>
            <h3 class="text-white ml-1 text-center">{{name}}</h3>
        </div>
        <div>
            <div class="text-center">{{knownCredit}}</div>
            <div class="text-center">known credit</div>
        </div>
        </div>
    </router-link>
</template>

<script setup>
import {API_IMAGE_BASE_URL} from '@/constants/api-constants'
import { computed } from 'vue';
import defaultImage from '@/assets/profile_placeholder.png'
const props = defineProps(['name', 'knownCredit', 'imagePath', 'personID']);


const imageFinalPath = computed(() => {
    if (props.imagePath) {
        return `${API_IMAGE_BASE_URL}/w154${props.imagePath}`
    }
    return defaultImage;
})
</script>

<style scoped>
img.movie-poster {
    @apply bg-slate-50  w-[154px]  rounded-2xl border-transparent transition-all;
}
.overlay-desc {
  background-color: rgba(41, 41, 41, 0.7);
  color: white;
}

.thumbnail-image:hover .overlay-desc {
  opacity: 1;
}

</style>