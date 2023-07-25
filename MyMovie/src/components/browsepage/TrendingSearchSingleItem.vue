<template>
    <router-link :to="{name : 'result', query : {'query' : title}}"
        class="flex justify-start gap-2 p-2 items-center mb-2 bg-secondary rounded-xl"
        >
        <img
        src="@/assets/trending.png"
        alt="trending icon"
        class="w-7"
        />
        <p class="text-white text-center w-full">
        {{ title }}
        </p>
    </router-link>   
</template>

<script setup>
defineProps(['title', 'media_type'])
</script>