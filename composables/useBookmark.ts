const STORAGE_KEY = 'tadhkirah_bookmark';

export interface Bookmark {
  surahId: number;
  ayahId: number;
}

export const useBookmark = () => {
  const bookmark = useState<Bookmark | null>('bookmark', () => null);

  const loadBookmark = () => {
    if (process.client) {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        bookmark.value = stored ? JSON.parse(stored) : null;
      } catch {
        bookmark.value = null;
      }
    }
  };

  const setBookmark = (surahId: number, ayahId: number) => {
    bookmark.value = { surahId, ayahId };
    if (process.client) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ surahId, ayahId }));
    }
  };

  const clearBookmark = () => {
    bookmark.value = null;
    if (process.client) {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const toggleBookmark = (surahId: number, ayahId: number) => {
    if (bookmark.value?.surahId === surahId && bookmark.value?.ayahId === ayahId) {
      clearBookmark();
    } else {
      setBookmark(surahId, ayahId);
    }
  };

  const isBookmarked = (surahId: number, ayahId: number): boolean => {
    return bookmark.value?.surahId === surahId && bookmark.value?.ayahId === ayahId;
  };

  return { bookmark, loadBookmark, setBookmark, clearBookmark, toggleBookmark, isBookmarked };
};
