<template>
    <aside class="w-[25%] p-4 hidden sm:block">
      <!-- Trending searches -->
      <section class="flex flex-col gap-8 sticky top-10">
        <h2 class="text-white">Trending searches :</h2>
        <div class="container">
          <TrendingSearchSingleItem v-for="item in trendingList" :key="item.id" :media_type="item.media_type" :title="item.media_type =='movie' ? item.title : item.name" />
        </div>
      </section>
    </aside>
</template>

<script setup>
import {API_BASE_URL} from '@/constants/api-constants';
import {client} from '@/utils.js'
import { ref } from 'vue';
import TrendingSearchSingleItem from './TrendingSearchSingleItem.vue';


const trendingList = ref('')
const res = client(`${API_BASE_URL}3/trending/all/day?language=en-US`);
res.then(data => {
    trendingList.value = data.results.slice(0,7);
})
</script>