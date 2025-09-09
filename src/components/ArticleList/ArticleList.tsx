import { Article } from "../../types/article";
import ArticleItem from "../ArticleItem/ArticleItem";

interface Props {
  items: Article[];
}
const ArticleList = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <ArticleItem article={item} key={item.objectID} />
      ))}
    </ul>
  );
};

export default ArticleList;
