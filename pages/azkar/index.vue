<template>
  <VitePwaManifest />
    <div class="w-full bg-mushafBg flex flex-col flex-1 items-center justify-center gap-4 p-4">

      <NuxtLink :to="`azkar/${z.id-1}`" v-for="z in zekr" :key="z.id" class="card text-center w-full flex flex-row-reverse justify-between items-center px-4 lg:px-16 text-slate-200 bg-Dark-Grayish-Blue hover:bg-[#545c6b] hover:text-[#23cfa1] duration-300 ">
        <p class="font-bold text-center">{{ z.category }}</p>
      </NuxtLink>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import azkar from '../../data/adhkar.json';

let zekr = ref('')
zekr.value = azkar

useHead({
  title: 'تَذْكِرَة | أذكار'
})
useSeoMeta({
  description: "موقع تذكرة - تطبيق ويب شامل يحتوي على القرآن الكريم، الحديث الشريف، التفسير، والأذكار في مكان واحد.",
  ogTitle: 'تذكرة - مرجعك للموارد الإسلامية',
  ogDescription: "استمتع بسهولة الوصول إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
  ogImage: '/favicon.ico',
  ogUrl: 'https://tadhkirah.vercel.app/azkar',
  twitterTitle: 'تذكرة - مصدرك للموارد الإسلامية',
  twitterDescription: "اكتشف متعة الوصول السهل إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
  twitterImage: '/favicon.ico',
})
</script>

<style scoped>

</style>