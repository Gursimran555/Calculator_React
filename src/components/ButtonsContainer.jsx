import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({onButtonClick}) => {
  return (
    <div className={styles.buttonsContainer}>
    <button className={styles.button} onClick={() => onButtonClick("C")}>C</button>
    <button className={styles.button} onClick={() => onButtonClick("1")}>1</button>
    <button className={styles.button} onClick={() => onButtonClick("+")}>+</button>
    <button className={styles.button} onClick={() => onButtonClick("2")}>2</button>
    <button className={styles.button} onClick={() => onButtonClick("3")}>3</button>
    <button className={styles.button} onClick={() => onButtonClick("-")}>-</button>
    <button className={styles.button} onClick={() => onButtonClick("4")}>4</button>
    <button className={styles.button} onClick={() => onButtonClick("5")}>5</button>
    <button className={styles.button} onClick={() => onButtonClick("*")}>*</button>
    <button className={styles.button} onClick={() => onButtonClick("6")}>6</button>
    <button className={styles.button} onClick={() => onButtonClick("7")}>7</button>
    <button className={styles.button} onClick={() => onButtonClick("/")}>/</button>
    <button className={styles.button} onClick={() => onButtonClick("8")}>8</button>
    <button className={styles.button} onClick={() => onButtonClick("9")}>9</button>
    <button className={styles.button} onClick={() => onButtonClick("%")}>%</button>
    <button className={styles.button} onClick={() => onButtonClick("0")}>0</button>
    <button className={styles.button} onClick={() => onButtonClick(".")}>.</button>
    <button className={styles.button} onClick={() => onButtonClick("=")}>=</button>
                                                
  </div>
  
  )
}
export default ButtonsContainer ;











