<template>
  <VitePwaManifest />
  <head>
    <title>تَذْكِرَة | الفهرس</title>
  </head>
    <div class="w-full bg-mushafBg flex flex-col flex-1 items-end gap-4 p-4">
      <NuxtLink :to="`/${s.number}`" v-for="s in surahName" :key="s" class="card text-end w-full flex flex-row-reverse justify-between items-center px-4 lg:px-16 text-slate-200 bg-Dark-Grayish-Blue hover:bg-[#545c6b] hover:text-[#23cfa1] duration-300 ">
        <p class="font-bold">{{ s.name }}</p>
        <div class="flex flex-row-reverse justify-between items-center text-center max-w-[150px] lg:max-w-[220px] w-full">
          <p class="font-bold">{{ s.number }}</p>
          <p class="text-center">{{ s.ayahs.length }}</p>
          <img src="../assets/imgs/Medinan.png" alt="Medinan" v-if="s.revelationType == 'Medinan'" class="max-w-[50px] max-h-[50px]">
          <img src="../assets/imgs/Meccan.png" alt="kaaba" v-else class="max-w-[50px]">
        </div>
      </NuxtLink>

    </div>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const surahName = ref('')

const getSurh = () => {
  axios.get("https://api.alquran.cloud/v1/quran/quran-uthmani")
  .then(res =>{
    let surahArray = res.data.data

    surahName.value = surahArray.surahs
  })
}

onMounted(getSurh)
</script>