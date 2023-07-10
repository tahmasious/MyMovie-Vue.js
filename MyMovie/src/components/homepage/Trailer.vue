<script setup>
import {API_IMAGE_BASE_URL} from '@/constants/api-constants'
defineProps(
    {
        title : String,
        imageBackground : String
    }
)
</script>

<template>
    <div class="trailer-container">
        <div
        :style="{ 'background-image' : `url(${API_IMAGE_BASE_URL}/w780${imageBackground})` }"
        class="h-40 w-[23%] min-w-[14rem] bg-center bg-cover rounded-2xl overflow-hidden"
        >
        <div
            class="overlay bg-slate-800 bg-opacity-60 w-full h-full p-4 text-white flex flex-col justify-center"
        >
            <div class="flex justify-center">
            <div
                class="bg-slate-200 bg-opacity-20 inline-block p-3 rounded-full"
            >
                <img
                src="@/assets/play-btn.png"
                alt="play btn"
                class="w-6 h-6"
                />
            </div>
            </div>
        </div>
        </div>
        <div class="pt-2 text-white">{{title}}</div>
    </div>
</template>

