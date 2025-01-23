import { useFilters } from "../../../Store/Store";
import styles from "./NavigationItem.module.scss";
export const NavigationItem = ({
  title,
  id,
  nameId,
  selectCategory,
  handleCategory,
}) => {
  const set = useFilters((state) => state.set);
  // const setCategory = useFilters((state) => state.category);
  const allCategories = () => {
    const id = 0;
    if (id === nameId) return set({ category: null });
  };

  return (
    <>
      <li
        onClick={() => {
          handleCategory(id);
          set({ category: nameId });
          allCategories();
        }}
        className={`${
          selectCategory === id
            ? `${styles.nav__title} ${styles.active}`
            : styles.nav__title
        }`}
      >
        {title}
      </li>
    </>
  );
};
