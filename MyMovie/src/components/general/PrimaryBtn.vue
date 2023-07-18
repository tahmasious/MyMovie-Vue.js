<!-- why padding doesn't work !!! -->
<template>
    <router-link :to="href"
    class="bg-primary rounded-xl inline-block text-white shadow-lg shadow-primary-dark text-sm"
    :style="{padding : `${px} ${py}`}"
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
        type : Object
    }
})
console.log(props.href);
</script>