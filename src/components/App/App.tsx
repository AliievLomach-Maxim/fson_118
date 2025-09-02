import SearchFrom from "../SearchFrom/SearchFrom";
import { useState } from "react";
import { Article } from "../../types/article";
import { getArticles } from "../../services/apiService";
import ArticleList from "../ArticleList/ArticleList";

const App = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (searchValue: string) => {
    try {
      setError(false);
      setIsLoading(true);
      const newArticles = await getArticles(searchValue);
      setArticles(newArticles);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // if (isLoading) {
  //   return "loader";
  // } else {
  //   return "list";
  // }

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Oops.. some error. pls reload page</h1>}
      <SearchFrom onSearch={handleSearch} disabled={isLoading} />
      <hr />
      {/* {!!articles.length && <ArticleList articleList={articles} />} */}
      {articles.length > 0 && <ArticleList articleList={articles} />}
    </>
  );
};

export default App;
