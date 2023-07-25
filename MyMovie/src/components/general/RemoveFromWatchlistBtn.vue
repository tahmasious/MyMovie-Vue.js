<template>
    <button
    @click="removeFromWatchList"
    class="text-white text-lg bg-[#ffffff5e] rounded-2xl"
    :style="{paddingTop : py, paddingBottom: py, paddingRight: px, paddingLeft: px}"
    >
    <img
        v-if="isLoading"
        src="@/assets/spinner.gif"
        alt="remove btn"
        class="inline-block w-8 h-8 rotate-[45deg]"
    />
    <img
        v-else-if="data.success"
        src="@/assets/check.png"
        alt="remove btn"
        class="inline-block w-6 h-6"
    />
    <img
        v-else
        @click="addToWatchList"
        src="@/assets/plus.png"
        alt="remove btn"
        class="inline-block w-6 h-6 rotate-[45deg]"
    />
    </button>
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
        'media_type' : {
            type : String
        },
        'media_id' : {
            type : Number
        }
    })

import {useFetch} from '@/composable/useFetch.js'
import { inject, watch } from 'vue';
const {data , isLoading, error,fetchWrapper} = useFetch([])

const emit = defineEmits(['removePushed'])

const userData = inject('user');
function removeFromWatchList() {
    fetchWrapper(`3/account/${userData.value.id}/watchlist`, {'media_type': props.media_type, 'media_id': props.media_id, 'watchlist': false}, 'POST');
}
watch(data, () => {
    if (data.value.success) {
        emit('removePushed');
    }
})
</script>
