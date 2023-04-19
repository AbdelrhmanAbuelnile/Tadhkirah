<template>
    <div class="w-full bg-cyan-500 grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <!-- <div v-for="s in surahs"> -->
        <!-- <Surhas /> -->
      <!-- </div> -->
      <div v-for="s in surahName" :key="s" class="card text-center">
        <NuxtLink :to="`/${s.number}`" class="text-slate-200 hover:text-[#23cfa1] duration-300 font-bold">{{ s.englishName }}</NuxtLink>
      </div>

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