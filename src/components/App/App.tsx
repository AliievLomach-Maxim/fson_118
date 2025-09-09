import { keepPreviousData, useQuery } from "@tanstack/react-query";
import ArticleList from "../ArticleList/ArticleList";
import SearchForm from "../SearchForm/SearchForm";
import { getArticles } from "../../services/apiService";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import css from "./paginate.module.css";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [curPage, setCurPage] = useState(0);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setCurPage(0);
  };

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["articles", searchValue, curPage],
    queryFn: () => getArticles(searchValue, curPage),
    enabled: Boolean(searchValue),
    placeholderData: keepPreviousData,
  });

  return (
    <>
      <h2>ArticleList</h2>
      <SearchForm onSearch={handleSearch} />
      {isLoading && <h4>loading</h4>}
      <br />
      <br />
      {isSuccess && (
        <ReactPaginate
          pageCount={data?.nbPages ?? 0}
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          activeClassName={css.active}
          containerClassName={css.paginator}
          onPageChange={({ selected }) => setCurPage(selected)}
          forcePage={curPage}
          renderOnZeroPageCount={null}
        />
      )}
      <br />
      {data && <ArticleList items={data.hits} />}
      <hr />
    </>
  );
};

export default App;
// import { useQuery } from "@tanstack/react-query";
// import { getPerson } from "../../services/apiService";
// import { useState } from "react";

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["person", counter],
//     queryFn: () => getPerson(counter),
//     enabled: counter >= 1,
//   });

//   return (
//     <div>
//       <button onClick={() => setCounter(counter + 1)}>
//         Get Person with ID: {counter}
//       </button>
//       {isLoading && <h3>Loading...</h3>}
//       {isError && <h3>Error...</h3>}
//       <br />
//       {data && data.name}
//     </div>
//   );
// };

// export default App;
