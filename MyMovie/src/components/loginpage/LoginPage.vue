<template>
    <main class="flex justify-center">
      <section
        class="inline-flex flex-col justify-center h-[100vh] m-auto items-center w-[300px]"
      >
        <div
          class="logo-container mb-4 flex items-center gap-2 justify-center content-center"
        >
          <img
            :src="Logo"
            alt="mymovie logo"
            class="logo inline-block w-[80px] h-[80px]"
          />
          <div class="divider bg-slate-700 w-px h-[40px]"></div>
          <h1 class="text-white text-[24px]">
            My movie<strong class="text-[35px] text-primary">.</strong>
          </h1>
        </div>
        <div v-if="inject('is_logged')">
          <h1 class="text-white text-3xl">Already logged in !</h1>
        </div>
        <form
          v-else
          @submit.prevent="signin"
          class="flex flex-col items-center gap-2 justify-center content-center text-secondary w-full"
        >
          <label for="username" class="hidden"></label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            class="border-[3px] border-primary rounded-3xl block bg-transparent p-3 outline-none w-full"
            v-model="username"
            />
          <p class="error" id="username"></p>
          <label for="password" class="hidden"></label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            class="border-[3px] border-primary rounded-3xl block bg-transparent p-3 outline-none w-full"
            v-model="password"
            />
          <p class="error" id="password">{{ err }}</p>
          <input type="submit" class="bg-primary text-white p-2 rounded-3xl" />
        </form>
        <a
          href="https://www.themoviedb.org/signup"
          class="text-primary text-sm text-center p-5 inline-block"
          >Sign Up</a
        >
      </section>
    </main>
</template>

<script setup>
import Logo from '@/assets/logo.png'
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter()
const err = ref('') ;
const login = inject('login');
async function signin() {
    try {
        await login(username.value, password.value)
        router.push({name : 'home'})
    }catch({message}) {
        err.value = message ;
    } 
}

</script>