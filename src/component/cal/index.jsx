import { useState } from "react";
import styles from "./style.module.css";

function Cal() {
  const [result, setResult] = useState("0");

  //handle click
  const handleClick = (e) => {
    setResult(result.concat(e.target?.name));
  };
  //clear
  const clear = () => {
    setResult("");
  };

  //backspace
  const backspace = () => {
    setResult(result?.slice(0, -1));
  };

  //calc
  const calc = () => {
    try {
      setResult(Number(eval(result).toString()).toFixed(2));
    } catch (error) {
      setResult("invalid format");
    }
  };
  return (
    <>
      <div className={styles.calculatorWrapper}>
        <div>
          <h1 className={styles.title}>React Calculator</h1>
          <div className={styles.calculator}>
            <input type="text" className={styles.input} value={result} />
            <div className={styles.clearBtn}>
              <button onClick={clear} class="btn clear span-2">
                C
              </button>
              <button onClick={backspace} className={styles.operationBtn}>
                &larr;
              </button>
              <button
                onClick={handleClick}
                name="/"
                className={styles.operationBtn}
              >
                &divide;
              </button>
              <button onClick={handleClick} name="7" className={styles.btn}>
                7
              </button>
              <button onClick={handleClick} name="8" className={styles.btn}>
                8
              </button>
              <button onClick={handleClick} name="9" className={styles.btn}>
                9
              </button>
              <button
                onClick={handleClick}
                name="*"
                className={styles.operationBtn}
              >
                x
              </button>
              <button onClick={handleClick} name="4" className={styles.btn}>
                4
              </button>
              <button name="5" className={styles.btn}>
                5
              </button>
              <button onClick={handleClick} name="6" className={styles.btn}>
                6
              </button>
              <button
                onClick={handleClick}
                name="-"
                className={styles.operationBtn}
              >
                -
              </button>
              <button onClick={handleClick} name="1" className={styles.btn}>
                1
              </button>
              <button onClick={handleClick} name="2" className={styles.btn}>
                2
              </button>
              <button onClick={handleClick} name="3" className={styles.btn}>
                3
              </button>
              <button
                onClick={handleClick}
                name="+"
                className={styles.operationBtn}
              >
                +
              </button>
              <button onClick={handleClick} name="0" className={styles.btn}>
                0
              </button>
              <button onClick={calc} className={styles.operationBtn}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cal;
