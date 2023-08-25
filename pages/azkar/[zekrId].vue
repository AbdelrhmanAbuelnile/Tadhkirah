<template>
    <VitePwaManifest />
    <div class="w-full bg-mushafBg flex flex-col flex-1 items-center justify-center gap-4 p-4">
        <p class="text-blue-500 text-4xl font-bold mb-5">{{ data[zekrId].category }}</p>
        <div
            v-for="a in azkar"
            :key="id"
            class="card text-center w-full flex flex-col justify-center items-center p-4
                lg:px-16 text-slate-200 bg-Dark-Grayish-Blue text-cneter gap-4"
        >
            <p class="font-bold text-center">{{ a.text }}</p>
            <p class="font-bold text-center text-red-500">{{ a.count }} :عدد المرات</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import data from '../../data/adhkar.json';

let { zekrId } = useRoute().params 



let azkar = ref('')
azkar.value = data[zekrId].array

useHead({
  title: `تَذْكِرَة | ${data[zekrId].category}`
})
</script>

<style scoped>

</style>