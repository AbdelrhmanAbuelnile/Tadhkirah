<template>
  <VitePwaManifest />
    <div class="w-full bg-mushafBg flex flex-col flex-1 items-center justify-center gap-4 p-4">

      <NuxtLink :to="`hadith/${n.slug}`" v-for="n in rawy" :key="n.total" class="card text-lg text-center w-full flex flex-row-reverse justify-between items-center px-4 lg:px-16 text-slate-200 bg-Dark-Grayish-Blue hover:bg-[#545c6b] hover:text-[#23cfa1] duration-300 ">
        <p class="font-bold text-center">{{ n.name }}</p>
        <p class="font-bold text-center">عدد الأحاديث: {{ n.total }}</p>
      </NuxtLink>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import hadith from '../../data/hadith.json';

let rawy = ref('')
rawy.value = hadith

useHead({
  title: 'تَذْكِرَة | حديث'
})
</script>

<style scoped>

</style>