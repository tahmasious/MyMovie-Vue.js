<template>
<div class="rounded-2xl bg-[#202228] w-full p-6">
    <div class="flex justify-between">
        <h2 class="text-2xl text-white mb-2">Most Watched Genres</h2>
    </div>
    <div
        class="bg-secondary rounded-2xl h-2 w-full mb-3 flex justify-start"
    >
        <!-- a genre bar  -->
        <div class="movie-genre-bar bg-primary rounded-l-2xl h-2 w-[40%]">
        <div
            class="bg-slate-500 text-white justify-center p-3 rounded-xl hidden relative top-3"
        >
            Adventure
        </div>
        </div>
        <!-- a genre bar  -->
        <div class="movie-genre-bar bg-[#A70000] h-2 w-[20%]">
        <div
            class="bg-slate-500 text-white justify-center p-3 rounded-xl hidden relative top-3"
        >
            action
        </div>
        </div>
        <!-- a genre bar  -->
        <div class="movie-genre-bar bg-[#FF5252] h-2 w-[25%]">
        <div
            class="bg-slate-500 text-white justify-center p-3 rounded-xl hidden relative top-3"
        >
            horror
        </div>
        </div>
        <!-- a genre bar  -->
        <div class="movie-genre-bar bg-[#FF7B7B] h-2 w-[10%]">
        <div
            class="bg-slate-500 text-white justify-center p-3 rounded-xl hidden relative top-3"
        >
            comedy
        </div>
        </div>
        <!-- a genre bar  -->
        <div class="movie-genre-bar bg-[#FFBABA] rounded-r-xl h-2 w-[5%]">
        <div
            class="bg-slate-500 text-white justify-center p-3 rounded-xl hidden relative top-3"
        >
            Others
        </div>
        </div>
    </div>
    </div>
</template>

<style scoped>
.movie-genre-bar {
    @apply flex justify-center;
  }
  .movie-genre-bar:hover div {
  display: flex;
}

.movie-genre-bar div {
  width: 100px;
  height: 50px;
}

</style>