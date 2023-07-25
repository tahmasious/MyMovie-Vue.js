<template>
    <MainLayOut> 
        <main class="w-[100%] p-8">
            <h2 class="text-white mb-3 text-lg">Watchlist</h2>
            <RowsOfWatchListCards></RowsOfWatchListCards>
        </main>
    </MainLayOut>
</template>

<script setup>
import MainLayOut from '@/components/general/MainLayOut.vue';
import RowsOfWatchListCards from '@/components/watchlistpage/RowsOfWatchListCards.vue';
</script>