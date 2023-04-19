<template>
  <div class="bg-green-500 w-full h-screen flex flex-col justify-center items-center">
    <div class="h-2/4 w-3/4 md:w-2/4 md:h-2/6 lg:w-1/4 lg:h-2/4 mx-auto text-center card">
        <p class=" mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl ">Ooops.</p>
        <p class=" mt-7">{{ error.message }}</p>
        <button class="btn my-7" @click="handleClearError">Go Home...</button>
    </div>
  </div>
</template>

<script setup>
  defineProps(['error']) 

  const handleClearError = () => clearError({ redirect: '/'})
</script>

<style scoped>

</style>