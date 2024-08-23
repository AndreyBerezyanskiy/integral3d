import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NavState {
  navVisible: boolean;
  toggleNav: () => void;
  setNavVisible: (visible: boolean) => void;
}

interface AuthState {
  isAuthenticated: boolean;
  user: { username: string } | null;
  login: (username: string) => void;
  logout: () => void;
}

export const useNavStore = create<NavState>((set) => ({
  navVisible: false,
  toggleNav: () => set((state) => ({ navVisible: !state.navVisible })),
  setNavVisible: (visible) => set({ navVisible: visible }),
}));

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: (username) => set({ isAuthenticated: true, user: { username } }),
      logout: () => set({ isAuthenticated: false, user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
