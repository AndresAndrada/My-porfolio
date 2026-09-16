import { create } from 'zustand'

export const useStoreUi = create((set) => ({
    DarkMode: false,
    Language: 'es',

    SetDarkMode: (DarkMode) => set(({ DarkMode })),
    SetLanguage: (Language) => set(({ Language })),
}))