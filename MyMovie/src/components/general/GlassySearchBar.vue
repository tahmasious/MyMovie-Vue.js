<template>
    <div class="search-container flex items-center gap-3 justify-end">
        <div
        class="searchbar border-[1.5px] border-secondary rounded-[20px] flex items-center p-2 text-secondary"
        >
        <img
            class="w-7 inline"
            src="@/assets/search.png"
            alt="search icon"
        />
        <form class="inline" action="./search-resault.html">
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

<style scoped>
.searchbar {
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.48);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.searchbar input {
  outline: none;
}
</style>

