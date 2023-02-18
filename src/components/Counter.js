import { useDispatch, useSelector } from "react-redux";
import { calcActions } from "../store/calculator/calculatorSlice";
import classes from "./Counter.module.css";

const Counter = () => {
  const { result } = useSelector((state) => state.calculator);

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch({ type: calcActions.plus, payload: 5 });
  };

  const divideHandler = () => {
    dispatch({ type: calcActions.divide, payload: 4 });
  };

  const subtractHandler = () => {
    dispatch({ type: calcActions.subtract, payload: 10 });
  };

  const multiplyHandler = () => {
    dispatch({ type: calcActions.multiply, payload: 2 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Calculator</h1>
      <div className={classes.value}>Result: {result}</div>
      <button onClick={addHandler}>+5</button>
      <button onClick={subtractHandler}>-10</button>
      <button onClick={multiplyHandler}>*2</button>
      <button onClick={divideHandler}>/4</button>
    </main>
  );
};

export default Counter;
