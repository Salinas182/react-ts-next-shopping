import { useState } from "react";
import ArticleCard from "./article-card";
import ChangeViewButtons from "./change-view-buttons";
import SearchBox from "./search-box";
import SortButtons from "./sort-buttons";

export default function ArticlesList({ allArticles }: any) {
  const [articles, setArticles] = useState<[]>(allArticles);
  const [articleToSearch, setArticleToSearch] = useState<[]>([]);
  const [showLessItems, setShowLessItems] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col-reverse flex-wrap sm:flex-row">
        <SearchBox setArticleToSearch={setArticleToSearch} articles={articles} />
        <ChangeViewButtons setShowLessItems={setShowLessItems} />
        <br />
        <SortButtons articles={articles} setArticles={setArticles} />
        <br />
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

          <div className={`mt-6 grid grid-cols-${showLessItems ? 2 : 3} gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-${showLessItems ? 3 : 4} xl:gap-x-8`}>
            {articleToSearch?.length ?
              (
                articleToSearch?.map((article: any) => {
                  return (
                    <ArticleCard article={article} />
                  )
                })
              ) :
              (
                articles?.map((article:any) => {
                  return (
                    <ArticleCard article={article}/>
                  )
                })
              )
            }
          </div>
        </div>
      </div>
    </>
  )
};
