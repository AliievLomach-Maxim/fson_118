import axios from "axios";
import type { Article } from "../types/article";

interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
}

interface FetchArticlesResponse {
  hits: Article[];
  nbPages: number;
}

export const getArticles = async (searchValue: string, page: number) => {
  const res = await axios.get<FetchArticlesResponse>(
    `http://hn.algolia.com/api/v1/search?query=${searchValue}`,
    { params: { hitsPerPage: 50, page } }
  );
  return res.data;
};

export const getPerson = async (personId: number) => {
  const res = await axios.get<Person>(
    `https://swapi.info/api/people/${personId}`
  );
  return res.data;
};
