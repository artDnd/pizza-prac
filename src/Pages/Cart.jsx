import styles from "./Cart.module.scss";
import { CartItem } from "../Components/Cart/CartItem";
import { usePizzas } from "../Store/Store";
export const Cart = () => {
  const totalPrice = usePizzas((state) => state.totalPrice);
  const cartPizzas = usePizzas((state) => state.cartPizzas);
  const cartPizzasElement = cartPizzas.map((pizza) => (
    <CartItem key={pizza.id} {...pizza} />
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
        <p>Сумма заказа: {totalPrice}</p>
      </div>
    </div>
  );
};
