import { create } from 'zustand'

export const useStoreUi = create((set) => ({
    DarkMode: false,
    Language: 'es',
    Entered: false,

    SetDarkMode: (DarkMode) => set(({ DarkMode })),
    SetLanguage: (Language) => set(({ Language })),
    SetEntered: (Entered) => set(({ Entered })),
}))