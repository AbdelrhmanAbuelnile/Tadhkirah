import surah from "../data/quran.json";

export interface AudioPlayerState {
	surahNumber: number;
	surahName: string;
	audioUrl: string;
	isActive: boolean;
}

export const useAudioPlayer = () => {
	const playerState = useState<AudioPlayerState>("audioPlayer", () => ({
		surahNumber: 0,
		surahName: "",
		audioUrl: "",
		isActive: false,
	}));

	const playSurah = (surahNum: number) => {
		const surahData = surah.data.surahs[surahNum - 1];
		if (!surahData) return;

		playerState.value = {
			surahNumber: surahNum,
			surahName: surahData.name,
			audioUrl: `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surahNum}.mp3`,
			isActive: true,
		};
	};

	const closePlayer = () => {
		playerState.value = {
			surahNumber: 0,
			surahName: "",
			audioUrl: "",
			isActive: false,
		};
	};

	const navigateToSurah = (surahNum: number) => {
		if (surahNum >= 1 && surahNum <= 114) {
			playSurah(surahNum);
			navigateTo(`/${surahNum}`);
		}
	};

	return {
		playerState,
		playSurah,
		closePlayer,
		navigateToSurah,
	};
};
