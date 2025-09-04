import { useEffect, useState } from "react";

// strict mount Timer > Interval > strict unmount Timer > mount Timer > interval
const Timer = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(new Date());
      console.log("setInterval", Date.now());
    }, 1000);
    //
    return () => {
      console.log("clearInterval");
      clearInterval(id);
    };
  }, []);

  //   useEffect(() => {
  //     console.log("Mount >>>");
  //     return () => {
  //       console.log("unmount");
  //     };
  //   }, []);

  return <div>{timer.toLocaleTimeString()}</div>;
};

export default Timer;
