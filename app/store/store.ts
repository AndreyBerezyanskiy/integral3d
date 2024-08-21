import { create } from "zustand";

interface NavState {
  navVisible: boolean;
  toggleNav: () => void;
  setNavVisible: (visible: boolean) => void;
}

export const useNavStore = create<NavState>((set) => ({
  navVisible: false,
  toggleNav: () => set((state) => ({ navVisible: !state.navVisible })),
  setNavVisible: (visible) => set({ navVisible: visible }),
}));
