<template>
    <VitePwaManifest />
    <div class="flex flex-col justify-center items-center mx-auto lg:w-3/4 pt-8 px-4">  
        <p class="text-Dark-Grayish-Blue text-4xl font-semibold mb-5"><span class="text-red-600">الاحمر</span> هو التفسير </p>
        <div class="text-2xl text-center font-medium py-4 flex flex-col items-center justify-center gap-4" v-for="ayah in ayahs" :key="ayah.number">

            <p class="flex flex-col gap-1 items-center ">{{ ayah.arabic_text }} <span class="text-blue-600">{{ ayah.aya }}</span></p> 
            <p class="my-4 text-center text-red-500 border-b border-red-600 pb-2">{{ ayah.translation }}</p>

        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
    
let {  number } = useRoute().params 

const uri = `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${number}`

const ayahs = ref([])

const getSurhAyaht = () => {
  axios.get(uri)
  .then(res =>{
    let surahArray = res.data.result
    
    ayahs.value = surahArray
  })
}


useHead({
  title: 'تَذْكِرَة | تفسير ' + number
})
onMounted(getSurhAyaht)
useSeoMeta({
  description: "موقع تذكرة - تطبيق ويب شامل يحتوي على القرآن الكريم، الحديث الشريف، التفسير، والأذكار في مكان واحد.",
  ogTitle: 'تذكرة - مرجعك للموارد الإسلامية',
  ogDescription: "استمتع بسهولة الوصول إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
  ogImage: '/favicon.ico',
  ogUrl: `https://tadhkirah.vercel.app/tafser/${number}`,
  twitterTitle: 'تذكرة - مصدرك للموارد الإسلامية',
  twitterDescription: "اكتشف متعة الوصول السهل إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
  twitterImage: '/favicon.ico',
})
</script>
