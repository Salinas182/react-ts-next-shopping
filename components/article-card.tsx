import * as React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import { Article } from '../interfaces';

export default function ArticleCard({ article }: {article: Article}) {
  return (
    <div className="flex flex-col flex-1 group relative border-solid border-2 border-sky-100">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img src={article.url} alt={article.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
      </div>
      <div className="mt-4 text-center">
        <div className="mb-2">
          <h3 className="text-sm text-gray-700">
            <Link href={`/articles/${article.id}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {article.name}
            </Link>
          </h3>
        </div>
        {article.discount ? (
          <>
            <p className="text-sm font-medium text-gray-900 line-through mt-4">{article.price} €</p>
            <p className="text-sm font-medium text-red-800 mb-2">{article.newPrice} € (-{article.discount})</p>
          </>
          ) : (
            <p className="text-sm font-medium text-gray-900 mt-4 mb-2">{article.price} €</p>
          )
        }
        <p className="text-sm text-gray-500 mt-2 mb-6">Más colores</p>
      </div>
      <div className='flex justify-center mb-2 content-end mt-auto'>
        <Button variant="contained" className="button">
          Añadir
        </Button>
      </div>
    </div>    
  )
}