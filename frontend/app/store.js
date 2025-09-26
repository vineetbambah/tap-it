import { create } from "zustand";
const API_URL = process.env.REACT_APP_API_URL;
export const useStore = create((set, get) => ({
    currentFocus: 'studentdb',

    setStudentFocus: () => set({ currentFocus: 'studentdb' }),
    setCheckinFocus: () => set({ currentFocus: 'checkindb' }),
    students: [],
  checkins: [],
  fetchStudents: async () => {
    const res = await fetch(`${API_URL}/students`);
    const data = await res.json();
    set({ students: data });
  },
  addStudent: async (student) => {
    await fetch(`${API_URL}/students`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    // Refresh students after adding
    const res = await fetch(`${API_URL}/students`);
    const data = await res.json();
    set({ students: data });
  },
  fetchCheckins: async () => {
    const res = await fetch(`${API_URL}/checkins`);
    const data = await res.json();
    set({ checkins: data });
  },
  addCheckin: async (checkin) => {
    await fetch(`${API_URL}/checkin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(checkin),
    });
    // Refresh checkins after adding
    const res = await fetch(`${API_URL}/checkins`);
    const data = await res.json();
    set({ checkins: data });
  },
}))