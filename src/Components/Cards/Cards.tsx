import styles from "./Cards.module.scss";
import CardItem from "./CardItem/CardItem";
import { useFilters, usePizzas } from "../../Store/Store";
import Skeleton from "../Skeleton/Skeleton";

const Cards = () => {
  const pizzasItems = usePizzas((state) => state.pizzas);
  const isLoading = usePizzas((state) => state.isLoading);
  const { category } = useFilters();
  const skeletonElement = pizzasItems?.map((_, i) => <Skeleton key={i} />);

  const filteredElement = pizzasItems.filter((item) => {
    if (category === null) return true;
    return category == item.category;
  });
  const pizzaElement = filteredElement?.map((pizza) => (
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

export default Cards;
