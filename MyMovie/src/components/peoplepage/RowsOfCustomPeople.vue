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
            <PeopleCard v-for="person in listOfMovies" :key="person.id" 
                :person="person"
            />
        </div>
        <div class="flex justify-center p-4">
            <PrimaryBtn @click="page++">Load More</PrimaryBtn>
        </div>
    </section>    
</template>
    
<script setup>
import {API_BASE_URL} from '@/constants/api-constants'
import PeopleCard from '@/components/browsepage/PeopleCard.vue';
import PrimaryBtn from '@/components/general/PrimaryBtn.vue';
import {useFetch} from '@/composable/useFetch.js'
import { ref, watch } from 'vue';
const {data ,isLoading, error, fetchWrapper} = useFetch([]); 

const page = ref(1)
const listOfMovies = ref([])

watch(page,async () => {
    await fetchWrapper(`${API_BASE_URL}3/person/popular?page=${page.value}`);
    listOfMovies.value.push(...data.value.results)
},{immediate : true})
</script>