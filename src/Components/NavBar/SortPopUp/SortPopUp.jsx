import styles from "./SortPopUp.module.scss";
const SortPopUp = () => {
  return (
    <ul className={styles.sort}>
      <li className={styles.active}>популярности</li>
      <li>по цене</li>
      <li>по алфавиту</li>
    </ul>
  );
};

export default SortPopUp;
