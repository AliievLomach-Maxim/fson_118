// interface CatCardProps {
//   name: string;
//   age: number;
//   imgUrl: string;
//   available: boolean;
// import "./CatCard.css";
import styles from "./CatCard.module.css";
import type { Cat } from "../../types/cat";
import clsx from "clsx";

interface CatCardProps {
  cat: Cat;
}

const CatCard = ({ cat: { name, age, image, available } }: CatCardProps) => {
  return (
    // <li className={available ? styles.card : styles.card2}>
    <li className={clsx(styles.card, available ? styles.card2 : styles.card3)}>
      <h2>Name: {name}</h2>
      <p>age: {age}</p>
      <img src={image} alt={name} width={200} />
      <p>Available: {available ? "Yes" : "No"}</p>
      <hr />
    </li>
  );
};

export default CatCard;
