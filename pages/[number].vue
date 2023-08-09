<template>
    <div class="flex flex-col justify-center items-center mx-auto lg:w-2/4 pt-8 px-4">
      <p class="text-center text-4xl font-semibold mb-5 text-red-600">{{ surahName }}</p>
      <div class="text-2xl text-center font-medium py-4 flex flex-col items-center justify-center gap-4" v-for="ayah in ayahs" :key="ayah.number">
        <p class="flex flex-row-reverse gap-1 items-end">{{ ayah.text }} <span class="text-center text-white bg-gray-500 p-1">{{ ayah.numberInSurah }}</span></p> 
        
        <span>
          <audio controls="controls" preload="true"  class="bottom-0 sticky">
            <source id="activeAyah" :src="`${ayah.audio}`" :title="`${numberInSurah}`" type="audio/mp3">
            <source id="activeAyah" :src="`${ayah.audioSecondary}`" :title="`${numberInSurah}`" type="audio/mp3">
          </audio>
        </span>

      </div>

      <div class="flex flex-row-reverse justify-between w-full mb-5">
        <NuxtLink class=" bg-red-500 p-4 rounded-md text-white" :to="`${surahNumber+1}`">{{ surahNumber }}</NuxtLink>
        <NuxtLink class=" bg-red-500 p-4 rounded-md text-white" :to="`${surahNumber-1}`">{{surahNumber--}}</NuxtLink>
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

const surahName = ref('')
const ayahs = ref([])

const getSurhAyaht = () => {
  axios.get(uri)
  .then(res =>{
    let surahArray = res.data.data

    surahName.value = surahArray.name
    ayahs.value = surahArray.ayahs
  })
}


useHead({
  title: 'Tadhkirah | surah ' + number
})
onMounted(getSurhAyaht)
</script>
