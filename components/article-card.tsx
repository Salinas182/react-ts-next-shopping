import * as React from 'react';
import { Button } from '@mui/material';

export default function ArticleCard({ article }: any) {
  return (
    <div className="group relative border-solid border-2 border-sky-100">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img src={article.url} alt={article.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
      </div>
      <div className="mt-4">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {article.name}
            </a>
          </h3>
        </div>
        <p className="mt-1 text-sm text-gray-500">Más colores</p>
        <p className="text-sm font-medium text-gray-900">{article.price} €</p>
      </div>
      <div className='flex justify-center mt-2 mb-2 content-end'>
        <Button variant="contained" className="button">
          Añadir
        </Button>
      </div>
    </div>    
  )
}