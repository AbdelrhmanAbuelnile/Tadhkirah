<template>
  <VitePwaManifest />
  <!-- <head>
    <title>تَذْكِرَة | {{surahName}}</title>
  </head> -->
  <div
    class="flex flex-col justify-center items-center lg:justify-end lg:items-end lg:w-full pt-8 px-4"
  >
    <p class="text-center text-4xl font-semibold mb-5 text-red-600">
      {{ surahName }}
    </p>

    <span class="my-4 lg:my-10">
      <audio controls="controls" preload="true" class="bottom-0 sticky">
        <source
          id="activeAyah"
          :src="`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${number}.mp3`"
          type="audio/mp3"
        />
      </audio>
    </span>

    <div
      class="text-2xl text-right font-medium py-4 flex flex-col items-center justify-center lg:items-end lg:justify-end gap-4 lg:w-4/6"
      v-for="ayah in ayahs"
      :key="ayah.number"
    >
      <p class="flex flex-row-reverse items-cneter justify-between full">
        {{ ayah.text }}
        <span class="text-center text-red-500 mr-5">{{
          ayah.numberInSurah
        }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import surah from "../data/quran.json";

let { number } = useRoute().params;

let surahName = ref("");
const ayahs = ref([]);

let surahArray = surah.data.surahs[number - 1];

surahName.value = surahArray.name;

ayahs.value = surahArray.ayahs;

useHead({
  title: `تَذْكِرَة | ${surahName.value}`,
});
useSeoMeta({
  description:
    "موقع تذكرة - تطبيق ويب شامل يحتوي على القرآن الكريم، الحديث الشريف، التفسير، والأذكار في مكان واحد.",
  ogTitle: "تذكرة - مرجعك للموارد الإسلامية",
  ogDescription:
    "استمتع بسهولة الوصول إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
  ogImage: "/favicon.ico",
  ogUrl: `https://tadhkirah.vercel.app/${number}`,
  twitterTitle: "تذكرة - مصدرك للموارد الإسلامية",
  twitterDescription:
    "اكتشف متعة الوصول السهل إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
  twitterImage: "/favicon.ico",
});
</script>
