<template>
    <div
        class="rate text-white text-lg glss-bg rounded-2xl py-[10px] px-3 relative z-10"
    >
        <img
        src="@/assets/rate.png"
        alt="rate btn"
        class="inline-block w-6 h-6"
        />
        <div
        class="rate-box bg-white-glass p-3 hidden absolute w-[200px] left-[-100px]"
        >
        <div v-if="error">
            Error has happend ...
        </div>
        <div v-else-if="data.success">
            Rate submitted successfully
        </div>
        <div v-else class="flex-col items-center">
            <p class="text-sm">How do you rate this movie ?</p>
            <div class="star-box flex">
                <img
                v-for="n in 5" :key="n"
                src="@/assets/rate.png"
                alt="rate btn"
                class="inline-block w-6 h-6"
                @click="submitRate(n * 2)"
                @mouseover="changeColor(n)"
                @mouseleave="resetColors"
                />
            </div>
        </div>
        </div>
    </div>
</template>
<script setup>
import {useFetch} from '@/composable/useFetch.js'
import {API_BASE_URL} from '@/constants/api-constants'
import { useRoute } from 'vue-router';

const route = useRoute(); 

const {data , isLoading, error,fetchWrapper} = useFetch([])
const sessionID = sessionStorage.getItem('session_id')



function submitRate(val) {
    fetchWrapper(`${API_BASE_URL}3/movie/${route.params.id}/rating?session_id=${sessionID}`, {'value' : val}, 'POST');
}

function changeColor(val) {
    const elements = document.querySelectorAll(`.star-box img:not(:nth-child(n+${val+1}))`) 
    elements.forEach((item) => item.classList.add("red-start"))
}

function resetColors() {
    const elements = document.querySelectorAll(`.star-box img`) 
    elements.forEach((item) => item.classList.remove("red-start"))
}

</script>
<style scoped>
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
.red-start {
    filter: invert(1);
}
</style>