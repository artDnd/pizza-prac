import styles from "./header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src="/logo.png" alt="logo" />
        <div>
          <h1>PEACT PIZZA</h1>
          <span>самая вкусная пицца во вселенной</span>
        </div>
      </div>
      <div className={styles.header__cart}>
        <b className={styles.header__price}>520 Р</b>
        <b>Корзина: 3</b>
      </div>
    </header>
  );
};

export default Header;
