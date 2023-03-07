export interface Article {
  id: string,
  name: string,
  price: string,
  newPrice: string,
  discount?: string,
  url: string
};

export interface IdParams {
  params: {
    id: string;
  };
};

export interface ArticleParams {
  id: string,
  articleFound: object | undefined,
};

export interface HomePageProps {
  allArticlesData: Article[]
};
