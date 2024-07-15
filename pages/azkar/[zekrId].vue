<template>
  <VitePwaManifest />
  <div class="w-full bg-mushafBg flex flex-col flex-1 items-center justify-center gap-4 p-4 cursor-pointer">
    <p class="text-Dark-Grayish-Blue text-4xl font-bold mb-5 text-center">{{ data[zekrId].category }}</p>
    <div v-for="a in azkar" :key="id" @click="reduceCount(a)"
      :class="`card text-center w-full flex flex-col justify-center items-center p-4
                lg:px-16 text-slate-200 text-cneter gap-4  ${ a.count > 0 ? 'bg-Dark-Grayish-Blue' : 'bg-Very-Dark line-through text-slate-400'} `">
      <p class="font-bold text-center">{{ a.text }}</p>
      <p :class="`font-bold text-center ${a.count == 0 ? '' : 'text-red-500'}`">{{ convertToArabic(a.count) }} :عدد
        المرات</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import data from '../../data/adhkar.json';

let { zekrId } = useRoute().params

function convertToArabic(number) {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return number.toString().split('').map(digit => arabicNumbers[parseInt(digit, 10)]).join('');
}

let azkar = ref('')
azkar.value = data[zekrId].array

const reduceCount = (zekr) => {
  if (zekr.count > 0) {
    return zekr.count--
  }
  return zekr.count = 0
}

useHead({
  title: `تَذْكِرَة | ${data[zekrId].category}`
})
useSeoMeta({
  description: "موقع تذكرة - تطبيق ويب شامل يحتوي على القرآن الكريم، الحديث الشريف، التفسير، والأذكار في مكان واحد.",
  ogTitle: 'تذكرة - مرجعك للموارد الإسلامية',
  ogDescription: "استمتع بسهولة الوصول إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
  ogImage: '/favicon.ico',
  ogUrl: `https://tadhkirah.vercel.app/azkar/${data[zekrId].category}`,
  twitterTitle: 'تذكرة - مصدرك للموارد الإسلامية',
  twitterDescription: "اكتشف متعة الوصول السهل إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
  twitterImage: '/favicon.ico',
})
</script>

<style scoped></style>