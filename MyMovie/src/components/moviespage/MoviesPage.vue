<template>
    <MainLayOut> 
        <main class="w-[100%] p-8">
            <p v-if="isLoading" class="text-white">Loading</p>
            <p v-else-if="error">error</p>
            <div v-else>
                <RowOfMainMovieCard :movies="results">Popular</RowOfMainMovieCard>
            </div>
            <div class="flex justify-center p-4">
                <PrimaryBtn @click.prevent="page++">Load More</PrimaryBtn>
            </div>
        </main>
        <template #aside>
           <RightSideBar @apply-filter="filter" /> 
        </template>
    </MainLayOut>
</template>

<script setup>
import MainLayOut from '@/components/general/MainLayOut.vue';
import RowsOfCustomPeople from '@/components/peoplepage/RowsOfCustomPeople.vue';
import RowOfMainMovieCard from '@/components/general/RowOfMainMovieCard.vue'
import {useFetch} from '@/composable/useFetch.js'
import RightSideBar from '@/components/moviespage/RightSideBar.vue'
import PrimaryBtn from '@/components/general/PrimaryBtn.vue'
import { ref, watch } from 'vue';
const {data ,isLoading, error, fetchWrapper} = useFetch([]); 
const results = ref([])
const page = ref(1)
const params = ref('')
function filter(value) {
    params.value = value
}
watch([page, params], ([newPage, newParam], [oldPage, oldParams]) => {
    if (oldPage > newPage){
        return   
    }
    if (newParam != oldParams) {
        page.value = 1
        results.value.length = 0
    }
    let url = `3/discover/movie?page=${page.value}`
    if (`${params.value}`) {
        url = `${url}&${params.value}`
    }
    fetchWrapper(`${url}`);
}, {immediate : true})


watch(data, ()=> {
    if (!isLoading.value){
        results.value.push(...(data.value.results))
        console.log(data.value);
    }
})
</script>