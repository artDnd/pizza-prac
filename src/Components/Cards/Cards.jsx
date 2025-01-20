import styles from "./Cards.module.scss";
import CardItem from "./CardItem/CardItem";
import { usePizzas } from "../../Store/Store";
import Skeleton from "../Skeleton/Skeleton";

const Card = () => {
  const pizzasItems = usePizzas((state) => state.pizzas);
  const isLoading = usePizzas((state) => state.isLoading);

  const skeletonElement = pizzasItems?.map((elem, i) => <Skeleton key={i} />);
  const pizzaElement = pizzasItems?.map((pizza) => (
    <CardItem key={pizza.id} {...pizza} />
  ));

  return (
    <div className={styles.cards}>
      <h2>Все пиццы</h2>
      <div className={styles.cards__block}>
        {isLoading ? skeletonElement : pizzaElement}
      </div>
    </div>
  );
};

export default Card;
