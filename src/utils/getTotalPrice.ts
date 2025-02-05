import { Pizza, PizzaInCart } from "../types";

export const getTotalPrice = (pizzas: Pizza[], cartPizzas: PizzaInCart[]) => {
  const pizzaForTotalPrice = cartPizzas.map((cartItem) => {
    const pizza = pizzas.find((pizza) => pizza.id == cartItem.pizzaId);
    if (pizza) return { pizza, cartItem };
    return null;
  });

  const price = pizzaForTotalPrice.reduce((acc, cartItem): any => {
    if (!cartItem) return null;
    const sizePrice = cartItem.pizza.sizes.find(
      (size) => size.size == cartItem.cartItem.size
    );
    const typePrice = cartItem.pizza.types.find(
      (type) => type.type == cartItem.cartItem.type
    );
    const pricePizza = cartItem.pizza.price * cartItem.cartItem.count;
    const sPice = sizePrice?.price;
    const tPrice = typePrice?.price;
    if (sPice == undefined || tPrice == undefined) return 0;
    const sizeAndTypePrice = (sPice + tPrice) * cartItem.cartItem.count;
    return acc + pricePizza + sizeAndTypePrice;
  }, 0);

  return price;
};
