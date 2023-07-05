<template>
    <div>
        <div
        class="imdb rounded-2xl bg-slate-400 inline-block px-1 py-0"
        :style="{color : textColor}"
        >
        <img
            src="../../assets/imdb.png"
            alt="imdb icon"
            class="w-6 inline-block rounded-md"
        />
        <span>{{ imdbRate }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    'imdbRate' : {
        type : String
    },
    'textColor' : {
        default : 'black'
    }
})
</script>