import PropTypes from "prop-types";
import styles from "./CardItem.module.scss";
import { useState } from "react";
const CardItem = (props) => {
  const { title, imageUrl, types, sizes, price } = props;
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const typePizza = ["тонкое", "традиционное"];

  return (
    <div className={styles.card__item}>
      <img src={imageUrl} alt="pizza" />
      <b>{title}</b>
      <div className={styles.card__block}>
        <ul className={styles.card__type}>
          {types.map((typeId, i) => (
            <li
              key={i}
              className={activeType == i ? styles.active : ""}
              onClick={() => setActiveType(i)}
            >
              {typePizza[typeId]}
            </li>
          ))}
        </ul>
        <ul className={styles.card__size}>
          {sizes.map((size, i) => (
            <li
              className={activeSize == i ? styles.active : ""}
              onClick={() => setActiveSize(i)}
              key={i}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.card__price}>
        <b>
          от <span>{price} Р</span>
        </b>
        <button>+ Добавить</button>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  sizes: PropTypes.array,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  types: PropTypes.array,
  price: PropTypes.number,
  category: PropTypes.number,
  rating: PropTypes.number,
  id: PropTypes.number,
};

export default CardItem;
