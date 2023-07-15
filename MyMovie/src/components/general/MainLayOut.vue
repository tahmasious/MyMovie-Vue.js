<template>
    <div class="bg-slate-500 flex">    
      <slot name="nav">
        <main-left-side-bar/> 
      </slot>
      <slot>
        <main class="w-[100%] p-8">
            <h1 class="text-white">Error fetching page</h1>
        </main>
      </slot>
      <slot name="aside">
        <main-right-side-bar /> 
      </slot>
    </div>
</template>

<script setup>
import MainRightSideBar from '@/components/general/MainRightSideBar.vue';
import MainLeftSideBar from '@/components/general/MainLeftSideBar.vue';
</script>


<style scopted>
main {
    @apply min-h-screen;
}

main {
  background: rgb(26, 28, 32);
  background: -moz-linear-gradient(
    180deg,
    rgba(26, 28, 32, 1) 0%,
    rgba(27, 26, 31, 1) 23%,
    rgba(23, 24, 28, 1) 50%,
    rgba(22, 21, 26, 1) 75%,
    rgba(21, 22, 26, 1) 90%,
    rgba(20, 19, 24, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(26, 28, 32, 1) 0%,
    rgba(27, 26, 31, 1) 23%,
    rgba(23, 24, 28, 1) 50%,
    rgba(22, 21, 26, 1) 75%,
    rgba(21, 22, 26, 1) 90%,
    rgba(20, 19, 24, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(26, 28, 32, 1) 0%,
    rgba(27, 26, 31, 1) 23%,
    rgba(23, 24, 28, 1) 50%,
    rgba(22, 21, 26, 1) 75%,
    rgba(21, 22, 26, 1) 90%,
    rgba(20, 19, 24, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1a1c20",endColorstr="#141318",GradientType=1);
}
</style>