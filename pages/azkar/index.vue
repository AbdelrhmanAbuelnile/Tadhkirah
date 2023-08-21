<template>
    <div class="w-full bg-mushafBg flex flex-col flex-1 items-center justify-center gap-4 p-4">

      <NuxtLink :to="`azkar/${z.id}`" v-for="z in zekr" :key="z.id" class="card text-center w-full flex flex-row-reverse justify-between items-center px-4 lg:px-16 text-slate-200 bg-Dark-Grayish-Blue hover:bg-[#545c6b] hover:text-[#23cfa1] duration-300 ">
        <p class="font-bold text-center">{{ z.category }}</p>
      </NuxtLink>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import data from '../../data/adhkar.json';

let zekr = ref('')
zekr.value = data

useHead({
  title: 'تَذْكِرَة | أذكار'
})
</script>

<style scoped>

</style>