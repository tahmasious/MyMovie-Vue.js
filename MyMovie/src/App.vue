<template>
  <div class="bg-[#19191E]">
    <MainLeftSideBar active-page="Logout"></MainLeftSideBar>
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
MainLeftSideBar
import {client} from './utils'
import { ref } from 'vue';
import MainLeftSideBar from './components/general/MainLeftSideBar.vue';
const objs = ref('');
const res = client('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
res.then(data => objs.value = data.results)

</script>

<style scoped>
</style>
