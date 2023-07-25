<template>
    <section>
        <div class="flex justify-between mb-3 items-center">
        <h2 class="text-white text-lg">Related people</h2>
        </div>
        <div v-if="isLoading">
            LOADING ...
        </div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else class="flex flex-wrap justify-between">
            <PeopleCard v-for="person in showingResults.slice(0, showingCount)" :key="person.id" 
                :person="person"
            />
            <p v-if="resultCount == 0" class="text-white" >Nothing found :(</p>
            <div v-else class="w-[120px] text-center m-auto">
                <button
                    @click.prevent="showingCount+=5" 
                    class=" bg-primary rounded-xl text-white shadow-lg shadow-primary-dark text-sm p-4 m-auto">
                    Load More
                </button>
            </div>
        </div>
</section>  
</template>

<script setup>
import PeopleCard from '@/components/browsepage/PeopleCard.vue';
import {useSearch} from '@/composable/useSearch.js'
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute(); 
const showingResults = ref([])
const showingCount = ref(5)
const showingPage = ref(1)
const {data ,isLoading, error, resultCount, doSearch} = useSearch();
watch(showingCount, () => {
    const tempNumber = Math.floor(showingCount.value / data.value.results.length)
    if (tempNumber != showingPage.value){
        showingPage.value++
    }
})

watch(showingPage, () => {
    doSearch('3/search/person', route.query.query, showingPage.value)
}, {immediate : true})

watch(route, () => {
    showingResults.value.length = 0 ;
    showingPage.value = 1
    doSearch('3/search/person', route.query.query, showingPage.value)
})


watch(data, ()=> {
    if(!isLoading.value){
        showingResults.value.push(...(data.value.results));
    }
})

function getResultCount() {
    return resultCount
}

defineExpose({
    getResultCount
})
</script>