import styles from "./Cart.module.scss";
import { CartItem } from "../Components/Cart/CartItem";
import { usePizzas } from "../Store/Store";
import { getTotalPrice } from "../utils/getTotalPrice";

export const Cart = () => {
  const cartPizzas = usePizzas((state) => state.cartPizzas);
  const pizzas = usePizzas((state) => state.pizzas);
  const count = cartPizzas.reduce((res, cartItem) => cartItem.count + res, 0);
  const price = getTotalPrice(pizzas, cartPizzas);

  const cartElementId = cartPizzas
    .map((obj) => {
      const pizza = pizzas.find((pizza) => pizza.id == obj.pizzaId);
      if (pizza) return { pizza, obj };
      return null;
    })
    .filter(Boolean);

  const cartPizzasElement = cartElementId.map((props) => {
    const { pizza, obj } = props!;
    return <CartItem key={obj.id} {...pizza} {...obj} />;
  });
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
          Всего пицц: <b>{count}</b>
        </p>
        <p>
          Сумма заказа: <b>{price}</b>
        </p>
      </div>
    </div>
  );
};
