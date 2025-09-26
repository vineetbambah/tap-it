import { create } from "zustand";
export const useStore = create((set, get) => ({
    currentFocus: 'studentdb',

    setStudentFocus: () => set({ currentFocus: 'studentdb' }),
    setCheckinFocus: () => set({ currentFocus: 'checkindb' }),
}))