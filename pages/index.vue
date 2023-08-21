<template>
    <div class="bg-mushafBg mx-auto p-4 w-full flex flex-col lg:flex-row justify-between items-center gap-4 mt-10">
      
        <div class="bg-Dark-Grayish-Blue rounded-md w-3/4 md:max-w-1/3 md:w-[500px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer">
          <nuxt-link to="/fehrs"><img src="../assets/imgs/quran.png" alt="" class="w-36"></nuxt-link>
          <div class="">
            <nuxt-link to="/fehrs" class="hover:text-Neon-Green duration-300">قرآن</nuxt-link>
          </div>
        </div>
      
        <div class="bg-Dark-Grayish-Blue rounded-md w-3/4 md:max-w-1/3 md:w-[500px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer">
          <nuxt-link to="/tafser"><img src="../assets/imgs/tafser.png" alt="" class="w-36"></nuxt-link>
          <div class="">
            <nuxt-link to="/tafser" class="hover:text-Neon-Green duration-300">تفسير</nuxt-link>
          </div>
        </div>
        
        <div class="bg-Dark-Grayish-Blue rounded-md w-3/4 md:max-w-1/3 md:w-[500px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer">
          <nuxt-link to="/azkar"><img src="../assets/imgs/tasbih.png" alt="" class="w-36"></nuxt-link>
          <div class="">
            <nuxt-link to="/azkar" class="hover:text-Neon-Green duration-300">أذكار</nuxt-link>
          </div>
        </div>

        <div class="bg-Dark-Grayish-Blue rounded-md w-3/4 md:max-w-1/3 md:w-[500px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer">
          <nuxt-link to="/hadith"><img src="../assets/imgs/Medinan.png" alt="" class="w-36"></nuxt-link>
          <div class="">
            <nuxt-link to="/hadith" class="hover:text-Neon-Green duration-300">حديث</nuxt-link>
          </div>
        </div>
      
    </div>
</template>
  
<script setup>
useHead({
  title: 'تَذْكِرَة'
})
</script>  
  
<style scoped>
</style>