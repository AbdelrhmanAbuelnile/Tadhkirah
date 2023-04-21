<template>
    <div class="flex flex-col justify-center items-center w-11/12 lg:w-2/4 h-fit bg-Dark-Grayish-Blue rounded-2xl text-center gap-6 py-14 px-4 relative">
        <h1 class="text-red-500 text-3xl font-bold">{{ ayahNo }} , {{ surahName }}</h1>
        <p class="text-slate-200 text-3xl font-semibold">{{ ayah }}</p>

        <button
        @click="fetchAyah"
        class="p-2 bg-cyan-500  font-bold text-lg hover:bg-Light-Cyan duration-200 rounded-full"
        >
            <img src="../assets/imgs/refresh.png" alt="new ayah button" class="w-6">
        </button>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios';
    

    const surahName = ref('')
    const ayahNo = ref(null)
    const ayah = ref('')
    const ayatNo = ref(null)
    
    
    
    
    const fetchAyah = () => {
        axios.get("https://api.alquran.cloud/v1/quran/quran-uthmani")
        .then(res => {
            const randomSurah = Math.floor(Math.random() * 114) + 1;
            let surah = res.data.data.surahs[randomSurah]
            
            surahName.value = surah.name
            ayatNo.value = surah.ayahs.length
            const randomNumberOfAyah = Math.floor(Math.random() * ayatNo.value) + 1 ;
            ayah.value = surah.ayahs[randomNumberOfAyah].text

            ayahNo.value = surah.ayahs[randomNumberOfAyah].numberInSurah

        })


    }

    onMounted(fetchAyah)
</script>

<style scoped>
    button {
        position: absolute;
        bottom: 0;
        transform: translateY(50%);
    }
</style>