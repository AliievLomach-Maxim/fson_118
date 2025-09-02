import { useId } from "react";

const TestForm = () => {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   // const email = formData.get("email") as string;
  //   // const userName = formData.get("userName") as string;
  //   e.currentTarget.reset();
  // };
  //  const handleSubmit = (formData: FormData) => {
  // const email = formData.get("email") as string;
  // const userName = formData.get("userName") as string;
  // console.log("email", email);
  // console.log("userName", userName);
  //   };
  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData);
    console.log("values", values);
  };

  const id = useId();
  //   const userNameId = useId();
  //   const emailId = useId();

  return (
    <form action={handleSubmit}>
      <label htmlFor={`${id}-userName`}>Name</label>
      <br />
      <input type="text" name="userName" id={`${id}-userName`} />
      <br />
      <label htmlFor={`${id}-email`}>email</label>
      <br />
      <input type="text" name="email" id={`${id}-email`} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TestForm;
