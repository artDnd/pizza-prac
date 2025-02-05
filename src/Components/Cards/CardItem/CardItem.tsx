import styles from "./CardItem.module.scss";
import { useState } from "react";
import { usePizzas } from "../../../Store/Store";
import { Pizza } from "../../../types";

const CardItem = (props: Pizza) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typePizza = ["тонкое", "традиционное"];

  const addPizzasInCart = usePizzas((state) => state.addPizzasInCart);

  return (
    <div className={styles.card__item}>
      <img src={props.imageUrl} alt="pizza" />
      <b>{props.title}</b>
      <div className={styles.cards__block}>
        <ul className={styles.card__type}>
          {props.types.map((typeId, i) => (
            <li
              key={i}
              className={activeType == i ? styles.active : ""}
              onClick={() => setActiveType(i)}
            >
              {typePizza[typeId.type]}
            </li>
          ))}
        </ul>
        <ul className={styles.card__size}>
          {props.sizes.map((obj, i) => (
            <li
              className={activeSize == i ? styles.active : ""}
              onClick={() => setActiveSize(i)}
              key={i}
            >
              {obj.size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.card__price}>
        <b>
          от <span>{props.price} Р</span>
        </b>
        <button
          onClick={() => {
            addPizzasInCart(
              props.id,
              props.types[activeType].type,
              props.sizes[activeSize].size
            );
          }}
        >
          + Добавить
        </button>
      </div>
    </div>
  );
};

export default CardItem;
