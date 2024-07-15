<template>
  <VitePwaManifest />
  <div class="w-full bg-mushafBg flex flex-col flex-1 items-end gap-4 p-4">
    <NuxtLink
      :to="`/tafser/${s.number}`"
      v-for="s in surahName"
      :key="s"
      class="card text-end w-full flex flex-row-reverse justify-between items-center px-4 lg:px-16 text-slate-200 bg-Dark-Grayish-Blue hover:bg-[#545c6b] hover:text-[#23cfa1] duration-300"
    >
      <p class="font-bold">{{ s.name }}</p>
      <div
        class="flex flex-row-reverse justify-between items-center text-center max-w-[150px] lg:max-w-[220px] w-full"
      >
        <p class="font-bold">{{ convertToArabic(s.number) }}</p>
        <p class="text-center">{{ convertToArabic(s.ayahs.length) }}</p>
        <img
          src="../../assets/imgs/Medinan.png"
          alt="Medinan Icon"
          v-if="s.revelationType == 'Medinan'"
          class="max-w-[50px] max-h-[50px]"
        />
        <img
          src="../../assets/imgs/Meccan.png"
          alt="kaaba Icon"
          v-else
          class="max-w-[50px]"
        />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
import quran from "../../data/quran.json";

const surahName = ref("");

let surahArray = quran.data;
surahName.value = surahArray.surahs;

function convertToArabic(number) {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return number.toString().split('').map(digit => arabicNumbers[parseInt(digit, 10)]).join('');
}

useHead({
  title: "تَذْكِرَة | الفهرس",
});
useSeoMeta({
  description:
    "موقع تذكرة - تطبيق ويب شامل يحتوي على القرآن الكريم، الحديث الشريف، التفسير، والأذكار في مكان واحد.",
  ogTitle: "تذكرة - مرجعك للموارد الإسلامية",
  ogDescription:
    "استمتع بسهولة الوصول إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
  ogImage: "/favicon.ico",
  ogUrl: "https://tadhkirah.vercel.app/fehrs",
  twitterTitle: "تذكرة - مصدرك للموارد الإسلامية",
  twitterDescription:
    "اكتشف متعة الوصول السهل إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
  twitterImage: "/favicon.ico",
});
</script>
