import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const usePizzas = create(
  devtools((set) => ({
    pizzas: [],
    error: null,
    isLoading: null,
    fetchPizzas: async () => {
      try {
        set({ isLoading: true });
        const res = await fetch("./db.json");
        if (!res.ok) throw new Error("Failed to fetch! Try again.");
        set({ pizzas: await res.json(), error: null });
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);
