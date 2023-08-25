<template>
  <VitePwaManifest />
  <head>
    <title>تَذْكِرَة | {{surahName}}</title>
  </head>
    <div class="flex flex-col justify-center items-center mx-auto lg:w-2/4 pt-8 px-4">
      <p class="text-center text-4xl font-semibold mb-5 text-red-600">{{ surahName }}</p>

      <span>
        <audio controls="controls" preload="true"  class="bottom-0 sticky">
          <source id="activeAyah" :src="`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${number}.mp3`" type="audio/mp3">
        </audio>
      </span>

      <div class="text-2xl text-center font-medium py-4 flex flex-col items-center justify-center gap-4" v-for="ayah in ayahs" :key="ayah.number">

        <p class="flex flex-row-reverse gap-1 items-end">{{ ayah.text }} <span class="text-center text-red-500">{{ ayah.numberInSurah }}</span></p> 

      </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
    
let {  number } = useRoute().params 

let surahNumber = ref(number)
console.log(surahNumber.value.typeof)

const uri = `https://api.alquran.cloud/v1/surah/${number}/ar.alafasy`

let surahName = ref('')
const ayahs = ref([])

const getSurhAyaht = () => {
  axios.get(uri)
  .then(res =>{
    let surahArray = res.data.data

    surahName.value = surahArray.name
    ayahs.value = surahArray.ayahs
  })
}

onMounted(getSurhAyaht)
</script>
