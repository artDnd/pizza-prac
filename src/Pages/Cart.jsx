import styles from "./Cart.module.scss";
import { CartItem } from "../Components/Cart/CartItem";
import { usePizzas } from "../Store/Store";
export const Cart = () => {
  const cartPizzas = usePizzas((state) => state.cartPizzas);
  const pizzas = usePizzas((state) => state.pizzas);
  const cartElementId = cartPizzas
    .map((obj) => {
      const pizza = pizzas.find((pizza) => pizza.id == obj.pizzaId);
      if (pizza) return { pizza, obj };
      return null;
    })
    .filter(Boolean);

  const cartPizzasElement = cartElementId.map(({ pizza, obj }) => (
    <CartItem key={pizza.id} {...pizza} {...obj} />
  ));

  return (
    <div className={styles.cart}>
      <div className={styles.cart__title}>
        <h2>Корзина</h2>
        <span>Очистить корзину</span>
      </div>
      {/* Карточка товара */}
      {cartPizzasElement}
      {/* Карточка товара */}
      <div className={styles.cart__info}>
        <p>
          Всего пицц: <b>{cartPizzas.length}</b>
        </p>
        <p>Сумма заказа: {}</p>
      </div>
    </div>
  );
};
