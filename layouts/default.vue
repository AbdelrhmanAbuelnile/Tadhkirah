<template>
    <div>
        <header class=" shadow-sm bg-Dark-Blue">
            <nav class=" container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-semibold text-gray-100 hover:text-[#23cfa1] duration-300">Tadhkirah</NuxtLink>
                <ul class="flex gap-4 text-gray-100">
                    <li><NuxtLink to="/" class="hover:text-[#23cfa1] duration-300">Home</NuxtLink></li>
                    <li><NuxtLink to="/fehrs" class="hover:text-[#23cfa1] duration-300">Fehrs</NuxtLink></li>
                    <li><NuxtLink to="/randomAyah" class="hover:text-[#23cfa1] duration-300">Random Ayah</Nuxtlink></li>
                        <!-- <li><NuxtLink to="/about" class="hover:text-[#23cfa1] duration-300">about</NuxtLink></li> -->
                </ul>
            </nav>
        </header>

        
        <!-- output the page content -->
        <div class="w-full min-h-screen h-full bg-mushafBg">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color:#12b488;

    }
</style>