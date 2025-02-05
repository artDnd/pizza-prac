export interface PizzaState {
  pizzas: Pizza[];
  cartPizzas: PizzaInCart[];
  error: null | string;
  isLoading: boolean;
  addPizzasInCart: (pizzaId: string, type: number, size: number) => void;
  deletePizzasInCart: (id: string) => void;
  addCountPizzasInCart: (id: string) => void;
  deleteCountPizzasInCart: (id: string) => void;
}

interface PizzaType {
  type: number;
  name: string;
  price: number;
}

interface PizzaSize {
  size: number;
  price: number;
}
export interface Pizza {
  id: string;
  category: number;
  rating: number;
  price: number;
  imageUrl: string;
  title: string;
  types: Array<PizzaType>;
  sizes: Array<PizzaSize>;
  count?: number;
}
export interface PizzaInCart {
  pizzaId: string;
  type: number;
  size: number;
  id: string;
  count: number;
}

export interface FilterState {
  category: null | number;
  filterCategory: string[];
  filterSort: string[];
  set: any;
}
