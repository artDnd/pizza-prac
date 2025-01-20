import styles from "./SortPopUp.module.scss";
import PropTypes from "prop-types";

const SortPopUp = ({
  selectSortCategory,
  sortCategory,
  handleSortCategory,
}) => {
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
SortPopUp.propTypes = {
  selectSortCategory: PropTypes.number,
  handleSortCategory: PropTypes.func,
  sortCategory: PropTypes.array,
};
export default SortPopUp;
