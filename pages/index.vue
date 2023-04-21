<template>
    <div class="w-full bg-mushafBg flex flex-col flex-1 items-end gap-4 p-4">
      <!-- <div v-for="s in surahs"> -->
        <!-- <Surhas /> -->
      <!-- </div> -->
      <NuxtLink :to="`/${s.number}`" v-for="s in surahName" :key="s" class="card text-end w-full flex flex-row-reverse justify-between px-4 lg:px-16 text-slate-200 hover:text-[#23cfa1] duration-300 ">
        <p class="font-bold">{{ s.name }}</p>
        <div class="flex flex-row-reverse justify-between max-w-[95px] lg:max-w-[110px] w-full">
          <p class="text-center">{{ s.ayahs.length }}</p>
          <p>{{ s.revelationType }}</p>
        </div>
      </NuxtLink>

    </div>
</template>
  
<script setup>
// fetch the surahs
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

useHead({
  title: 'Tadhkirah'
})
</script>  
  
<style scoped>
</style>