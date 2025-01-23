import { usePizzas } from "../../Store/Store";
import styles from "./CartItem.module.scss";
export const CartItem = (props) => {
  const { title, imageUrl, types, sizes, price, id } = props;
  const deletePizza = usePizzas((state) => state.deletePizzasInCart);

  return (
    <div className={styles.card}>
      <div className={styles.card__title}>
        <img src={imageUrl} alt="pizza" />
        <div>
          <b>{title}</b>
          <span>тонкое тесто, {sizes} см.</span>
        </div>
      </div>
      <div>
        <button>-</button>
        <span className={styles.card__number}>2</span>
        <button>+</button>
      </div>
      <b>{price} руб.</b>
      <button onClick={() => deletePizza(id)}>D</button>
    </div>
  );
};
