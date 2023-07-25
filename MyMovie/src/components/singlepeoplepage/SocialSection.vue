<template>
<section>
    <h2 v-if="hasSocial" class="text-secondary mb-2">SOCIAL</h2>
    <div v-if="!isLoading" class="social-icons-container flex justify-start gap-5">
        <a target="_blank" v-if="data.twitter_id" :href="`https://twitter.com/${data.twitter_id}`">
        <img
            :src="twitterIcon"
            alt="twitter"
            class="w-9"
        />
        </a>
        <a target="_blank" v-if="data.facebook_id" :href="`https://facebook.com/${data.facebook_id}`">
        <img
            :src="facebookIcon"
            alt="twitter"
            class="w-9"
        />
        </a>
        <a target="_blank" v-if="data.instagram_id" :href="`https://instagram.com/${data.instagram_id}`">
        <img
            :src="instagramIcon"
            alt="twitter"
            class="w-9"
        />
        </a>
    </div>
</section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {useFetch} from '@/composable/useFetch.js'
import instagramIcon from '../../assets/social/instagram.png'
import facebookIcon from '../../assets/social/facebook.png'
import twitterIcon from '../../assets/social/twitter.png'
import { computed } from 'vue';
const route = useRoute(); 
const {data ,isLoading, error, fetchWrapper} = useFetch()
fetchWrapper(`3/person/${route.params.id}/external_ids`)
const hasSocial = computed(() => {
    if (!isLoading.value){
        return data.value.instagram_id || data.value.facebook_id || data.value.twitter_id
    }
    return false
})
</script>