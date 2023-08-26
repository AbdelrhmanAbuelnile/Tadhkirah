<template>
    <VitePwaManifest />
    <div class="w-full bg-mushafBg flex flex-col flex-1 items-center justify-center gap-4 p-4">
        <p class="text-Dark-Grayish-Blue text-4xl font-bold mb-5 text-center">{{ data[zekrId].category }}</p>
        <div
            v-for="a in azkar"
            :key="id"
            @click="a.count--"
            :class="`card text-center w-full flex flex-col justify-center items-center p-4
                lg:px-16 text-slate-200 text-cneter gap-4  ${a.count && a.count > 0 ? 'bg-Dark-Grayish-Blue' : 'bg-Very-Dark'} `"
        >
            <p class="font-bold text-center" v-if="a.count && a.count > 0">{{ a.text }}</p>
            <p class="font-bold text-center text-red-500" v-if="a.count && a.count > 0">{{ a.count }} :عدد المرات</p>
            <p v-if="!a.count || a.count < 0" class="line-through font-bold text-center text-slate-400">{{ a.text }}</p>
            <p v-if="!a.count || a.count < 0" class="text-slate-400">0 :عدد المرات</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import data from '../../data/adhkar.json';

let { zekrId } = useRoute().params 

function getCount(zekrCount){
    zekrCount--
    if(zekrCount <= 0){
        zekrCount = 0
    }

}

let azkar = ref('')
azkar.value = data[zekrId].array

useHead({
  title: `تَذْكِرَة | ${data[zekrId].category}`
})
</script>

<style scoped>

</style>