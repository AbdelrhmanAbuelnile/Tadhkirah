<template>
    <head>
        <title>تَذْكِرَة | حديث {{ hadithes.name }}</title>
    </head>
    <div class="w-full bg-mushafBg flex flex-col flex-1 items-center justify-center gap-4 p-4">
        <p class="text-blue-500 text-4xl font-bold mb-5">{{ hadithes.name }}</p>
        <div
        v-for="h in hadithes.items"
            class="card text-center w-full flex flex-col justify-center items-center p-4
                lg:px-16 text-slate-200 bg-Dark-Grayish-Blue text-cneter gap-4"
        >
            <p class="font-bold text-center">{{ h.arab }}</p>
        </div>
    </div>
</template>

<script setup>

import { ref,onMounted } from 'vue'
import axios from 'axios'

let { slug } = useRoute().params 
const uri = `https://hadis-api-id.vercel.app/hadith/${slug}?page=1&limit=20`

const hadithes = ref([])

const getHadith = () => {
    axios.get(uri)
    .then(res => {
        let hadithArray = res.data
        hadithes.value = hadithArray
    })
}

onMounted(getHadith)
</script>

<style scoped>

</style>