<template>
    <div class="w-full bg-mushafBg flex flex-col flex-1 items-center justify-center gap-4 p-4">

      <NuxtLink :to="`hadith/${n.slug}`" v-for="n in rawy" :key="n.total" class="card text-center w-full flex flex-row-reverse justify-between items-center px-4 lg:px-16 text-slate-200 bg-Dark-Grayish-Blue hover:bg-[#545c6b] hover:text-[#23cfa1] duration-300 ">
        <p class="font-bold text-center">{{ n.name }}</p>
      </NuxtLink>

    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import axios from 'axios'

const uri = 'https://hadis-api-id.vercel.app/hadith'
const rawy = ref('')

const getHadith = () =>{
    axios.get(uri)
    .then((res) => {
        let rawyArray = res.data
        rawy.value = rawyArray
    })
}

onMounted(getHadith)
useHead({
  title: 'تَذْكِرَة | حديث'
})
</script>

<style scoped>

</style>