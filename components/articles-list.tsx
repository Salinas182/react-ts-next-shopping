import React from 'react';
import { useState, useEffect } from "react";
import ArticleCard from "./article-card";
import ChangeViewButtons from "./change-view-buttons";
import SearchBox from "./search-box";
import SortButtons from "./sort-buttons";

export default function ArticlesList({ allArticles }: any) {
  const [articles, setArticles] = useState<[]>(allArticles);
  const [articleToSearch, setArticleToSearch] = useState<[]>([]);
  const [showLessItems, setShowLessItems] = useState<boolean>(false);
  const [gridClass, setGridClass] = useState<string>(`mt-6 grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8`);

  useEffect(() => {
    setGridClass(
      showLessItems ? 
        `mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 xl:gap-x-8` :
        `mt-6 grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8`
    );
  }, [showLessItems]);

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
        <div className={gridClass}>
          {articleToSearch?.length ?
            (
              articleToSearch?.map((article: any, index: number) => {
                return (
                  <ArticleCard article={article} key={`article-${index}`}/>
                )
              })
            ) :
            (
              articles?.map((article:any, index: number) => {
                return (
                  <ArticleCard article={article} key={`article-${index}`} />
                )
              })
            )
          }
        </div>
      </div>
    </>
  )
};
