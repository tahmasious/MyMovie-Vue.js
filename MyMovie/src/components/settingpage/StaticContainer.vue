<template>
    <div
        class="rounded-2xl overflow-hidden bg-[#202228] w-full flex flex-col gap-3 justify-center p-2"
    >
        <h2 class="text-white font-bold text-center sm:text-4xl text-xl">
        {{value}}
        </h2>
        <h3 class="text-secondary text-center">{{ name }}</h3>
    </div>
</template>

<script setup>
defineProps(['value', 'name'])
</script>