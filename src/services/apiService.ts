import axios from "axios";
import type { Article } from "../types/article";

interface FetchArticlesResponse {
  hits: Article[];
  nbPages: number;
}

export const getArticles = async (searchValue: string) => {
  const res = await axios.get<FetchArticlesResponse>(
    `http://hn.algolia.com/api/v1/search?query=${searchValue}`
  );
  return res.data.hits;
};
