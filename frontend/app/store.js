import { create } from "zustand";
export const useStore = create((set, get) => ({
    currentFocus: 'studentdb',

    setStudentFocus: () => set({ currentFocus: 'studentdb' }),
    setCheckinFocus: () => set({ currentFocus: 'checkindb' }),
    students: [],
  checkins: [],
  fetchStudents: async () => {
    const res = await fetch("http://127.0.0.1:8000/students");
    const data = await res.json();
    set({ students: data });
  },
  addStudent: async (student) => {
    await fetch("http://127.0.0.1:8000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    // Refresh students after adding
    const res = await fetch("http://127.0.0.1:8000/students");
    const data = await res.json();
    set({ students: data });
  },
  fetchCheckins: async () => {
    const res = await fetch("http://127.0.0.1:8000/checkins");
    const data = await res.json();
    set({ checkins: data });
  },
  addCheckin: async (checkin) => {
    await fetch("http://127.0.0.1:8000/checkins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(checkin),
    });
    // Refresh checkins after adding
    const res = await fetch("http://127.0.0.1:8000/checkins");
    const data = await res.json();
    set({ checkins: data });
  },
}))