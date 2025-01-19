import { useState } from "react";
import { NavigationItem } from "./NavBarItem/NavigationItem";
import styles from "./Navigation.module.scss";
import SortPopUp from "./SortPopUp/SortPopUp";

const Navigation = () => {
  const [selectCategory, setSelectCategory] = useState(0);
  const handleCategory = (id) => {
    setSelectCategory(id);
  };
  const categoryName = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const renderCategorys = categoryName.map((value, index) => (
    <NavigationItem
      key={value}
      id={index}
      title={value}
      selectCategory={selectCategory}
      handleCategory={handleCategory}
    />
  ));
  return (
    <div className={styles.nav}>
      <ul className={styles.nav__list}>{renderCategorys}</ul>
      <div>
        <span>
          Сортировка по: <b className={styles.active}>популярности</b>
        </span>
        <div className={styles.sort}>
          <SortPopUp />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
