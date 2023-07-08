<template>
  <div class="bg-[#19191E]">
    <RowsOfOptionedMovieCards 
    :options="
    {'Top Rated' : 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', 
    'Up comming' : 'https://api.themoviedb.org/3/movie/upcoming', 
    'Now playing' : 'https://api.themoviedb.org/3/movie/now_playing'}">
      Movies
    </RowsOfOptionedMovieCards>
  </div>
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
import RowOfMainMovieCard from './components/general/RowOfMainMovieCard.vue'
import MainRightSideBar from './components/general/MainRightSideBar.vue';

import {client} from './utils'
import { ref } from 'vue';
import MainLeftSideBar from './components/general/MainLeftSideBar.vue';
import MainLayOut from './components/general/MainLayOut.vue';
import RowsOfOptionedMovieCards from './components/general/RowsOfOptionedMovieCards.vue';
const objs = ref('');
const res = client('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
res.then(data => {
  console.log(data)
  return objs.value = data.results})

</script>

<style scoped>
body {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
</style>
