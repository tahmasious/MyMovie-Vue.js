<template>
    <div class="profile-container gap-5 hidden sm:inline-flex items-center">
          <div class="inline notification">
            <a href="#">
              <!-- <strong class="text-[35px] text-primary">.</strong> -->
              <img
                class="inline w-6"
                src="@/assets/notification.png"
                alt="notification icon"
              />
            </a>
          </div>
          <div class="profile inline-flex items-center">
            <router-link :to="{name : 'setting'}"
              class="inline-block avatar-contaier p-1 border-[2.5px] border-primary rounded-full"
            >
              <img
                class="rounded-full inline-block w-[50px] h-[50px]"
                :src="Image"
                alt="avatar"
              />
            </router-link>
            <div class="username-container p-2">
              <span class="text-white">{{userInfo.username}}</span><br />
            </div>
          </div>
        </div>
</template>


<script setup>
import {API_IMAGE_BASE_URL} from '@/constants/api-constants';
import { computed, inject, ref } from 'vue';
import { RouterLink } from 'vue-router';
import profilePlaceHolder from '@/assets/profile_placeholder.png';
const userInfo = inject('user');

const Image = computed(() => {
  if (userInfo.value.avatar.tmdb.avatar_path == undefined){
        return profilePlaceHolder ;
    }else {
        return `${API_IMAGE_BASE_URL}/w185${userInfo.value.avatar.tmdb.avatar_path}`
    }
})



async function getProfilePic(data) {
    if (data.avatar.tmdb.avatar_path == undefined){
        const defaultProfile = await import('@/assets/profile_placeholder.png')
        return defaultProfile.default;
    }else {
        return `${API_IMAGE_BASE_URL}/w185${data.avatar.tmdb.avatar_path}`
    }
}
</script>