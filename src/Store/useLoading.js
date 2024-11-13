import { create } from "zustand";


export const useLoading = create((set) => ({
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
}));
