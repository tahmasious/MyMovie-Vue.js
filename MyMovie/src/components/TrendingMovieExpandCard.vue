<!-- <script>
import AddToWatchListBtn from './AddToWatchListBtn.vue';
import PrimaryBtn from './PrimaryBtn.vue';
export default {
    props : {
        'imdbRate' : String,
        'title' : String,
        'publishYear' : String,
        'backgroundImage' : String
    }
};
</script>    -->
<script setup>
import AddToWatchListBtn from './general/AddToWatchListBtn.vue';
import PrimaryBtn from './general/PrimaryBtn.vue';
defineProps(
    {
        'imdbRate' : String,
        'title' : String,
        'publishYear' : String,
        'backgroundImage' : String
    }
);
</script>
<template>
    <div
        :class="`bg-[url(${backgroundImage})]`"
        class="h-60 w-[23%] min-w-[14rem] bg-center bg-cover rounded-2xl overflow-hidden"
    >
        <div
        class="overlay bg-slate-800 bg-opacity-60 w-full h-full p-4 text-white flex flex-col justify-between"
        >
        <ImbdContainer :imdbRate="imdbRate"></ImbdContainer>
        <div class="movie-info">
            <h2>{{ title }}</h2>
            <span class="text-[#CCCCCC]">{{publishYear}}</span>
            <div class="flex justify-between items-center">
            <primary-btn />
            <add-to-watch-list-btn></add-to-watch-list-btn>
            </div>
        </div>
        </div>
    </div>
</template>

