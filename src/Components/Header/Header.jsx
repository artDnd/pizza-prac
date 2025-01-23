import { Link } from "react-router";
import styles from "./header.module.scss";
import { usePizzas } from "../../Store/Store";
const Header = () => {
  const cartPizzas = usePizzas((state) => state.cartPizzas);
  const totalPrice = usePizzas((state) => state.totalPrice);

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
        <b className={styles.header__price}>{totalPrice} руб.</b>
        <b>Корзина: {cartPizzas.length}</b>
      </Link>
    </header>
  );
};

export default Header;
