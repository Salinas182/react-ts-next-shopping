import * as articlesData from './data.json';


export function getArticlesInfo(): object[] {
  return JSON.parse(JSON.stringify(articlesData));
}
