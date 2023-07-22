<template>
    <aside class="w-[25%] p-5 hidden sm:block">
      <section class="flex flex-col gap-8 sticky top-5">
        <!-- top rated movies bar -->
        <section>
          <h2 class="mb-4 text-primary">Personal info</h2>
          <div class="my-2">
            <h3 class="text-white"><b>Known For</b></h3>
            <span class="text-secondary">{{peopleObject.known_for_department}}</span>
          </div>
          <div class="my-2">
            <h3 class="text-white"><b>Known Credits</b></h3>
            <span class="text-secondary">{{peopleObject.popularity}}</span>
          </div>
          <div class="my-2">
            <h3 class="text-white"><b>Gender</b></h3>
            <span class="text-secondary">{{genderToString[peopleObject.gender]}}</span>
          </div>
          <div class="my-2">
            <h3 class="text-white"><b>Birthday</b></h3>
            <span class="text-secondary">{{ peopleObject.birthday }}</span>
          </div>
          <div class="my-2">
            <h3 class="text-white"><b>Place of Birth</b></h3>
            <span class="text-secondary">{{ peopleObject.place_of_birth }}</span>
          </div>
          <div class="my-2">
            <h3 class="text-white"><b>Also Known As</b></h3>
            <div class="text-secondary" 
            v-for="(name, index) in peopleObject.also_known_as" 
            :key="index"
            >{{ name }}</div>
          </div>
        </section>
      </section>
    </aside>
</template>
<script setup>
const props = defineProps(['peopleObject'])

const genderToString = [
    'not specified',
    'Female',
    'Male',
    'Non-binary'
]
</script>