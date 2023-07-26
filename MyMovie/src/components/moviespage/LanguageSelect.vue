<template>
    <p v-if="isLoading" class="text-white">Loading ...</p>
    <p v-else-if="error" class="text-white">error fetching data</p>
    <div class="language-select my-2">
        <h3 class="text-md text-slate-400 mb-1">Language</h3>
        <div>
        <select
            id="sort_by"
            name="sort_by"
            class="rounded-lg p-2 bg-secondary text-white w-full"
            @change="$emit('update:modelValue', $event.target.value)"
            >
            <option value="" selected>None Selected</option>
            <option v-for="(lang, index) in data" :key="index" :value="lang.iso_639_1">{{lang.english_name}}</option>
            <option value="fr">French</option>
        </select>
        </div>
    </div>
</template>

<script setup>
import {useFetch} from '@/composable/useFetch.js'
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
const {data ,isLoading, error, fetchWrapper} = useFetch([]); 
fetchWrapper(`3/configuration/languages`);
</script>