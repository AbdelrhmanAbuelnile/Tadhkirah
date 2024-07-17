import { ref } from 'vue'
import axios from 'axios'
import names from '../data/reader.json'

export default function useReaderName(name: string) {
  const readerName = ref<string>(name)

  
  return getReaderName(readerName.value);
  
}

const getReaderName = (input:string ) => {
  return names.filter((reader) => reader.name.toLowerCase().includes(input.toLowerCase()))
}
