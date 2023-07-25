<template>
    <MainLayOut>
        <main class="w-full">
            <section class="content p-16 pb-0">
                <div class="w-full sm:flex block items-start gap-7 mb-6">
                    <img
                        :src="`${API_IMAGE_BASE_URL}/w342${data.profile_path}`"
                        alt="celeb profile"
                        class="rounded-3xl w-ful sm:w-[25%] sticky top-3"
                    />
                    <div class="bio">
                        <h1 class="mb-4 text-white text-[30px]">{{ data.name }}</h1>
                        <h2 class="text-secondary mb-2">BIO</h2>
                        <p class="text-white mb-2">
                         {{ data.biography }}
                        </p>
                        <SocialSection />
                    </div>
                </div>
            </section>
            <RowsOfKnownForMovies />
        </main>
        <template #aside>
            <RightSideBar :peopleObject="data" /> 
        </template>
    </MainLayOut>
</template>

<script setup>
import { useRoute } from 'vue-router';
import MainLayOut from '@/components/general/MainLayOut.vue';
import RightSideBar from '@/components/singlepeoplepage/RightSideBar.vue'
import {useFetch} from '@/composable/useFetch.js'
import { API_IMAGE_BASE_URL} from '@/constants/api-constants'
import { watch } from 'vue';
import SocialSection from '@/components/singlepeoplepage/SocialSection.vue'
import RowsOfKnownForMovies from '../../components/singlepeoplepage/RowsOfKnownForMovies.vue';
const route = useRoute(); 
const {data ,isLoading, error, fetchWrapper} = useFetch({})

watch(() => route.params.id , () => {
    fetchWrapper(`3/person/${route.params.id}`)
}, {immediate : true})


</script>

<style scoped>

</style>