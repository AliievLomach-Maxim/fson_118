import { Article } from "../../types/article";

interface ArticleItemProps {
  article: Article;
}
const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <li>
      <a href={article.url}>{article.title}</a>
    </li>
  );
};

export default ArticleItem;
