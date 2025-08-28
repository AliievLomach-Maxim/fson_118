interface CounterClickerProps {
  value: number;
  onHandleIncrement: () => void;
}

const CounterClicker = ({ value, onHandleIncrement }: CounterClickerProps) => {
  //   const [counter, setCounter] = useState(0);

  //   const handleIncrement = () => {
  //     setCounter(counter + 1);
  //   };

  return <button onClick={onHandleIncrement}>{value}</button>;
};

export default CounterClicker;
