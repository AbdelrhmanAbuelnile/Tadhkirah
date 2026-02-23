<template>
	<div
		v-if="playerState.isActive"
		dir="ltr"
		class="fixed bottom-0 left-0 right-0 z-[60]"
	>
		<div
			class="bg-white shadow-2xl rounded-t-xl overflow-hidden max-w-2xl w-full mx-auto"
		>
			<!-- Header with Islamic pattern -->
			<div
				class="h-1 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600"
			></div>

			<!-- Compact / Expanded toggle -->
			<div class="flex items-center justify-between px-4 pt-2">
				<button
					class="text-gray-400 hover:text-gray-600 transition-colors text-sm"
					@click="isExpanded = !isExpanded"
				>
					<svg
						class="w-5 h-5 transition-transform duration-200"
						:class="{ 'rotate-180': isExpanded }"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 15l7-7 7 7"
						/>
					</svg>
				</button>
				<button
					class="text-gray-400 hover:text-red-500 transition-colors"
					@click="handleClose"
					title="إغلاق المشغل"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
						/>
					</svg>
				</button>
			</div>

			<!-- Expanded view -->
			<div v-if="isExpanded" class="flex flex-col md:flex-row">
				<!-- Quran Image -->
				<div class="md:w-40 w-full">
					<img
						class="w-32 md:w-full h-32 md:h-full object-cover"
						src="/imgs/quran.png"
						alt="Mushaf Cover"
					/>
				</div>

				<!-- Player Content -->
				<div class="flex-1 p-6">
					<!-- Surah Info -->
					<div class="flex justify-between items-start mb-6">
						<div>
							<NuxtLink
								:to="`/${playerState.surahNumber}`"
								class="text-xl text-gray-800 font-semibold mb-1 hover:text-emerald-600 transition-colors"
							>
								{{ playerState.surahName }}
							</NuxtLink>
							<p class="text-sm text-gray-600">القرآن الكريم</p>
						</div>
					</div>

					<!-- Audio Controls -->
					<div class="flex justify-between items-center mb-4">
						<!-- Previous -->
						<button
							class="text-gray-600 hover:text-gray-800 transition-colors p-2"
							:disabled="playerState.surahNumber <= 1"
							:class="{
								'opacity-50 cursor-not-allowed': playerState.surahNumber <= 1,
							}"
							@click="previousSurah"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect x="4" y="5" width="2" height="14" />
								<polygon points="20,5 8,12 20,19" />
							</svg>
						</button>

						<!-- Play/Pause -->
						<button
							class="text-white p-4 rounded-full bg-emerald-500 shadow-lg hover:bg-emerald-600 transition-all transform hover:scale-105"
							@click="togglePlay"
						>
							<svg
								v-if="!isPlaying"
								class="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
								/>
							</svg>
							<svg
								v-else
								class="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"
								/>
							</svg>
						</button>

						<!-- Next -->
						<button
							class="text-gray-600 hover:text-gray-800 transition-colors p-2"
							:disabled="playerState.surahNumber >= 114"
							:class="{
								'opacity-50 cursor-not-allowed': playerState.surahNumber >= 114,
							}"
							@click="nextSurah"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<polygon points="4,5 16,12 4,19" />
								<rect x="18" y="5" width="2" height="14" />
							</svg>
						</button>

						<!-- Repeat -->
						<button
							class="transition-colors p-2"
							:class="
								isRepeating
									? 'text-emerald-600'
									: 'text-gray-400 hover:text-gray-600'
							"
							@click="toggleRepeat"
						>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
								/>
							</svg>
						</button>
					</div>

					<!-- Volume Control (expanded) -->
					<div class="flex items-center gap-2">
						<button
							class="text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
							@click="toggleMute"
						>
							<!-- Muted icon -->
							<svg
								v-if="isMuted || volume === 0"
								class="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M3.63 3.63a.75.75 0 011.06 0l15.68 15.68a.75.75 0 11-1.06 1.06l-3.07-3.07A6.001 6.001 0 0112 19.5H9.75a.75.75 0 010-1.5H12a4.5 4.5 0 003.57-1.76l-1.42-1.42A2.999 2.999 0 0112 16.5H9.75a.75.75 0 010-1.5H12c.62 0 1.19-.19 1.67-.51L3.63 4.69a.75.75 0 010-1.06z"
								/>
								<path
									d="M11.47 2.22a.75.75 0 01.78-.05c.26.14.42.4.42.7v5.69l-1.5-1.5V4.56L8.09 7.14 6.77 5.82l4.22-3.32a.75.75 0 01.48-.28zM12.67 17.44V19.13a.75.75 0 01-1.26.55l-4.5-3.54a.75.75 0 01-.28-.58v-3.12a.75.75 0 011.5 0v2.77l3.04 2.39V17.44l1.5 1.5z"
								/>
							</svg>
							<!-- Low volume icon -->
							<svg
								v-else-if="volume < 0.5"
								class="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"
								/>
							</svg>
							<!-- High volume icon -->
							<svg
								v-else
								class="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06zM15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"
								/>
							</svg>
						</button>
						<input
							type="range"
							min="0"
							max="1"
							step="0.01"
							:value="isMuted ? 0 : volume"
							@input="onVolumeChange"
							class="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer accent-emerald-500"
						/>
					</div>
				</div>
			</div>

			<!-- Compact view (always visible) -->
			<div v-if="!isExpanded" class="flex items-center gap-3 px-4 py-2">
				<NuxtLink
					:to="`/${playerState.surahNumber}`"
					class="text-sm font-semibold text-gray-800 hover:text-emerald-600 transition-colors truncate min-w-0"
				>
					{{ playerState.surahName }}
				</NuxtLink>

				<div class="flex items-center gap-2 flex-shrink-0">
					<button
						class="text-gray-600 hover:text-gray-800 transition-colors p-1"
						:disabled="playerState.surahNumber <= 1"
						:class="{
							'opacity-50 cursor-not-allowed': playerState.surahNumber <= 1,
						}"
						@click="previousSurah"
					>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
							<rect x="4" y="5" width="2" height="14" />
							<polygon points="20,5 8,12 20,19" />
						</svg>
					</button>

					<button
						class="text-white p-2 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-all"
						@click="togglePlay"
					>
						<svg
							v-if="!isPlaying"
							class="w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
							/>
						</svg>
						<svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"
							/>
						</svg>
					</button>

					<button
						class="text-gray-600 hover:text-gray-800 transition-colors p-1"
						:disabled="playerState.surahNumber >= 114"
						:class="{
							'opacity-50 cursor-not-allowed': playerState.surahNumber >= 114,
						}"
						@click="nextSurah"
					>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
							<polygon points="4,5 16,12 4,19" />
							<rect x="18" y="5" width="2" height="14" />
						</svg>
					</button>
				</div>

				<!-- Volume (compact) -->
				<div class="flex items-center gap-1 flex-shrink-0">
					<button
						class="text-gray-500 hover:text-gray-700 transition-colors p-1"
						@click="toggleMute"
					>
						<svg
							v-if="isMuted || volume === 0"
							class="w-4 h-4"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M3.63 3.63a.75.75 0 011.06 0l15.68 15.68a.75.75 0 11-1.06 1.06l-3.07-3.07A6.001 6.001 0 0112 19.5H9.75a.75.75 0 010-1.5H12a4.5 4.5 0 003.57-1.76l-1.42-1.42A2.999 2.999 0 0112 16.5H9.75a.75.75 0 010-1.5H12c.62 0 1.19-.19 1.67-.51L3.63 4.69a.75.75 0 010-1.06z"
							/>
							<path
								d="M11.47 2.22a.75.75 0 01.78-.05c.26.14.42.4.42.7v5.69l-1.5-1.5V4.56L8.09 7.14 6.77 5.82l4.22-3.32a.75.75 0 01.48-.28zM12.67 17.44V19.13a.75.75 0 01-1.26.55l-4.5-3.54a.75.75 0 01-.28-.58v-3.12a.75.75 0 011.5 0v2.77l3.04 2.39V17.44l1.5 1.5z"
							/>
						</svg>
						<svg
							v-else-if="volume < 0.5"
							class="w-4 h-4"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"
							/>
						</svg>
						<svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06zM15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"
							/>
						</svg>
					</button>
					<input
						type="range"
						min="0"
						max="1"
						step="0.01"
						:value="isMuted ? 0 : volume"
						@input="onVolumeChange"
						class="w-16 h-1 bg-gray-200 rounded-full appearance-none cursor-pointer accent-emerald-500"
					/>
				</div>
			</div>

			<!-- Progress Bar (always visible) -->
			<div class="px-4 pb-3">
				<div class="flex justify-between text-xs text-gray-500 mb-1">
					<span>{{ currentTime }}</span>
					<span>{{ duration }}</span>
				</div>
				<div class="relative cursor-pointer" @click="seekTo">
					<div class="h-1 bg-gray-200 rounded-full">
						<div
							class="h-1 bg-emerald-500 rounded-full relative transition-all duration-300"
							:style="`width: ${progress}%`"
						>
							<span
								class="w-3 h-3 bg-emerald-600 absolute -right-1 -top-1 rounded-full shadow-sm"
							></span>
						</div>
					</div>
				</div>
			</div>

			<!-- Reciter Info (expanded only) -->
			<div v-if="isExpanded" class="px-6 pb-4">
				<div
					class="flex items-center justify-center gap-2 text-gray-500 text-xs"
				>
					<span>🎙️</span>
					<span>بصوت الشيخ مشاري العفاسي</span>
				</div>
			</div>

			<!-- Hidden Audio Element -->
			<audio
				ref="audioPlayer"
				preload="metadata"
				:loop="isRepeating"
				@timeupdate="updateProgress"
				@loadedmetadata="updateDuration"
				@ended="onAudioEnd"
				@canplaythrough="onCanPlay"
			>
				<source :src="playerState.audioUrl" type="audio/mp3" />
			</audio>
		</div>
	</div>
</template>

<script setup>
const { playerState, closePlayer, navigateToSurah } = useAudioPlayer();

const audioPlayer = ref(null);
const isPlaying = ref(false);
const isRepeating = ref(false);
const isExpanded = ref(false);
const currentTime = ref("0:00");
const duration = ref("0:00");
const progress = ref(0);
const isLoading = ref(true);
const volume = ref(1);
const isMuted = ref(false);
const previousVolume = ref(1);

// Watch for surah changes (URL changes) to load new audio and auto-play
watch(
	() => playerState.value.audioUrl,
	(newUrl, oldUrl) => {
		if (newUrl && newUrl !== oldUrl) {
			resetPlayer();
			nextTick(() => {
				if (audioPlayer.value) {
					audioPlayer.value.load();
					audioPlayer.value
						.play()
						.then(() => {
							isPlaying.value = true;
						})
						.catch(() => {
							isPlaying.value = false;
						});
				}
			});
		}
	},
);

const togglePlay = () => {
	if (audioPlayer.value && !isLoading.value) {
		if (isPlaying.value) {
			audioPlayer.value.pause();
		} else {
			audioPlayer.value.play();
		}
		isPlaying.value = !isPlaying.value;
	}
};

const toggleRepeat = () => {
	isRepeating.value = !isRepeating.value;
};

const onVolumeChange = (event) => {
	const newVolume = parseFloat(event.target.value);
	volume.value = newVolume;
	isMuted.value = newVolume === 0;
	if (audioPlayer.value) {
		audioPlayer.value.volume = newVolume;
		audioPlayer.value.muted = false;
	}
};

const toggleMute = () => {
	if (isMuted.value) {
		isMuted.value = false;
		volume.value = previousVolume.value || 1;
		if (audioPlayer.value) {
			audioPlayer.value.volume = volume.value;
			audioPlayer.value.muted = false;
		}
	} else {
		previousVolume.value = volume.value;
		isMuted.value = true;
		if (audioPlayer.value) {
			audioPlayer.value.muted = true;
		}
	}
};

const updateProgress = () => {
	if (audioPlayer.value) {
		const current = audioPlayer.value.currentTime;
		const total = audioPlayer.value.duration;
		if (!isNaN(total) && total > 0) {
			progress.value = (current / total) * 100;
			currentTime.value = formatTime(current);
		}
	}
};

const updateDuration = () => {
	if (audioPlayer.value && !isNaN(audioPlayer.value.duration)) {
		duration.value = formatTime(audioPlayer.value.duration);
		isLoading.value = false;
	}
};

const onCanPlay = () => {
	isLoading.value = false;
};

const seekTo = (event) => {
	if (audioPlayer.value && !isLoading.value) {
		const rect = event.currentTarget.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const percentage = x / rect.width;
		const seekTime = percentage * audioPlayer.value.duration;
		audioPlayer.value.currentTime = seekTime;
	}
};

const formatTime = (seconds) => {
	if (isNaN(seconds)) return "0:00";
	const mins = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60);
	return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const onAudioEnd = () => {
	if (!isRepeating.value) {
		isPlaying.value = false;
		progress.value = 0;
		currentTime.value = "0:00";
	}
};

const resetPlayer = () => {
	isPlaying.value = false;
	progress.value = 0;
	currentTime.value = "0:00";
	duration.value = "0:00";
	isLoading.value = true;
};

const handleClose = () => {
	if (audioPlayer.value) {
		audioPlayer.value.pause();
	}
	isPlaying.value = false;
	closePlayer();
};

const nextSurah = () => {
	if (playerState.value.surahNumber < 114) {
		navigateToSurah(playerState.value.surahNumber + 1);
	}
};

const previousSurah = () => {
	if (playerState.value.surahNumber > 1) {
		navigateToSurah(playerState.value.surahNumber - 1);
	}
};
</script>
