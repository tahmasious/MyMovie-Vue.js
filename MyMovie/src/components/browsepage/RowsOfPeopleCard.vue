<template>
<section class="p-8">
    <div class="flex justify-between mb-3 items-center">
    <h2 class="text-white text-lg">Popular people</h2>
    </div>
    <div v-if="isLoading">
        LOADING ...
    </div>
    <div v-else-if="error"></div>
    <div v-else class="flex flex-wrap justify-between">
        <PeopleCard v-for="person in data.results.slice(0,6)" :key="person.id" 
            :name="person.name"
            :image-path="person.profile_path"
            :known-credit="person.popularity"
            :personID="person.id"
        />
    </div>
</section>    
</template>

<script setup>
import {API_BASE_URL} from '@/constants/api-constants'
import PeopleCard from './PeopleCard.vue';
import {useFetch} from '@/composable/useFetch.js'
import {onBeforeMount } from 'vue';
const {data ,isLoading, error, fetchWrapper} = useFetch(); 

onBeforeMount(async () => {
    await fetchWrapper(`${API_BASE_URL}3/person/popular`);
})
</script>