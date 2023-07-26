<template>
 <!-- profile statics  -->
 <div
    class="w-full sm:w-[300px] rounded-2xl overflow-hidden bg-[#202228]"
>
    <img
    :src="Image"
    alt="user profile image"
    class="h-[150px] w-full object-cover"
    />
    <h1 class="text-center text-white mt-4 mb-0 text-lg">
    {{userInfo.username}}
    </h1>
    <h2 class="text-sm text-secondary text-center">@tahmasious</h2>
    <div
    class="flex justify-around items-center text-white my-4"
    >
    Member since ??
    </div>
    <hr class="w-[90%] m-auto bg-secondary h-px border-0" />
    <a href="https://www.themoviedb.org/settings/profile" class="m-auto my-4 table text-primary">
    Change info
    </a>
</div>  
</template>

<script setup>
import {API_IMAGE_BASE_URL} from '@/constants/api-constants';
import { computed, inject } from 'vue';
import profilePlaceHolder from '@/assets/profile_placeholder.png';
const userInfo = inject('user');

const Image = computed(() => {
  if (userInfo.value.avatar.tmdb.avatar_path == undefined){
        return profilePlaceHolder ;
    }else {
        return `${API_IMAGE_BASE_URL}/w185${userInfo.value.avatar.tmdb.avatar_path}`
    }
})
</script>