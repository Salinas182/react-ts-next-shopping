import React from 'react';
import { Button } from "@mui/material";
import { sortByHighestPrice, sortByLowestPrice } from '../utils/sort-articles';
import { Article } from '../interfaces';

export default function SortButtons({ articles, setArticles }: { articles: Article[], setArticles: any}) {
  const buttonsStyle = { margin: '3px' };
  return (
    <>
      <Button
        variant="outlined"
        sx={buttonsStyle}
        onClick={() => setArticles(sortByLowestPrice(articles))}
      >
        Precio más bajo primero
      </Button>
      <Button
        variant="outlined"
        sx={buttonsStyle}
        onClick={() => setArticles(sortByHighestPrice(articles))}
      >
        Precio más alto primero
      </Button>
    </>
  )
}
