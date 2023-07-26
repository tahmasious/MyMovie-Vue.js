<template>
    <a
    class="text-white text-lg rounded-2xl"
    :style="{padding : `${px} ${py}`}"
    :class="{'glss-bg' : isGlassy, 'normal-btn' : !isGlassy}"
    >
    <div v-if="!isInWatchList.data.value.watchlist">
        <img
            v-if="isLoading"
            src="@/assets/spinner.gif"
            alt="#"
            class="inline-block w-8 h-8"
        />
        <img
            v-else-if="data.success"
            @click="addToWatchList"
            src="@/assets/check.png"
            alt="#"
            class="inline-block w-6 h-6"
        />
        <img
            v-else
            @click="addToWatchList"
            src="@/assets/plus.png"
            alt="#"
            class="inline-block w-6 h-6"
        />
    </div>
    <img
        v-else
        @click="addToWatchList"
        src="@/assets/check.png"
        alt="#"
        class="inline-block w-6 h-6"
        />
    </a>
</template>

<script setup>
const props = defineProps({
        'px' : {
            type: String,
            default : '12px'
        },
        'py' : {
            type: String,
            default : '10px'
        },
        'isGlassy' : {
            default : false
        },
        'media_type' : {
            type : String
        },
        'media_id' : {
            type : Number
        }
    })

import {useFetch} from '@/composable/useFetch.js'
import { inject, onBeforeMount, watch } from 'vue';

const {data , isLoading, error,fetchWrapper} = useFetch([])
const isInWatchList = useFetch([])
const userData = inject('user');

onBeforeMount(()=> {
    isInWatchList.fetchWrapper(`3/${props.media_type}/${props.media_id}/account_states`)
})

watch(isInWatchList.data, ()=> {
    console.log(isInWatchList.data.value.watchlist);
})

function addToWatchList() {
    fetchWrapper(`3/account/${userData.value.id}/watchlist`, {'media_type': props.media_type, 'media_id': props.media_id, 'watchlist': true}, 'POST');
}

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

.normal-btn {
    background-color: rgba(255, 255, 255, 0.37);
}
</style>