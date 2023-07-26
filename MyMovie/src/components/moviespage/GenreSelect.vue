<template>
    <button @click.prevent="reactToArray"
        :class="{'genre-selector-active' : isActive, 'genre-selector-inactive' : !isActive}"
    >{{name}}</button>
</template>

<script setup>
import { ref } from "vue"

defineProps(['modelValue','name'])
const emit = defineEmits(['changeArrayOfGenres'])

function reactToArray() {
    isActive.value = !isActive.value
    emit('changeArrayOfGenres')
}

const isActive = ref(false)


</script>

<style scoped>
.genre-selector-active {
    @apply mb-1 mr-1 p-1 px-2 bg-primary rounded-2xl text-white inline-block text-sm;
  }
  .genre-selector-inactive {
    @apply mb-1 p-1 px-2 bg-secondary rounded-2xl text-white inline-block text-sm;
  }
</style>