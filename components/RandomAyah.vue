<template>
    <div
        class="flex flex-col justify-center items-center w-11/12 lg:w-2/4 h-fit bg-Dark-Grayish-Blue rounded-2xl text-center gap-6 py-14 px-4 relative">
        <h1 class="text-Neon-Green text-3xl font-bold">
            {{ surahName }} , {{ ayahNo }}
        </h1>
        <p class="text-slate-200 text-3xl font-semibold">{{ ayah }}</p>
        <button @click="fetchAyah"
            class="p-2 bg-Neon-Green font-bold text-lg hover:bg-Light-Cyan duration-200 rounded-full">
            <img src="../assets/imgs/refresh.png" alt="new ayah button" class="w-6" />
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import quran from '../data/quran.json';

const surahName = ref("ٱلْفَاتِحَةِ");
const ayahNo = ref("١");
const ayah = ref("بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ");

const fetchAyah = () => {
    setTimeout(() => {
        const randomSurahIndex = Math.floor(Math.random() * 114); // Adjusted to zero-based index
        const surah = quran.data.surahs[randomSurahIndex];
        const ayatNo = surah.ayahs.length;
        const randomAyahIndex = Math.floor(Math.random() * ayatNo); // Adjusted to zero-based index
        surahName.value = surah.name;
        ayah.value = surah.ayahs[randomAyahIndex].text;
        ayahNo.value = convertToArabic(surah.ayahs[randomAyahIndex].numberInSurah);
    }, 100);
};

function convertToArabic(number) {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return number.toString().split('').map(digit => arabicNumbers[parseInt(digit, 10)]).join('');
}

</script>

<style scoped>
button {
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
}
</style>