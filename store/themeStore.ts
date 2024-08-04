import { create } from "zustand";

type Theme = {
  foreground: string;
  background: string;
  yellow: string;
  green: string;
  white: string;
};

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const useTheme = create<ThemeStore>((set) => ({
  theme: {
    foreground: "#ffffff",
    background: "#000000",
    yellow: "#f1fa8c",
    green: "#50fa7b",
    white: "#f8f8f2",
  },
  setTheme: (theme) => set({ theme }),
}));
