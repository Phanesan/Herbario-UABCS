import { create } from "zustand";

const useUserStore = create((set) => ({
  token: false,
  rol: "",
  setToken: (token) => set({ token }),
  setRol: (rol) => set({ rol }),
}));

export default useUserStore;
