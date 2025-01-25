import { usePizzas } from "../../Store/Store";
import styles from "./CartItem.module.scss";
export const CartItem = (props) => {
  const { deletePizzasInCart, addCountPizzasInCart, deleteCountPizzasInCart } =
    usePizzas();
  const needType = props.types.find((obj) => obj.type == props.type);
  const sizePrice = props.sizes.find((size) => size.size == props.size);
  const typePrice = props.types.find((type) => type.type == props.type);
  const totalPrice =
    (sizePrice.price + typePrice.price + props.price) * props.count;
  console.log(props);
  return (
    <div className={styles.card}>
      <div className={styles.card__title}>
        <img src={props.imageUrl} alt="pizza" />
        <div>
          <b>{props.title}</b>
          <span>
            {needType.name}, {props.size} см.
          </span>
        </div>
      </div>
      <div>
        <button onClick={() => deleteCountPizzasInCart(props.id)}>-</button>
        <span className={styles.card__number}>{props.count}</span>
        <button onClick={() => addCountPizzasInCart(props.id)}>+</button>
      </div>
      <b>{totalPrice} руб.</b>
      <button onClick={() => deletePizzasInCart(props.id)}>D</button>
    </div>
  );
};
