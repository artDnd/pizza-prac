import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const usePizzas = create(
  devtools((set, get) => ({
    pizzas: [],
    cartPizzas: [],
    totalPrice: 0,
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

    addPizzasInCart: (pizzaId) => {
      const newPizzaItem = get().pizzas.filter((pizza) => pizza.id == pizzaId);
      set({ cartPizzas: [...get().cartPizzas, ...newPizzaItem] });
      get().getTotalPrice();
    },
    deletePizzasInCart: (pizzaId) => {
      const deletedPizza = get().cartPizzas.filter(
        (pizza) => pizza.id != pizzaId
      );

      set({
        cartPizzas: [...deletedPizza],
        totalPrice: get().totalPrice - deletedPizza[0].price,
      });
    },
    getTotalPrice: () => {
      const totalSum = get().cartPizzas.reduce(
        (acc, obj) => acc + obj.price,
        0
      );
      set({ totalPrice: totalSum });
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
    // setFilter: (value) => {
    //   const filteredPizzas = usePizzas
    //     .getState()
    //     .pizzas.filter((pizza) => value == pizza.category);
    //   usePizzas.setState({ pizzas: [...filteredPizzas] });
    //   console.log(value);
    // },
  }))
);
