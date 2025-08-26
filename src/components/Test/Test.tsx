import someImg from "../../assets/app-logo.png";
import styles from "./Test.module.css";
const Test = () => {
  return (
    <div className={styles.card}>
      <img src={someImg} alt="cat" width={120} />
      <img src="https://i.imgflip.com/5glqrg.jpg" alt="Jackie" width={320} />
      <p>HTML in JS? What kind of black magic is this? 🧙‍♂️</p>
      <p>
        This is <strong>JSX (JavaScript XML)</strong> — and yes, you really get
        used to it.
      </p>
      <p>{2 + 2}</p>
    </div>
  );
};

export default Test;
