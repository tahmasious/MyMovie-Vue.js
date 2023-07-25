import { computed, ref } from "vue";
import { client } from '@/utils.js'
import {API_BASE_URL} from '@/constants/api-constants'
import {useFetch} from '@/composable/useFetch.js'
import {onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

export function useSearch(){
    const {data ,isLoading, error, fetchWrapper} = useFetch(); 
    async function doSearch(url, string, page = 1){
        const params = new URLSearchParams()
        params.append('query', string)
        params.append('page', page)
        await fetchWrapper(`${url}?${params}`);
    }
    const resultCount = computed(() => {
        return data.value.total_results
    })
    return {data ,isLoading, error, resultCount, doSearch}
}