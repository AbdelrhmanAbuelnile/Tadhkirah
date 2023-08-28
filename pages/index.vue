<template>
  <VitePwaManifest />
  <div
    class="bg-mushafBg mx-auto p-4 w-full flex flex-col lg:flex-row justify-between items-center gap-4 my-4"
  >
    <div
      class="bg-Dark-Grayish-Blue rounded-md px-4 w-10/12 md:max-w-1/3 md:w-[500px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer"
    >
      <nuxt-link to="/fehrs"
        ><img
          src="../assets/imgs/quran.png"
          alt="green Quran Icon"
          class="w-36"
      /></nuxt-link>
      <div class="">
        <nuxt-link to="/fehrs" class="hover:text-Neon-Green duration-300"
          >قرآن</nuxt-link
        >
      </div>
    </div>

    <div
      class="bg-Dark-Grayish-Blue rounded-md px-4 w-10/12 md:max-w-1/3 md:w-[500px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer"
    >
      <nuxt-link to="/tafser"
        ><img
          src="../assets/imgs/tafser.png"
          alt="Icon that shows a muslim man reading the tafset of the quran"
          class="w-36"
      /></nuxt-link>
      <div class="">
        <nuxt-link to="/tafser" class="hover:text-Neon-Green duration-300"
          >تفسير</nuxt-link
        >
      </div>
    </div>

    <div
      class="bg-Dark-Grayish-Blue rounded-md px-4 w-10/12 md:max-w-1/3 md:w-[500px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer"
    >
      <nuxt-link to="/azkar"
        ><img
          src="../assets/imgs/tasbih.png"
          alt="Icon sjow a hand holding beads"
          class="w-36"
      /></nuxt-link>
      <div class="">
        <nuxt-link to="/azkar" class="hover:text-Neon-Green duration-300"
          >أذكار</nuxt-link
        >
      </div>
    </div>

    <div
      class="bg-Dark-Grayish-Blue rounded-md px-4 w-10/12 md:max-w-1/3 md:w-[500px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer"
    >
      <nuxt-link to="/hadith"
        ><img
          src="../assets/imgs/Medinan.png"
          alt="Icon shows masjid nabawy in madena"
          class="w-36"
      /></nuxt-link>
      <div class="">
        <nuxt-link to="/hadith" class="hover:text-Neon-Green duration-300"
          >حديث</nuxt-link
        >
      </div>
    </div>
  </div>

  <div
    class="bg-mushafBg mx-auto p-4 w-full flex flex-wrap justify-center items-center gap-4 mb-10"
  >
    <div
      class="bg-Dark-Blue rounded-md px-4 w-10/12 md:max-w-1/5 md:w-[400px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer"
    >
      <nuxt-link
        to="https://drive.google.com/file/d/19v9JZAAoxlro_CF-v9ITorN_wnADC5hX/view?usp=drive_link"
        target="_blank"
      >
        <img
          src="../assets/imgs/warsh.jpg"
          alt="image shows a quran"
          class="w-[350px] rounded-md"
        />
      </nuxt-link>
      <div class="">
        <nuxt-link
          to="https://drive.google.com/file/d/19v9JZAAoxlro_CF-v9ITorN_wnADC5hX/view?usp=drive_link"
          class="hover:text-Neon-Green duration-300"
          target="_blank"
        >
          مصحف المدينة رواية ورش
        </nuxt-link>
      </div>
    </div>

    <div
      class="bg-Dark-Blue rounded-md px-4 w-10/12 md:max-w-1/5 md:w-[400px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer"
    >
      <nuxt-link
        to="https://drive.google.com/file/d/1ttdRPWBAfv-d89vWNhVceNBJ7i7xjz7A/view?usp=drive_link"
        target="_blank"
      >
        <img
          src="../assets/imgs/green.jpg"
          alt="image shows madian quran colored green"
          class="w-[350px] rounded-md"
        />
      </nuxt-link>
      <div class="">
        <nuxt-link
          to="https://drive.google.com/file/d/1ttdRPWBAfv-d89vWNhVceNBJ7i7xjz7A/view?usp=drive_link"
          class="hover:text-Neon-Green duration-300"
          target="_blank"
        >
          مصحف المدينة الاخضر
        </nuxt-link>
      </div>
    </div>

    <div
      class="bg-Dark-Blue rounded-md px-4 w-10/12 md:max-w-1/5 md:w-[400px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer"
    >
      <nuxt-link
        to="https://drive.google.com/file/d/1zULuj1x6OrMp0gdSFX4KGJtoxYroI14D/view?usp=drive_link"
        target="_blank"
      >
        <img
          src="../assets/imgs/azraq.jpg"
          alt="image shows madian quran colored blue"
          class="w-[350px] rounded-md"
        />
      </nuxt-link>
      <div class="">
        <nuxt-link
          to="https://drive.google.com/file/d/1zULuj1x6OrMp0gdSFX4KGJtoxYroI14D/view?usp=drive_link"
          class="hover:text-Neon-Green duration-300"
          target="_blank"
        >
          مصحف المدينة الازرق
        </nuxt-link>
      </div>
    </div>

    <div
      class="bg-Dark-Blue rounded-md px-4 w-10/12 md:max-w-1/5 md:w-[400px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer"
    >
      <nuxt-link
        to="https://drive.google.com/file/d/1aNr776hAWtgGTYlHMI9JCTuQUB0Ikn8V/view?usp=drive_link"
        target="_blank"
      >
        <img
          src="../assets/imgs/tajweed.jpg"
          alt="image shows a quran for tajwed where it's text is colored in different ways to show the right way of reading it"
          class="w-[350px] rounded-md"
        />
      </nuxt-link>
      <div class="">
        <nuxt-link
          to="https://drive.google.com/file/d/1aNr776hAWtgGTYlHMI9JCTuQUB0Ikn8V/view?usp=drive_link"
          class="hover:text-Neon-Green duration-300"
          target="_blank"
        >
          مصحف التجويد الملون
        </nuxt-link>
      </div>
    </div>

    <div
      class="bg-Dark-Blue rounded-md px-4 w-10/12 md:max-w-1/5 md:w-[400px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer"
    >
      <nuxt-link
        to="https://drive.google.com/file/d/16qPTNXOdD06ZzQ0vPOC1uaIXGD40XeTl/view?usp=drive_link"
        target="_blank"
      >
        <img
          src="../assets/imgs/bukhari.png"
          alt="image shows saheh el Bukhari"
          class="w-[350px] h-[293px] rounded-md"
        />
      </nuxt-link>
      <div class="">
        <nuxt-link
          to="https://drive.google.com/file/d/16qPTNXOdD06ZzQ0vPOC1uaIXGD40XeTl/view?usp=drive_link"
          class="hover:text-Neon-Green duration-300"
          target="_blank"
        >
          صحيح البخاري
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "تَذْكِرَة",
  htmlAttrs: {
    lang: "ar",
  },
});

useSeoMeta({
  description:
    "موقع تذكرة - تطبيق ويب شامل يحتوي على القرآن الكريم، الحديث الشريف، التفسير، والأذكار في مكان واحد.",
  ogTitle: "تذكرة - مرجعك للموارد الإسلامية",
  ogDescription:
    "استمتع بسهولة الوصول إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
  ogImage: "/favicon.ico",
  ogUrl: "https://tadhkirah.vercel.app/",
  twitterTitle: "تذكرة - مصدرك للموارد الإسلامية",
  twitterDescription:
    "اكتشف متعة الوصول السهل إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
  twitterImage: "/favicon.ico",
});
</script>

<style scoped></style>
