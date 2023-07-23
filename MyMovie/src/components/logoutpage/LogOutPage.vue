<template>
    <main class="flex flex-col justify-center h-[100vh] m-auto">
      <div
        class="p-5 m-auto bg-[#202228] rounded-2xl inline-flex flex-col justify-center items-center text-white gap-2"
      >
        <img
          :src="LogOutIcon"
          alt="logout"
          class="h-32 w-32 p-2"
        />
        <p>Oh no you are leaving ...</p>
        <p>Are you sure ?</p>
        <router-link :to="{name : 'home'}"
          class="w-full bg-primary p-2 rounded-3xl text-center"
          >Nah! Just kidding</router-link
        >
        <button
          @click="clearSessionStorage"
          class="w-full border-2 border-white border-solid p-2 rounded-3xl text-center"
          >Yes, Log me out</button
        >
      </div>
    </main>
</template>

<script setup>
import LogOutIcon from '../../assets/logout-big.png'
import { useRouter } from 'vue-router';
import { inject } from 'vue';
const router = useRouter()
const logout = inject('logout');
console.log(logout);
function clearSessionStorage() {
    logout();
    router.replace({name : 'login'}) 
}
</script>

