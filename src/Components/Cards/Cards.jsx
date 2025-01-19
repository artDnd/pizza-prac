import styles from "./Cards.module.scss";
import CardItem from "./CardItem/CardItem";
import { usePizzas } from "../../Store/Store";

const Card = () => {
  const pizzasItems = usePizzas((state) => state.pizzas);

  const pizzaElement = pizzasItems?.map((pizza) => (
    <CardItem key={pizza.id} {...pizza} />
  ));

  return (
    <div className={styles.cards}>
      <h2>Все пиццы</h2>
      <div className={styles.cards__block}>{pizzaElement}</div>
    </div>
  );
};

export default Card;
