import React, { Fragment, useState, FC } from "react";
import styles from "./../App.module.css";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCount(count + 1);
  };

  const handleDecrement: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCount(count - 1);
  };

  let changeColor =
    count < 0 ? "red" : "green" && count === 0 ? "black" : "green";

  return (
    <Fragment>
      <div className={styles.center}>
        <h1>Counter</h1>
        <div>
          <button onClick={handleIncrement}>+</button>
          <h1 style={{ color: changeColor }}>{count}</h1>
        </div>
        <div>
          <button onClick={handleDecrement}> -</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Counter;
