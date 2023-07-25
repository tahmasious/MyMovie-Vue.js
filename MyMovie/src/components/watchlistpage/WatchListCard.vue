<template>
    <div
    class="watchlist-card bg-cover rounded-xl w-full"
    :style="
        {backgroundImage: `url(${API_IMAGE_BASE_URL}/w780${movie.backdrop_path})`}
    "
    >
    <div class="bg-[#3031367e] p-4 rounded-xl flex flex-col justify-end">
        <h2 class="font-bold text-lg text-white mt-16">
        {{ movie.title }}
        </h2>
        <h3 class="text-white">{{ new Date(movie.release_date).getFullYear() }}</h3>
        <div class="flex justify-between">
            <PrimaryBtn :to="{name : 'movieDetail', params : {id : movie.id}}"></PrimaryBtn>
            <RemoveFromWatchlistBtn media_type="movie" :media_id="movie.id" @removePushed="removeMovieFromList"/>
        </div>
    </div>
    
    </div>
</template>

<script setup>
import PrimaryBtn from '@/components/general/PrimaryBtn.vue'
import RemoveFromWatchlistBtn from '@/components/general/RemoveFromWatchlistBtn.vue'
import {API_IMAGE_BASE_URL} from '@/constants/api-constants';

defineProps(['movie'])

const emit = defineEmits('removeFromWatchList')
function removeMovieFromList(){
    emit('removeFromWatchList');
}

</script>

<style scoped>
.watchlist-card {
  background-position: center center;
}

</style>