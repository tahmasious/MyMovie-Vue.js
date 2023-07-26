<template>
    <aside class="w-[25%] p-4 hidden sm:block">
      <section class="flex flex-col gap-8 sticky top-5">
        <section>
          <h2 class="mb-4 text-white">Sorting</h2>
          <form @submit.prevent="calculateQueryParams">
            <SortingTypeSelect v-model="selectedSortType" />
            <h2 class="text-white my-2">Filtering</h2>
            <div class="genre-selector my-2">
              <h3 class="text-md text-slate-400 mb-1">Genre</h3>
              <div>
                <GenreSelect v-for="(genre, index) in allGenres" 
                @change-array-of-genres="selectedGenres.includes(genre) ? selectedGenres.splice(selectedGenres.indexOf(genre), 1) : selectedGenres.push(genre)"
                :key="index" 
                class="genre-selector-active" 
                :name="genre.name"
                />
              </div>
            </div>
            <LanguageSelect v-model="selectedLang" />
            <section class="flex justify-center items-center">
              <input
                type="submit"
                value="apply"
                class="bg-primary text-white p-3 rounded-3xl"
              />
            </section>
          </form>
        </section>
      </section>
    </aside>
</template>

<script setup>
import { inject, ref } from 'vue';
import { GENRES } from '@/keys';
import GenreSelect from './GenreSelect.vue';
import LanguageSelect from './LanguageSelect.vue';
import SortingTypeSelect from './SortingTypeSelect.vue';
const selectedGenres = ref([])
const selectedLang = ref()
const selectedSortType = ref()
const allGenres = inject(GENRES)

const emit = defineEmits(['applyFilter'])
function calculateQueryParams() {
  const params = new URLSearchParams()
  if (selectedLang.value) {
    params.append('language', selectedLang.value)
  }
  if (selectedSortType.value) {
    params.append('sort_by', selectedSortType.value)
  }
  if (selectedGenres.value.length) {
    let final_query = ''
    for(const genre of selectedGenres.value){
      final_query = `${genre.id},${final_query}`
    }
    params.append('with_genres', final_query.slice(0,-1))
  }
  emit('applyFilter', params)
}
</script>

