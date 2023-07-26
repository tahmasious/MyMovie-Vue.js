<template>
        <label for="sort-type" class="hidden"
            >Choose a sorting type :</label
        >
        <select
            id="sort_by"
            name="sort_by"
            class="rounded-lg p-2 bg-secondary text-white w-full"
            @change="$emit('update:modelValue', $event.target.value)"
        >
            <option value="popularity.desc" selected>
            Popularity Descending
            </option>
            <option v-for="option in options" :value="option.value" :key="option">
                {{ option.name }}
            </option>
        </select>
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
const options = [
    {
        'value' : 'popularity.asc',
        'name' : 'Popularity Ascending'
    },
    {
        'value' : 'revenue.asc',
        'name' : 'Revenue Ascending'
    },
    {
        'value' : 'revenue.asc',
        'name' : 'Revenue Ascending'
    },
    {
        'value' : 'revenue.desc',
        'name' : 'Revenue Descending'
    },
    {
        'value' : 'primary_release_date.asc',
        'name' : 'Primary Release Date Ascending'
    },
    {
        'value' : 'primary_release_date.desc',
        'name' : 'Primary Release Date Descending'
    },
    {
        'value' : 'vote_average.asc',
        'name' : 'Vote Average Ascending'
    },
    {
        'value' : 'vote_average.desc',
        'name' : 'Vote Average Descending'
    },
    {
        'value' : 'vote_count.asc',
        'name' : 'Vote Count Ascending'
    },
    {
        'value' : 'vote_count.desc',
        'name' : 'Vote Count Descending'
    },
]
</script>