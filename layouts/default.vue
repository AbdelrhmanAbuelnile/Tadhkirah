<template>
    <VitePwaManifest />
    <div class="font-amiri" dir="rtl">
        <header class=" shadow-sm bg-Dark-Blue">
            <nav class=" container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-semibold text-slate-100 hover:text-[#23cfa1] duration-300"> تَذْكِرَة
                </NuxtLink>
                <Search />
                <ul class="flex gap-4 text-gray-100 max-sm:hidden">
                    <li>
                        <NuxtLink to="/" class="hover:text-[#23cfa1] duration-300">الرئيسية</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/fehrs" class="hover:text-[#23cfa1] duration-300">الفهرس</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/randomAyah" class="hover:text-[#23cfa1] duration-300">أية عشوائية</Nuxtlink>
                    </li>
                    <!-- <li><NuxtLink to="/about" class="hover:text-[#23cfa1] duration-300">about</NuxtLink></li> -->
                </ul>
                <button @click="show = !show"
                    class="md:hidden bg-Neon-Green px-2 py-1 rounded-sm flex justify-center text-Dark-Blue">
                    <Icon name="ic:sharp-menu" class="text-xl" />
                </button>
                <div v-if="show"
                    class="absolute left-0 z-10 top-[60px] h-screen overflow-y-hidden bg-Dark-Grayish-Blue w-full text-slate-100 text-2xl py-2 font-semibold">
                    <ul class="flex flex-col justify-center items-start px-4 gap-8">
                        <li>
                            <NuxtLink @click="show = !show" to="/" class="hover:text-[#23cfa1] duration-300">الرئيسية
                            </NuxtLink>
                        </li>

                        <li>
                            <NuxtLink @click="show = !show" to="/fehrs" class="hover:text-[#23cfa1] duration-300">الفهرس
                            </NuxtLink>
                        </li>

                        <li>
                            <NuxtLink @click="show = !show" to="/randomAyah" class="hover:text-[#23cfa1] duration-300">
                                أية عشوائية</Nuxtlink>
                        </li>

                        <li>
                            <nuxt-link @click="show = !show" to="/tafser"
                                class="hover:text-Neon-Green duration-300">تفسير</nuxt-link>
                        </li>

                        <li>
                            <nuxt-link @click="show = !show" to="/azkar"
                                class="hover:text-Neon-Green duration-300">أذكار</nuxt-link>
                        </li>

                        <li>
                            <nuxt-link @click="show = !show" to="/hadith"
                                class="hover:text-Neon-Green duration-300">حديث</nuxt-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>


        <!-- output the page content -->
        <div class="w-full min-h-screen h-full bg-mushafBg" v-if="!show">
            <slot />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
let show = ref(false)
useHead({
    htmlAttrs: {
        lang: 'en',
    },
})
</script>
<style scoped>
.router-link-exact-active {
    color: #12b488;

}
</style>