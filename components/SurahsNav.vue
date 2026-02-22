<template>
  <div
    class="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300"
    :class="isVisible ? 'translate-y-0' : 'translate-y-full'"
  >
    <div class="flex justify-between gap-2 bg-white/95 backdrop-blur-sm shadow-lg px-4 py-3 w-full lg:max-w-lg lg:mx-auto">
      <NuxtLink
        v-if="surahNumber < 114"
        :to="`/${surahNumber + 1}`"
        class="flex-1 lg:flex-none lg:px-8 text-center py-2 bg-Neon-Green text-Dark-Blue font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
      >
        السورة التالية
      </NuxtLink>
      <div v-else class="flex-1 lg:flex-none"></div>
      <NuxtLink
        v-if="surahNumber > 1"
        :to="`/${surahNumber - 1}`"
        class="flex-1 lg:flex-none lg:px-8 text-center py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200"
      >
        السورة السابقة
      </NuxtLink>
      <div v-else class="flex-1 lg:flex-none"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const { number } = useRoute().params;
const surahNumber = parseInt(number, 10);

const SCROLL_THRESHOLD = 50;
const isVisible = ref(true);
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isVisible.value = currentScrollY < lastScrollY || currentScrollY < SCROLL_THRESHOLD;
  lastScrollY = currentScrollY;
};

onMounted(() => {
  lastScrollY = window.scrollY;
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
