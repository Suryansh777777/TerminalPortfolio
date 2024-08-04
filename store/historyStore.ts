import { create } from "zustand";

type HistoryItem = {
  command: string;
  outputs: string[];
};

type HistoryStore = {
  history: HistoryItem[];
  addToHistory: (command: string, outputs: string[]) => void;
  clearHistory: () => void;
};

export const useHistory = create<HistoryStore>((set) => ({
  history: [],
  addToHistory: (command, outputs) =>
    set((state) => ({
      history: [...state.history, { command, outputs }],
    })),
  clearHistory: () => set({ history: [] }),
}));
