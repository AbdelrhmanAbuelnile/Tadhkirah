import {ref} from 'vue'
import axios from 'axios'


export default function useSearchAya(aya: string) {
  const searchAya = ref<string>(aya)

  return getSearchAya(searchAya.value)
}

const getSearchAya = (input: string) => {
  // return axios.get(`https://api.quran.com/api/v4/search?q=${input}`)
  //   .then((response) => {
  //      response.data.search.results
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })

  return useFetch<{ search: { results: any[] } }>(`https://api.quran.com/api/v4/search?q=${input}`).data.value?.search?.results
  
}

