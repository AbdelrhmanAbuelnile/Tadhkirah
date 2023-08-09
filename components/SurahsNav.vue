<template>
    <div class="flex flex-row-reverse justify-between w-full">
        <NuxtLink :to="`${number + 1}`">Next surah</NuxtLink>
        <NuxtLink :to="`${number - 1}`">Prev surah</NuxtLink>
    </div>
</template>

<script setup>
const {  number } = useRoute().params
</script>

<style scoped>

</style>