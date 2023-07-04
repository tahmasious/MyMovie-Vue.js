<template>
    <div class="movie-container flex justify-start gap-2 my-2">
        <div class="movie-poster-container">
        <img
            :src="coverImage"
            alt=""
            class="w-16 rounded-2xl"
        />
        </div>
        <div class="movie-info-container flex flex-col justify-between">
        <div class="movie-name-container">
            <h2 class="text-white">{{ title }}</h2>
            <h3 class="text-secondary" >{{ getGenres() }}</h3>
        </div>
        <div class="movie-imdb-container text-white">
            <div
            class="imdb rounded-2xl bg-slate-400 inline-block px-1 py-0"
            >
            <img
                src="../assets/imdb.png"
                alt="imdb icon"
                class="w-6 inline-block rounded-md"
            />
            <span>{{ imdbRate }}</span>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    'coverImage' : {
        type : String
    },
    'title' : {
        type : String,
    },
    'genres' : {
        type : Array 
    },
    'imdbRate' : {
        type : Number
    }
})

function getGenres() {
    let result = '';
    let i = 0;
    for(; i < props.genres.length - 1; i++)
        result = result + (props.genres[i] + ', ');
    result = result + (props.genres[i]);
    return result;
}
</script>