import { useState } from "react";
import CounterClicker from "../CounterClicker/CounterClicker";

type CounterValuesState = {
  counter1: number;
  counter2: number;
  counter3: number;
  counter4: number;
};

const CounterClickerMultiply = () => {
  // const [counter, setCounter] = useState(0);
  const [counterValues, setCounterValues] = useState<CounterValuesState>({
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
  });

  const handleIncrement = (key: keyof CounterValuesState) => {
    setCounterValues({
      ...counterValues,
      [key]: counterValues[key] + 1,
    });
  };

  const finalCounterValue =
    counterValues.counter1 +
    counterValues.counter2 +
    counterValues.counter3 +
    counterValues.counter4;

  return (
    <>
      <h2>Counter: {finalCounterValue}</h2>
      <hr />
      <CounterClicker
        value={counterValues.counter1}
        onHandleIncrement={() => handleIncrement("counter1")}
      />
      <CounterClicker
        value={counterValues.counter2}
        onHandleIncrement={() => handleIncrement("counter2")}
      />
      <CounterClicker
        value={counterValues.counter3}
        onHandleIncrement={() => handleIncrement("counter3")}
      />
      <CounterClicker
        value={counterValues.counter4}
        onHandleIncrement={() => handleIncrement("counter4")}
      />
    </>
  );
};
export default CounterClickerMultiply;
