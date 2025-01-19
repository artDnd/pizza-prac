import styles from "./NavigationItem.module.scss";
export const NavigationItem = ({
  title,
  id,
  selectCategory,
  handleCategory,
}) => {
  return (
    <>
      <li
        onClick={() => handleCategory(id)}
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
