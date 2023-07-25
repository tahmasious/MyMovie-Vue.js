<template>
    <MainLayOut>
        <main class="w-full p-8">
            <div class="flex justify-center py-4">
                <GlassySearchBar></GlassySearchBar>
            </div>
            <PeopleResultSection></PeopleResultSection>
            <MovieResultSection></MovieResultSection>
            <TVshowsResultsSection></TVshowsResultsSection>
        </main>
    </MainLayOut>
</template>

<script setup>
import MainLayOut from '@/components/general/MainLayOut.vue';
import MovieResultSection from '@/components/searchresultpage/MovieResultSection.vue';
import PeopleResultSection from '@/components/searchresultpage/PeopleResultSection.vue';
import TVshowsResultsSection from '@/components/searchresultpage/TVshowsResultsSection.vue';
import GlassySearchBar from '@/components/general/GlassySearchBar.vue'
</script>