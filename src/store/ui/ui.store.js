import { create } from 'zustand'

export const useStoreUi = create((set) => ({
    DarkMode: false,

    SetDarkMode: (DarkMode) => set(({ DarkMode })),
}))