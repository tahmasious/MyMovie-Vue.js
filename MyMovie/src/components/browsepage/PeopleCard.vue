<template>
    <a class="thumbnail-image relative mb-3" href="./people-retrieve.html">
        <img
        :src="`${API_IMAGE_BASE_URL}/w154${imagePath}`"
        alt="movie poster"
        class="movie-poster"
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
    </a>
</template>

<script setup>
import {API_IMAGE_BASE_URL} from '@/constants/api-constants'
const props = defineProps(['name', 'knownCredit', 'imagePath']);
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