<template>
    <section class="mb-6">
        <h2 class="text-secondary mb-2">NOTABLE CAST</h2>
        <div class="flex flex-wrap justify-start">
            <SingleCast  v-for="cast in data.cast.slice(0,10)" :key="cast.id" :personID="cast.id" :name="cast.name" :profile_path="cast.profile_path" />
        </div>
    </section>
</template>

<script setup>
import SingleCast from './SingleCast.vue';
import {useFetch} from '@/composable/useFetch.js'
import { useRoute } from 'vue-router';
import { watch } from 'vue';
const {data ,isLoading, error, fetchWrapper} = useFetch({'cast' : []})
const route = useRoute(); 
fetchWrapper(`3/movie/${route.params.id}/credits`)
</script>