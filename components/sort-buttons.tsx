import { Button } from "@mui/material";
import { sortByHighestPrice, sortByLowestPrice } from '../utils/sort-articles';

export default function SortButtons({ articles, setArticles }: any) {
  const buttonsStyle = { margin: '3px' };
  return (
    <>
      <Button
        variant="outlined"
        sx={buttonsStyle}
        onClick={() => setArticles(sortByLowestPrice(articles))}
      >
        Más baratos primero
      </Button>
      <Button
        variant="outlined"
        sx={buttonsStyle}
        onClick={() => setArticles(sortByHighestPrice(articles))}
      >
        Más caros primero
      </Button>
    </>
  )
}
