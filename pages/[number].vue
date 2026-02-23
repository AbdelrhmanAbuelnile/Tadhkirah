<template>
	<VitePwaManifest />
	<div
		class="flex flex-col justify-center items-center lg:w-full pt-8 md:px-4 px-2 gap-10 pb-20"
	>
		<p class="text-center text-4xl font-semibold mb-5 text-red-600">
			{{ surahName }}
		</p>

		<!-- Play button to start/resume the global player for this surah -->
		<button
			class="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl shadow-lg hover:bg-emerald-600 transition-all transform hover:scale-105 font-semibold"
			@click="startPlaying"
		>
			<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
				<path
					d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
				/>
			</svg>
			<span>تشغيل السورة</span>
		</button>
		<div
			class="flex flex-col justify-center items-center text-2xl md:w-4/5 w-full md:p-2"
		>
			<p class="text-3xl lg:text-4xl text-slate-600 mb-20">
				بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
			</p>

			<p
				class="text-center leading-[3.2rem] outline outline-2 outline-slate-600 rounded-lg"
			>
				<span v-for="ayah in ayahs" :id="`ayah-${ayah.numberInSurah}`">
					<span
						:class="
							isBookmarked(surahNumber, ayah.numberInSurah) && 'text-amber-500'
						"
					>
						{{ organizeFirstAyah(ayah.text) }}
					</span>
					<span
						class="text-center my-2 cursor-pointer select-none"
						:class="
							isBookmarked(surahNumber, ayah.numberInSurah) && 'text-amber-500'
						"
						:title="
							isBookmarked(surahNumber, ayah.numberInSurah)
								? 'إزالة الإشارة المرجعية'
								: 'إضافة إشارة مرجعية'
						"
						@click="toggleBookmark(surahNumber, ayah.numberInSurah)"
					>
						﴿{{ convertToArabic(ayah.numberInSurah) }}﴾
					</span>
				</span>
			</p>
		</div>
	</div>
	<SurahsNav />
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import surah from "../data/quran.json";

const route = useRoute();
let { number } = route.params;
const surahNumber = parseInt(number, 10);

const { bookmark, loadBookmark, toggleBookmark, isBookmarked } = useBookmark();
const { playSurah } = useAudioPlayer();

onMounted(() => {
	loadBookmark();
	if (route.hash) {
		const id = route.hash.slice(1);
		nextTick(() => {
			const el = document.getElementById(id);
			if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
		});
	}
});

/**
 * ⚠ This function is a workaround for the issue of the first ayah of each surah
 * based on the API response, the first ayah of each surah has the bismillah
 *
 * made this function because the first ayah of each surah has the bismillah
 * it'll be staticaly added anyway before each surah except the al-fatiha
 * because Al-Fatiha has the bismillah as the first ayah
 */
const organizeFirstAyah = (text) => {
	const bismillah = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";
	if (text.startsWith(bismillah)) {
		return text.replace(bismillah, "").trim();
	}
	return text;
};

let surahName = ref("");
const ayahs = ref([]);

let surahArray = surah.data.surahs[number - 1];

surahName.value = surahArray.name;

ayahs.value = surahArray.ayahs;

function convertToArabic(number) {
	const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
	return number
		.toString()
		.split("")
		.map((digit) => arabicNumbers[parseInt(digit, 10)])
		.join("");
}

useHead({
	title: `تَذْكِرَة | ${surahName.value}`,
});
useSeoMeta({
	description:
		"موقع تذكرة - تطبيق ويب شامل يحتوي على القرآن الكريم، الحديث الشريف، التفسير، والأذكار في مكان واحد.",
	ogTitle: "تذكرة - مرجعك للموارد الإسلامية",
	ogDescription:
		"استمتع بسهولة الوصول إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
	ogImage: "/favicon.ico",
	ogUrl: `https://tadhkirah.vercel.app/${number}`,
	twitterTitle: "تذكرة - مصدرك للموارد الإسلامية",
	twitterDescription:
		"اكتشف متعة الوصول السهل إلى القرآن الكريم، الحديث الشريف، التفسير، والأذكار عبر تطبيق ويب تذكرة.",
	twitterImage: "/favicon.ico",
});

const startPlaying = () => {
	playSurah(surahNumber);
};
</script>
