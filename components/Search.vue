<template>
    <div>
        <input
            @input="getSearchResults"
            v-model="searchQuery"
            type="text"
            placeholder="بحث عن سورة"
            class="px-5 placeholder-slate-100 text-lg text-slate-900 outline-none
                shadow-Grayish-Blue shadow-sm max-w-1/4 w-[200px] md:max-w-2/4 md:w-[300px] rounded-md
                bg-Dark-Grayish-Blue focus:placeholder-slate-900
                focus:bg-Neon-Green truncate text-center"
        >

        <div class="absolute flex flex-col bg-Dark-Grayish-Blue text-slate-900 max-w-1/4 w-[200px] md:max-w-2/4 md:w-[300px] shadow-Dark-Grayish-Blue shadow-lg top-[45px] rounded-md overflow-hidden">
                <NuxtLink
                :to="s.link"
                @click="clearSearchResults"
                v-for="s in searchResults"
                :key="s.name"
                class="py-2 cursor-pointer hover:bg-Grayish-Blue p-2 text-slate-100 hover:text-[#23cfa1] duration-300 border-b border-Grayish-Blue"
                >
                    {{ s.name }}
                </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import data from '../data/data.json'
    const surahs = data[0].data.surahs
    const searchQuery = ref("");
    const queryTimeout = ref(null);
    const searchError = ref(false);
    const searchResults = ref([]);

    const getSearchResults = () => {
        clearTimeout(queryTimeout.value);
        queryTimeout.value = setTimeout(() => {
            if (searchQuery.value !== "") {
                findResult();
            } else {
                searchResults.value = [];
                searchError.value = false;
            }
        }, 300);
    };

    const findResult = () => {
        searchError.value = false;
        searchResults.value = [];

        if (searchQuery.value.trim() === "") {
            return;
        }

        try {
            const query = searchQuery.value.trim().toLowerCase();
            searchResults.value = surahs.filter(surah =>
                surah.name.toLowerCase().includes(query)
            );
            if (searchResults.value.length === 0) {
                searchError.value = true;
            }
        } catch {
            searchError.value = true;
        }
    };
    const clearSearchResults = () => {
        searchQuery.value = "";
        searchResults.value = [];
    };
    onMounted(() => {
        document.addEventListener("click", (event) => {
            if (!event.target.closest(".search-container")) {
                showResults.value = false;
            }
        });
    });
</script>

