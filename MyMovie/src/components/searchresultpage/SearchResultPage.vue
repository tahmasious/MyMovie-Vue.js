<template>
    <MainLayOut>
        <main class="w-full p-8">
            <div class="flex justify-center py-4">
                <GlassySearchBar></GlassySearchBar>
            </div>
            <PeopleResultSection ref="PeopleSearchTemplateRef"></PeopleResultSection>
            <MovieResultSection ref="MovieSearchTemplateRef"></MovieResultSection>
            <TVshowsResultsSection ref="TVshowSearchTemplateRef"></TVshowsResultsSection>
        </main>

        <template #aside>
           <RightSideBar :counts="counts" /> 
        </template>
    </MainLayOut>
</template>

<script setup>
import MainLayOut from '@/components/general/MainLayOut.vue';
import MovieResultSection from '@/components/searchresultpage/MovieResultSection.vue';
import PeopleResultSection from '@/components/searchresultpage/PeopleResultSection.vue';
import TVshowsResultsSection from '@/components/searchresultpage/TVshowsResultsSection.vue';
import GlassySearchBar from '@/components/general/GlassySearchBar.vue'
import RightSideBar from '@/components/searchresultpage/RightSideBar.vue'
import { onMounted, ref } from 'vue';
const PeopleSearchTemplateRef = ref('')
const MovieSearchTemplateRef = ref('')
const TVshowSearchTemplateRef = ref('')

const counts = ref('')

onMounted(()=> {
    counts.value = [
        { title : 'Movies' , count :  MovieSearchTemplateRef.value.getResultCount()},
        { title : 'People' , count :  PeopleSearchTemplateRef.value.getResultCount() },
        { title : 'TVshows' ,  count : TVshowSearchTemplateRef.value.getResultCount()},
]
})
</script>