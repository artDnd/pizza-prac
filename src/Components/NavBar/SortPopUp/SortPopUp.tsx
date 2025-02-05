import styles from "./SortPopUp.module.scss";
interface SortPopUpProps {
  handleSortCategory: (index: number) => void;
  sortCategory: Array<string>;
  selectSortCategory: number;
}
const SortPopUp = ({
  selectSortCategory,
  sortCategory,
  handleSortCategory,
}: SortPopUpProps) => {
  return (
    <ul className={styles.sort}>
      {sortCategory.map((category, index) => (
        <li
          className={selectSortCategory === index ? styles.active : ""}
          onClick={() => handleSortCategory(index)}
          key={index}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default SortPopUp;
