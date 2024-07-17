<template>
	<div class="flex justify-center items-center bg-Dark-Grayish-Blue  rounded-md shadow-Grayish-Blue shadow-sm">
		<input
			@input="getSearchResults"
			v-model="searchQuery"
			type="text"
			:placeholder="placeholder"
			class="px-5 placeholder-slate-100 text-lg text-slate-900 outline-none shadow-Grayish-Blue shadow-sm max-w-1/4 w-[200px] md:max-w-2/4 md:w-[300px] bg-Dark-Grayish-Blue focus:placeholder-slate-900 focus:bg-Neon-Green truncate text-center rounded-l-md"
		/>

		<select v-model="selectedOption" class="text-slate-100 bg-Dark-Grayish-Blue shadow-Grayish-Blue shadow-sm focus:outline-none border-l-2 border-Neon-Green w-[100px] md:max-w-2/4 md:w-[100px]">
			<option class="rounded-md" value="1">بحث عن سورة</option>
			<option class="rounded-md" value="2">بحث عن قارئ</option>
			<option class="rounded-md" value="3">بحث عن آية</option>
		</select>

		<div
			v-if="selectedOption === '1' || selectedOption === ''"
			class="absolute flex flex-col bg-Dark-Grayish-Blue text-slate-900 max-w-1/4 w-[300px] md:max-w-2/4 md:w-[400px] shadow-Dark-Grayish-Blue shadow-lg top-[45px] rounded-b-md overflow-hidden z-20"
		>
			<NuxtLink
				:to="s.link"
				@click="clearSearchResults"
				v-for="s in searchResults"
				:key="s.englishName"
				class="py-2 cursor-pointer hover:bg-Grayish-Blue p-2 text-slate-100 hover:text-[#23cfa1] duration-300 border-b border-Grayish-Blue"
			>
				{{ s.name }}
			</NuxtLink>
		</div>
		<div
			v-if="selectedOption === '2'"
			class="absolute flex flex-col bg-Dark-Grayish-Blue text-slate-900 max-w-1/4 w-[300px] md:max-w-2/4 md:w-[400px] shadow-Dark-Grayish-Blue shadow-lg top-[45px] rounded-b-md overflow-hidden z-20"
		>
			<NuxtLink
				:to="s.englishName"
				@click="clearSearchResults"
				v-for="s in searchResults"
				:key="s.name"
				class="py-2 cursor-pointer hover:bg-Grayish-Blue p-2 text-slate-100 hover:text-[#23cfa1] duration-300 border-b border-Grayish-Blue"
			>
				{{ s.name }}
			</NuxtLink>
		</div>
		<div
			v-if="selectedOption === '3'"
			class="absolute flex flex-col bg-Dark-Grayish-Blue text-slate-900 max-w-1/4 w-[300px] md:max-w-2/4 md:w-[400px] shadow-Dark-Grayish-Blue shadow-lg top-[45px] rounded-b-md overflow-hidden z-20"
		>
			<span
				@click="clearSearchResults"
				v-for="s in searchResults"
				:key="s.text"
				class="py-2 cursor-pointer hover:bg-Grayish-Blue p-2 text-slate-100 hover:text-[#23cfa1] duration-300 border-b border-Grayish-Blue"
			>
				{{ s.text }}
			</span>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";
import data from "../data/data.json";
import useReaderName from "../composables/useReader";
import useSearchAya from "../composables/useSearchAya";

const selectedOption = ref("1");


watch(selectedOption, (newValue) => {
	console.log(newValue);
});

const placeholders = {
  '1': 'بحث عن سورة',
  '2': 'بحث عن قارئ',
  '3': 'بحث عن آية',
};

const placeholder = computed(() => placeholders[selectedOption.value] || placeholders['3']);

const surahs = data[0].data.surahs;
const searchQuery = ref("");
const queryTimeout = ref(null);
const searchError = ref(false);
const searchResults = ref([]);

// depounce this
const getSearchResults = () => {
	clearTimeout(queryTimeout.value);
	queryTimeout.value = setTimeout(() => {
		if (searchQuery.value !== "") {
			findResult(selectedOption.value);
		} else {
			searchResults.value = [];
			searchError.value = false;
		}
	}, 300);
};

const searchStrategies = {
  '1': (query) => surahs.filter((surah) => surah.name.toLowerCase().includes(query)),
  '2': useReaderName,
  '3': useSearchAya, 
};

const findResult = (selected) => {
  searchError.value = false;
  searchResults.value = [];

  const query = searchQuery.value.trim().toLowerCase();
  if (query === "") {
    return;
  }

  try {
    const searchFunction = searchStrategies[selected];
    if (searchFunction) {
      searchResults.value = searchFunction(query);
      if (searchResults.value.length === 0) {
        searchError.value = true;
      }
    }
    console.log("🚀 ~ findResult ~ searchResults:", searchResults.value);
  } catch {
    searchError.value = true;
  }
};
const clearSearchResults = () => {
	searchQuery.value = "";
	searchResults.value = [];
};
</script>
