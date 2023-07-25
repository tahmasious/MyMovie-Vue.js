<!-- why padding doesn't work !!! -->
<template>
    <router-link :to="href"
    class="bg-primary rounded-xl text-white shadow-lg shadow-primary-dark text-sm flex flex-col justify-center"
    :style="{padding : `${py} ${px}`}"
    ><slot>More Detail</slot>
    </router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
    'px' : {
        type: String,
        default : '16px'
    },
    'py' : {
        type: String,
        default : '12px'
    },
    'href' : {
        type : Object,
        default : '#'
    }
})
</script>