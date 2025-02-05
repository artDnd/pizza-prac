import { usePizzas } from "../../Store/Store";
import { Pizza } from "../../types";
import styles from "./CartItem.module.scss";
interface CartItemProps extends Pizza {
  type: number;
  size: number;
}
export const CartItem = (props: CartItemProps) => {
  const { deletePizzasInCart, addCountPizzasInCart, deleteCountPizzasInCart } =
    usePizzas();
  const needType = props.types.find((obj) => obj.type == props.type);
  const sizePrice = props.sizes.find((size) => size.size == props.size);
  const typePrice = props.types.find((type) => type.type == props.type);
  const sPrice = sizePrice?.price || 0;
  const tPrice = typePrice?.price || 0;
  const totalPrice = (sPrice + tPrice + props.price) * (props.count || 0);
  return (
    <div className={styles.card}>
      <div className={styles.card__title}>
        <img src={props.imageUrl} alt="pizza" />
        <div>
          <b>{props.title}</b>
          <span>
            {needType?.name}, {props.size} см.
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
