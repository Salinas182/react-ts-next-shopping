import { Article } from "../interfaces";

export const sortByHighestPrice = (articles: Article[]): Article[] => {
  let sortedArray = [...articles];

  return sortedArray?.sort((article1, article2) => {
    if (article2.newPrice > article1.newPrice) {
      return 1;
    }
    if (article2.newPrice < article1.newPrice) {
      return -1;
    }
    return 0;
  });
}

export const sortByLowestPrice = (articles: Article[]): Article[] => {
  let sortedArray = [...articles];

  return sortedArray?.sort((article1, article2) => {
    if (article1.newPrice > article2.newPrice) {
      return 1;
    }
    if (article1.newPrice < article2.newPrice) {
      return -1;
    }
    return 0;
  });
}
