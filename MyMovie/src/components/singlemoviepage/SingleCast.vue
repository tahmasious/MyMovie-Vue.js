<template>
    <router-link :to="{name : 'person', params : {id : personID}}" class="inline-flex flex-col justify-start items-center mx-3 w-32 mb-4">
        <img
            :src="profileImage"
            alt="cast profile"
            class="w-[55px] h-[55px] rounded-full object-cover"
        />
        <span class="text-white text-sm">{{ name }}</span>
    </router-link>
</template>

<script setup>
import { API_IMAGE_BASE_URL} from '@/constants/api-constants'
import { computed } from 'vue'
import defaultProfileIMage from '@/assets/profile_placeholder.png'
const props = defineProps(['profile_path', 'name', 'personID'])

const profileImage = computed(() => {
    if (props.profile_path){
        return `${API_IMAGE_BASE_URL}/w185${props.profile_path}`
    }
    return defaultProfileIMage;
})
</script>