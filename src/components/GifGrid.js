import React from 'react'
import useFetchGif from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { data, loading} = useFetchGif(category);

  return (
    <>
    <h3>{ category }</h3>
    { loading && <p>Cargando...</p>}
    <div className="card-grid">
      { data.map( img => 
        <GifGridItem 
          key={ img.id }
          {...img}
        />
      )}
    </div>
    </>
  );
};
