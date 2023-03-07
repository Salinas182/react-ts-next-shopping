import React from 'react';
import { useState } from 'react';
import { Article } from '../interfaces';

export default function SearchBox({ setArticleToSearch, articles }: {setArticleToSearch: any, articles: Article[]}) {
  const [userInput, setUserInput] = useState<string>();
  const searchArticle = () => {
    if (!userInput) {
      setArticleToSearch(null);
      return;
    }

    const articlesFound = articles?.filter((article: Article) => article.name.includes(userInput));
    setArticleToSearch(articlesFound || null);
  }

  return (
    <>
      <div className="relative text-gray-600 focus-within:text-gray-400 flex-none">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button className="p-1 focus:outline-none focus:shadow-outline" onClick={() => searchArticle()}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input
          type="search"
          className="py-2 text-sm text-gray-900 bg-white rounded-md pl-10 focus:outline-none focus:bg-slate-200 border-solid border-2 border-slate-200"
          placeholder="Buscar"
          id="searchBox"
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
    </>
  )
}
