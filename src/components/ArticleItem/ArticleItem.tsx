import { Article } from "../../types/article";

interface Props {
  article: Article;
}
const ArticleItem = ({ article }: Props) => {
  return (
    <li>
      <a href={article.url}>{article.title}</a>
    </li>
  );
};

export default ArticleItem;
