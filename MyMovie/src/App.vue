<template>
  <MainMovieCardVue :genreID="obj.genre_ids[0]" :title="obj.title" :src="obj.poster_path" :rating="obj.vote_average" :releaseDate="obj.release_date"></MainMovieCardVue>
  <!-- <SideBarMoiveCard title="sag" coverImage="../src/assets/TLOU.jpg" :genres="['hello', 'pass']"></SideBarMoiveCard> -->
</template>

<script setup>
import LogoContainerVue from './components/general/LogoContainer.vue';
import NavBarItem from './components/general/NavBarItem.vue';
import SideBarMoiveCard from './components/general/SideBarMoiveCard.vue';
import RemoveFromWatchlistBtn from './components/general/RemoveFromWatchlistBtn.vue'
import RedLinkBtn from './components/general/RedLinkBtn.vue';
import ImbdContainer from './components/general/ImbdContainer.vue';
import MainMovieCardVue from './components/general/MainMovieCard.vue';
const obj =  
{
  "adult": false,
  "backdrop_path": "/27u4kBGGOQLqizEudJAOWMkvhip.jpg",
  "genre_ids": [
    28,
    80,
    53
  ],
  "id": 385687,
  "original_language": "en",
  "original_title": "Fast X",
  "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
  "popularity": 3576.187,
  "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
  "release_date": "2023-05-17",
  "title": "Fast X",
  "video": false,
  "vote_average": 7.3,
  "vote_count": 2382
}
import {client} from './utils';
const res = client('https://api.themoviedb.org/3/genre/movie/list');
res.then(data => console.log(data))
</script>

<style scoped>
</style>
