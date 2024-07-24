// store/playerStore.js
import { create } from "zustand";

const usePlayerStore = create((set) => ({
  isPlaying: true,
  isNeedSizeMax: 2,
  currentTrackIndex: 0,

  trackList: [],

  currentTrack: {},

  setCurrentTrackIndex: (currentTrackIndex) => set({ currentTrackIndex }),

  setPlayerSize: (isNeedSizeMax) => set({ isNeedSizeMax }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  
	setTrackList: (item) => set((state) => ({ trackList: [...state.trackList, item] })),
  setCurrentTrack: (currentTrack) => set({ currentTrack }),

	removeTrack: (item) => set((state) => ({ trackList: item })),
}));

export default usePlayerStore;

