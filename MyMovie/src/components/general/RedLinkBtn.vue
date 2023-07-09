<template>
    <a :href="href" class="text-primary text-center m-auto table" :target="target">{{text}}</a>
</template>

<script setup>

defineProps({
    text : {
        type : String
    },
    href : {
        type : String
    },
    target : {
        default : '_self'
    }
})
</script>
