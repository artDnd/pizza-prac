import { Link } from "react-router";
import styles from "./header.module.scss";

import { usePizzas } from "../../Store/Store";
import { getTotalPrice } from "../../utils/getTotalPrice";
const Header = () => {
  const cartPizzas = usePizzas((state) => state.cartPizzas);
  const pizzas = usePizzas((state) => state.pizzas);
  const price = getTotalPrice(pizzas, cartPizzas);

  const count = cartPizzas.reduce((res, cartItem) => cartItem.count + res, 0);
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.header__logo}>
        <img src="/logo.png" alt="logo" />
        <div>
          <h1>PEACT PIZZA</h1>
          <span>самая вкусная пицца во вселенной</span>
        </div>
      </Link>
      <Link to={"/cart"} className={styles.header__cart}>
        <b className={styles.header__price}>{price} руб.</b>
        <b>Корзина: {count}</b>
      </Link>
    </header>
  );
};

export default Header;
