import { Article, ArticleParams, IdParams } from "../interfaces";
import { getArticlesInfo } from "./api";

export function getArticlesIds(): IdParams[] {
  const articlesInfo: object[] = getArticlesInfo();
  let articlesIds: IdParams[] = [];
  articlesInfo?.forEach((article: Article) => {
    articlesIds.push(
      {
        params: {
          id: article.id
        }
      }
    );
  });
  return articlesIds;
}

export function getArticleData(id: string): ArticleParams | undefined {
  const articlesInfo: object[] = getArticlesInfo();
  const articleFound: object | undefined = articlesInfo?.find((article: Article) => article.id === id);
  return {
    id,
    articleFound,
  };
}
