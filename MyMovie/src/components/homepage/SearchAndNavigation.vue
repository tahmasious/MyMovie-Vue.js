<template>
    <div class="search-container items-center gap-3 hidden sm:inline-flex">
          <a href="#" class="inline-flex items-center gap-3">
            <img
              class="rotate-180 inline w-4"
              src="@/assets/arrow.png"
              alt="arrow-left"
              @click="goBack"
            />
            <img
              class="inline w-4"
              src="@/assets/arrow.png"
              alt="arrow-right"
              @click="goForward"
            />
          </a>
          <div
            class="searchbar border-[2.5px] border-secondary rounded-[20px] flex items-center p-2 text-secondary"
          >
            <img
              class="w-7 inline"
              src="@/assets/search.png"
              alt="search icon"
            />
            <form class="inline" action="#">
              <input
                class="inline bg-transparent placeholder-secondary"
                placeholder="Search..."
                type="text"
                name="q"
              />
            </form>
          </div>
        </div>
</template>

<script setup>
function goBack() {
    window.history.back();
}
function goForward() {
    window.history.forward();
}
</script>

<style scoped>
.searchbar input {
  outline: none;
}
</style>