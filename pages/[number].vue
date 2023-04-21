<template>
    <div class="flex flex-col justify-center items-center mx-auto lg:w-2/4 pt-8 px-4">
      <p class="text-center text-4xl font-semibold mb-5 text-red-600">{{ surahName.name }}</p>
      <!-- <div v-for="ayah in ayahs" :key="ayah.number" class="flex flex-col justify-center items-center gap-3"> -->
          <p class="text-2xl text-center font-medium py-4" v-for="ayah in ayahs" :key="ayah.number">{{ ayah.text }} <span class="text-red-600">{{ ayah.numberInSurah }}</span></p>
      <!-- </div> -->
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
    
const {  number } = useRoute().params 

const uri = "https://api.alquran.cloud/v1/quran/quran-uthmani"

const surahName = ref('')
const ayahs = ref([])

const getSurhAyaht = () => {
  axios.get(uri)
  .then(res =>{
    let surahArray = res.data.data

    surahName.value = surahArray.surahs[number - 1]
    ayahs.value = surahArray.surahs[number - 1].ayahs
  })
}


useHead({
  title: 'Tadhkirah | surah ' + number
})
onMounted(getSurhAyaht)
</script>

<style scoped>

</style>