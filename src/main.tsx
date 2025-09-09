import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);

// const jsxMarkup = (
//   <div>
//     <img src="https://i.imgflip.com/5glqrg.jpg" alt="Jackie" width={320} />
//     <p>HTML in JS? What kind of black magic is this? 🧙‍♂️</p>
//     <p>
//       This is <strong>JSX (JavaScript XML)</strong> — and yes, you really get
//       used to it.
//     </p>
//   </div>
// );

// const getMyVar = () => 10;

// const Component = () => {
//   return (
//     <div>
//       <img src="https://i.imgflip.com/5glqrg.jpg" alt="Jackie" width={320} />
//       <p>HTML in JS? What kind of black magic is this? 🧙‍♂️</p>
//       <p>
//         This is <strong>JSX (JavaScript XML)</strong> — and yes, you really get
//         used to it.
//       </p>
//       <p>
//         {2 + 2} {getMyVar()}
//       </p>
//     </div>
//   );
// };

// createRoot(document.getElementById("root") as HTMLDivElement).render(jsxMarkup);
// createRoot(document.getElementById("root") as HTMLDivElement).render(<App />);
