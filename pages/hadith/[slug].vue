<template>
    <VitePwaManifest />
    <head>
        <title>تَذْكِرَة | حديث {{ translatedHadithName }}</title>
    </head>
    <div class="w-full bg-mushafBg flex flex-col flex-1 items-center justify-center gap-4 p-4">
        <p class="text-Dark-Grayish-Blue text-4xl font-bold mb-5 text-center">{{ translatedHadithName }}</p>
        <div
            v-for="h in hadithes.items"
            class="card text-center w-full flex flex-col justify-center items-center p-4
                lg:px-16 text-slate-200 bg-Dark-Grayish-Blue text-cneter gap-4"
        >
            <p class="font-bold text-center">{{ h.arab }}</p>
        </div>
        <button
            @click="LoadMore"
            class="px-4 py-2 rounded-md font-semibold text-2xl text-center bg-Dark-Grayish-Blue text-slate-200 hover:bg-Very-Dark hover:text-slate-100 duration-300"
        >المزيد</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

let { slug } = useRoute().params

const LoadMore = () => {
  limit.value += 20
  let uri = `https://hadis-api-id.vercel.app/hadith/${slug}?page=1&limit=${limit.value}`
  getHadith(uri)
}

const limit = ref(0)
const hadithes = ref([])
const nameMapping = {
  "Abu Dawud": "أبو داود",
  "Ahmad": "أحمد",
  "Bukhari": "البخاري",
  "Darimi": "الدارمي",
  "Ibnu Majah": "ابن ماجه",
  "Malik": "مالك",
  "Muslim": "مسلم",
  "Nasai": "النسائي",
  "Tirmidzi": "الترمذي"
}

const translatedHadithName = ref("")

const getHadith = (uri) => {
  axios.get(uri)
    .then(res => {
      let hadithArray = res.data
      hadithes.value = hadithArray
      translatedHadithName.value = nameMapping[hadithArray.name] || hadithArray.name
    })
}

onMounted(LoadMore)
useSeoMeta({
  description: "موقع تذكرة - تطبيق ويب شامل يحتوي على القرآن الكريم، الحديث الشريف، التفسير، والأذكار في مكان واحد.",
  ogTitle: 'تذكرة - مرجعك للموارد الإسلامية',
  ogDescription: "استمتع بسهولة الوصول إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
  ogImage: '/favicon.ico',
  ogUrl: `https://tadhkirah.vercel.app/hadith/${slug}`,
  twitterTitle: 'تذكرة - مصدرك للموارد الإسلامية',
  twitterDescription: "اكتشف متعة الوصول السهل إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
  twitterImage: '/favicon.ico',
})
</script>

<style scoped>

</style>