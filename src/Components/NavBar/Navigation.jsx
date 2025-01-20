import { useState } from "react";
import { NavigationItem } from "./NavBarItem/NavigationItem";
import styles from "./Navigation.module.scss";
import SortPopUp from "./SortPopUp/SortPopUp";

const Navigation = () => {
  const [selectCategory, setSelectCategory] = useState(0);
  const [sortIsOpenned, setSortIsOpenned] = useState(false);
  const [selectSortCategory, setSelectSortCategory] = useState(0);

  const handleSortOpenned = () => setSortIsOpenned(!sortIsOpenned);
  const handleCategory = (id) => setSelectCategory(id);
  const sortCategory = ["популярности", "по цене", "по алфавиту"];
  const categoryName = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const handleSortCategory = (index) => {
    setSelectSortCategory(index);
    handleSortOpenned();
  };

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
          Сортировка по:{" "}
          <b className={styles.active} onClick={handleSortOpenned}>
            {sortCategory[selectSortCategory]}
          </b>
        </span>
        <div className={styles.sort}>
          {sortIsOpenned && (
            <SortPopUp
              setSelectSortCategory={setSelectSortCategory}
              selectSortCategory={selectSortCategory}
              handleSortOpenned={handleSortOpenned}
              sortCategory={sortCategory}
              handleSortCategory={handleSortCategory}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
