import { sortByHighestPrice, sortByLowestPrice } from '../../utils/sort-articles';
import mockArticles from '../mock-data/mock-articles.json';

describe('sort-articles', () => {
  const articlesPrices = mockArticles.data.map((article) => article.newPrice);

  describe('sortByHighestPrice', () => {
    it('receives an array of articles and sorts them by price, in descending order', () => {
      const expectedOrder = articlesPrices.sort().reverse();
      const result = sortByHighestPrice(mockArticles.data);
      result.forEach((article, idx) => {
        expect(article.newPrice).toBe(expectedOrder[idx]);
      })
    });
  });

  describe('sortByLowestPrice', () => {
    it('receives an array of articles and sorts them by price, in ascending order', () => {
      const expectedOrder = articlesPrices.sort();
      const result = sortByLowestPrice(mockArticles.data);
      console.log({ expectedOrder, result });
      result.forEach((article, idx) => {
        expect(article.newPrice).toBe(expectedOrder[idx]);
      })
    });
  });
});