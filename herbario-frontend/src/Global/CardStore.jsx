import { create } from "zustand";

const useCardStore = create((set) => ({
  view: false,
  data: [],
  setView: (view) => set({ view }),
  setData: (data) => set({ data }),
}));

export default useCardStore;
