import { ref } from "vue";
import { client } from '@/utils.js'

export function useFetch(init = null){
    const isLoading = ref('')
    const error = ref('')
    const data = ref(init)

    async function fetchWrapper(url, ops, method = 'GET') {
        try {
            error.value = null
            isLoading.value = true
            const res = await client(url, ops, method)
            data.value = res ;
        } catch(err) {
            error.value = err.message;
        } finally {
            isLoading.value = false
        }
    }

    return {data ,isLoading, error, fetchWrapper}
}