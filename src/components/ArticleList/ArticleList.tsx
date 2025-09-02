import { Article } from "../../types/article";
import ArticleItem from "../ArticleItem/ArticleItem";

interface ArticleListProps {
  articleList: Article[];
}
const ArticleList = ({ articleList }: ArticleListProps) => {
  return (
    <ul>
      {articleList.map((el) => (
        <ArticleItem key={el.objectID} article={el} />
      ))}
    </ul>
  );
};

export default ArticleList;
