import { create } from 'zustand';
import { combine, createJSONStorage, persist } from 'zustand/middleware';

export const useStaticStore = create(
  persist(
    combine(
      {
        searchText: '' as string,
      },
      (set) => ({
        setSearchText: (p: string) => {
          set({ searchText: p });
        },
      })
    ),
    {
      name: 'static-storage',
      storage: createJSONStorage(() => {
        return localStorage;
      }),
    }
  )
);
