import React from "react";

const EventsComponent = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("event", event);
  };

  const handleClickMe = (value: number) => {
    console.log("value", value);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // e.target.value
  // };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => handleClickMe(100)}>Click Me</button>
      {/* <input type="text" onChange={handleChange} /> */}
    </div>
  );
};

export default EventsComponent;

// const handleCLick = (event) => {  }

// const button = doc...
// button.addEve...('click',handleCLick)
// button.addEve...('click',()=>{})
// button.addEve...('input',()=>{})
