<template>
    <div class="flex gap-3 h-full">
        <StaticContainer v-for="item in items" :key="item" :value="item.value" :name="item.name" />
    </div>
</template>

<script setup>
import StaticContainer from './StaticContainer.vue';
import {useFetch} from '@/composable/useFetch.js'
import { inject, ref, watch } from 'vue';
const items = ref()
const userInfo = inject('user');
const MovieRequest = useFetch([]); 
const TVRequest = useFetch([]); 
MovieRequest.fetchWrapper(`3/account/${userInfo.id}/rated/movies`);
TVRequest.fetchWrapper(`3/account/${userInfo.id}/rated/tv`);

watch([MovieRequest.data, TVRequest.data], () => {
   if(!MovieRequest.isLoading.value && !TVRequest.isLoading.value){
    items.value = [
        {
            'value' : MovieRequest.data.value.total_results + TVRequest.data.value.total_results,
            'name' : 'total rating'
        },
        {
            'value' : MovieRequest.data.value.total_results,
            'name' : 'Moive rating'
        },
        {
            'value' : TVRequest.data.value.total_results,
            'name' : 'TV rating'
        },
    ]
   }
})
</script>