export const getTotalPrice = (pizzas, cartPizzas) => {
  const pizzaForTotalPrice = cartPizzas.map((cartItem) => {
    const pizza = pizzas.find((pizza) => pizza.id == cartItem.pizzaId);
    if (pizza) return { pizza, cartItem };
    return null;
  });

  const price = pizzaForTotalPrice.reduce((acc, cartItem) => {
    const sizePrice = cartItem.pizza.sizes.find(
      (size) => size.size == cartItem.cartItem.size
    );
    const typePrice = cartItem.pizza.types.find(
      (type) => type.type == cartItem.cartItem.type
    );
    const pricePizza = cartItem.pizza.price * cartItem.cartItem.count;
    const sizeAndTypePrice =
      (sizePrice.price + typePrice.price) * cartItem.cartItem.count;
    return acc + pricePizza + sizeAndTypePrice;
  }, 0);
  return price;
};
