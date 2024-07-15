<template>
  <VitePwaManifest />
  <!-- <head>
    <title>تَذْكِرَة | {{surahName}}</title>
  </head> -->
  <div class="flex flex-col justify-center items-center lg:w-full pt-8 px-4 gap-10">
    <p class="text-center text-4xl font-semibold mb-5 text-red-600">
      {{ surahName }}
    </p>

    <span class="">
      <audio controls="controls" preload="true" class="bottom-0 sticky">
        <source id="activeAyah" :src="`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${number}.mp3`"
          type="audio/mp3" />
      </audio>
    </span>
    <div class="flex flex-col justify-center items-center text-2xl w-4/5 p-2">

      <p class="text-3xl lg:text-4xl text-slate-600 mb-20">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>

      <p class="text-center  leading-[3.2rem]">
        <span v-for="ayah in ayahs" >
          {{ organizeFirstAyah(ayah.text) }}
          <span class="text-center text-red-500 my-2">
            ﴿{{ convertToArabic(ayah.numberInSurah) }}﴾
          </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import surah from "../data/quran.json";

let { number } = useRoute().params;

/**
 * ⚠ This function is a workaround for the issue of the first ayah of each surah
 * based on the API response, the first ayah of each surah has the bismillah
 * 
 * made this function because the first ayah of each surah has the bismillah
 * it'll be staticaly added anyway before each surah except the al-fatiha
 * because Al-Fatiha has the bismillah as the first ayah
 */
const organizeFirstAyah = (text) => {
  const bismillah = 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ';
  if (text.startsWith(bismillah)) {
    return text.replace(bismillah, '').trim();
  }
  return text;
}

let surahName = ref("");
const ayahs = ref([]);

let surahArray = surah.data.surahs[number - 1];

surahName.value = surahArray.name;

ayahs.value = surahArray.ayahs;

function convertToArabic(number) {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return number.toString().split('').map(digit => arabicNumbers[parseInt(digit, 10)]).join('');
}

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
