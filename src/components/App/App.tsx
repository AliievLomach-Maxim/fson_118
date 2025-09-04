import { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";

const getDefaultValue = () => {
  const localState = localStorage.getItem("sidebar");
  if (localState) {
    const newValue = JSON.parse(localState);
    return newValue;
  }
  return false;
};

const App = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(getDefaultValue);

  const closeSidebar = () => {
    setIsShowSidebar(false);
  };

  // useEffect(() => {
  //   const localState = localStorage.getItem("sidebar");
  //   if (localState) {
  //     const newValue = JSON.parse(localState);
  //     setIsShowSidebar(newValue);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("sidebar", JSON.stringify(isShowSidebar));
  }, [isShowSidebar]);

  return (
    <div>
      <button onClick={() => setIsShowSidebar(true)}>Open sidebar</button>
      {isShowSidebar && (
        <SideBar
          onClose={closeSidebar}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque impedit quas similique esse enim dignissimos possimus sed magnam sunt inventore amet, dolore et perspiciatis! Aliquid hic aperiam deserunt officiis!"
        />
      )}
    </div>
  );
};
// import { useState } from "react";
// import SideBar from "../SideBar/SideBar";

// const App = () => {
//   const [isShowTimer, setIsShowTimer] = useState(false);

//   return (
//     <div>
//       {/* <button onClick={() => setIsShowTimer(!isShowTimer)}>Toggle timer</button>
//       {isShowTimer && <Timer />} */}
//     </div>
//   );
// };

export default App;
// import axios from "axios";
// import { useEffect, useState } from "react";

// interface ValueState {
//   name: string;
//   height: string;
//   mass: string;
//   hair_color: string;
// }

// // [] === only first render > mount

// //
// // Mount App > GET > Render
// //
// // StrictMode Mount App > GET > Render > StrictMode unmount > Mount App > GET > Render

// const App = () => {
//   const [value, setValue] = useState<ValueState | null>(null);
//   const [click, setClick] = useState(1);
//   const [click2, setClick2] = useState(0);

//   // axios.get<ValueState>("https://swapi.info/api/people/1").then((res) => {
//   //   setValue(res.data);
//   // });

//   useEffect(() => {
//     console.log("useEffect", click);
//   }, [click]);

//   useEffect(() => {
//     // axios
//     //   .get<ValueState>(`https://swapi.info/api/people/${click}`)
//     //   .then((res) => {
//     //     setValue(res.data);
//     //   });
//     const fetching = async () => {
//       const res = await axios.get<ValueState>(
//         `https://swapi.info/api/people/${click}`
//       );
//       setValue(res.data);
//     };

//     fetching();
//   }, [click]);

//   console.log("Render App");

//   return (
//     <div>
//       <button onClick={() => setClick((prev) => prev + 1)}>{click}</button>
//       <br />
//       <button onClick={() => setClick2((prev) => prev + 1)}>{click2}</button>
//       <br />
//       {value && (
//         <>
//           <p>{value.name}</p>
//           <p>{value.hair_color}</p>
//           <p>{value.height}</p>
//           <p>{value.mass}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;
