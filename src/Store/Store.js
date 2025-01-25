import { nanoid } from "nanoid";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const usePizzas = create(
  devtools((set, get) => ({
    pizzas: [],
    cartPizzas: [],
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
        setTimeout(() => set({ isLoading: false }), 1000);
      }
    },

    addPizzasInCart: (pizzaId, type, size) => {
      const existingPizza = get().cartPizzas.find(
        (pizza) =>
          pizza.pizzaId == pizzaId && pizza.type == type && pizza.size == size
      );
      if (!existingPizza) {
        set({
          cartPizzas: [
            ...get().cartPizzas,
            { id: nanoid(), count: 1, type, size, pizzaId },
          ],
        });
        return;
      }
      const changedPizza = get().cartPizzas.map((pizza) => {
        if (
          pizza.pizzaId == pizzaId &&
          pizza.type == type &&
          pizza.size == size
        ) {
          return { ...pizza, count: pizza.count + 1 };
        }
        return pizza;
      });
      set({ cartPizzas: changedPizza });
    },
    addCountPizzasInCart: (id) => {
      const changedPizza = get().cartPizzas.map((pizza) => {
        if (pizza.id == id) {
          return { ...pizza, count: pizza.count + 1 };
        }
        return pizza;
      });
      set({ cartPizzas: changedPizza });
    },
    deleteCountPizzasInCart: (id) => {
      const changedPizza = get().cartPizzas.map((pizza) => {
        if (pizza.id == id) {
          return { ...pizza, count: pizza.count - 1 };
        }
        return pizza;
      });
      set({ cartPizzas: changedPizza });
    },
    deletePizzasInCart: (pizzaId) => {
      const deletedPizza = get().cartPizzas.filter(
        (pizza) => pizza.id != pizzaId
      );
      set({ cartPizzas: [...deletedPizza] });
    },
  }))
);
export const useFilters = create(
  devtools((set) => ({
    category: null,
    filterCategory: [
      "Все",
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
      "Закрытые",
    ],
    filterSort: ["популярности", "по цене", "по алфавиту"],
    set,
  }))
);
