<template>
	<VitePwaManifest />
	<div class="bg-mushafBg flex flex-col justify-center items-center">
		<div
			class="mx-auto p-4 w-full flex flex-col lg:flex-row justify-between items-center gap-4 my-4"
		>
			<nuxt-link
				v-for="section in sections"
				:to="section.url"
				class="group bg-Dark-Grayish-Blue rounded-md px-4 w-10/12 md:max-w-1/3 md:w-[500px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer"
			>
				<div>
					<img :src="section.img" :alt="section.alt" class="w-36" />
					<div class="">
						<span class="group-hover:text-Neon-Green duration-300">{{
							section.name
						}}</span>
					</div>
				</div>
			</nuxt-link>
		</div>

		<div
			class="mx-auto p-4 w-full flex flex-wrap justify-center items-center gap-4 mb-10"
		>
			<nuxt-link
				v-for="moshaf in moshafsData"
				:to="moshaf.url"
				target="_blank"
				class="flex justify-center items-center"
			>
				<div
					class="group bg-Dark-Blue rounded-md px-4 w-10/12 md:max-w-1/5 md:w-[400px] text-center text-slate-100 text-2xl font-semibold py-4 shadow-lg shadow-Grayish-Blue flex flex-col justify-center items-center hover:bg-Grayish-Blue duration-300 cursor-pointer"
				>
					<img
						:src="moshaf.img"
						alt="image shows a quran"
						class="w-[350px] rounded-md"
					/>
					<div class="">
						<span
							class="group-hover:text-Neon-Green duration-300"
							target="_blank"
						>
							{{ moshaf.name }}
						</span>
					</div>
				</div>
			</nuxt-link>
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

const sections = [
	{
		name: "قرآن",
		url: "/fehrs",
		img: "/imgs/quran.png",
		alt: "green Quran Icon",
	},
	{
		name: "تفسير",
		url: "/tafser",
		img: "/imgs/tafser.png",
		alt: "Icon that shows a muslim man reading the tafsir of the Quran",
	},
	{
		name: "أذكار",
		url: "/azkar",
		img: "/imgs/tasbih.png",
		alt: "Icon shows a hand holding prayer beads",
	},
	{
		name: "حديث",
		url: "/hadith",
		img: "/imgs/Medinan.png",
		alt: "Icon shows Masjid Nabawi in Madina",
	},
];

const moshafsData = [
	{
		name: "مصحف المدينة رواية ورش",
		url: "https://drive.google.com/file/d/19v9JZAAoxlro_CF-v9ITorN_wnADC5hX/view?usp=drive_link",
		img: "/imgs/warsh.jpg",
		alt: "صورة مصحف المدينة برواية ورش",
	},
	{
		name: "مصحف المدينة الاخضر",
		url: "https://drive.google.com/file/d/1ttdRPWBAfv-d89vWNhVceNBJ7i7xjz7A/view?usp=drive_link",
		img: "/imgs/green.jpg",
		alt: "صورة مصحف المدينة باللون الأخضر",
	},
	{
		name: "مصحف المدينة الازرق",
		url: "https://drive.google.com/file/d/1zULuj1x6OrMp0gdSFX4KGJtoxYroI14D/view?usp=drive_link",
		img: "/imgs/azraq.jpg",
		alt: "صورة مصحف المدينة باللون الأزرق",
	},
	{
		name: "مصحف التجويد الملون",
		url: "https://drive.google.com/file/d/1aNr776hAWtgGTYlHMI9JCTuQUB0Ikn8V/view?usp=drive_link",
		img: "/imgs/tajweed.jpg",
		alt: "صورة مصحف التجويد الملون بأحكام ملونة",
	},
	{
		name: "صحيح البخاري",
		url: "https://drive.google.com/file/d/16qPTNXOdD06ZzQ0vPOC1uaIXGD40XeTl/view?usp=drive_link",
		img: "/imgs/bukhari.png",
		alt: "صورة كتاب صحيح البخاري",
	},
];
</script>

<style scoped></style>
