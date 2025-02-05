import { nanoid } from "nanoid";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FilterState, PizzaInCart, PizzaState } from "../types";

export const usePizzas = create<PizzaState>()(
  devtools((set, get) => ({
    pizzas: [],
    cartPizzas: [],
    error: null,
    isLoading: true,

    fetchPizzas: async () => {
      try {
        set({ isLoading: true });
        const res = await fetch("./db.json");
        if (!res.ok) throw new Error("Failed to fetch! Try again.");
        set({ pizzas: await res.json(), error: null });
      } catch (error: unknown) {
        set({ error: (error as { message: string }).message });
      } finally {
        setTimeout(() => set({ isLoading: false }), 1000);
      }
    },

    addPizzasInCart: (pizzaId, type, size) => {
      console.log(pizzaId, type, size);

      const existingPizza = get().cartPizzas.find(
        (pizza: PizzaInCart) =>
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
      const changedPizza = get().cartPizzas.map((pizza: PizzaInCart) => {
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
    addCountPizzasInCart: (id: string) => {
      const changedPizza = get().cartPizzas.map((pizza) => {
        if (pizza.id == id) {
          return { ...pizza, count: pizza.count + 1 };
        }
        return pizza;
      });
      set({ cartPizzas: changedPizza });
    },
    deleteCountPizzasInCart: (id: string) => {
      const changedPizza = get().cartPizzas.map((pizza) => {
        if (pizza.id == id && pizza.count > 1) {
          return { ...pizza, count: pizza.count - 1 };
        }
        if (pizza.id == id && pizza.count == 1) return pizza;
        return pizza;
      });
      set({ cartPizzas: changedPizza });
    },
    deletePizzasInCart: (pizzaId: string) => {
      const deletedPizza = get().cartPizzas.filter(
        (pizza) => pizza.id != pizzaId
      );
      set({ cartPizzas: [...deletedPizza] });
    },
  }))
);

export const useFilters = create<FilterState>()(
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
