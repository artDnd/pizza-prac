import { useState } from "react";
import { NavigationItem } from "./NavBarItem/NavigationItem";
import styles from "./Navigation.module.scss";
import SortPopUp from "./SortPopUp/SortPopUp";
import { useFilters } from "../../Store/Store";

const Navigation = () => {
  const [selectCategory, setSelectCategory] = useState(0);
  const [sortIsOpenned, setSortIsOpenned] = useState(false);
  const [selectSortCategory, setSelectSortCategory] = useState(0);

  const handleSortOpenned = () => setSortIsOpenned(!sortIsOpenned);
  const handleCategory = (id: number) => setSelectCategory(id);
  const sortCategory = useFilters((state) => state.filterSort);
  const categoryName = useFilters((state) => state.filterCategory);

  const handleSortCategory = (index: number) => {
    setSelectSortCategory(index);
    handleSortOpenned();
  };

  const renderCategorys = categoryName.map((name, index) => (
    <NavigationItem
      key={name}
      id={index}
      title={name}
      nameId={index}
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
              selectSortCategory={selectSortCategory}
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
