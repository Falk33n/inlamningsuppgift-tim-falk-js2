'use client';

import { Skeleton } from '@/components';
import axios from 'axios';
import {
  forwardRef,
  type SelectHTMLAttributes,
  useEffect,
  useState,
} from 'react';

type MovieProps = {
  title: string;
  price: number;
}[];

export const MovieSelection = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>((_, ref) => {
  const [movies, setMovies] = useState<MovieProps>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get('http://localhost:5000/movies');
        setMovies(res.data);
        setIsLoading(false);
      } catch (e) {
        console.error(`Failed to retrieve movies, ${e}`);
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  if (isLoading) return <Skeleton />;
  return (
    <div className='movie-container'>
      <label htmlFor='movie'>Pick a movie:</label>
      <select
        name='movie'
        id='movie'
        ref={ref}
      >
        {movies.map((movie, i) => (
          <option
            key={i}
            value={movie.price}
          >
            {movie.title}: {movie.price} kr
          </option>
        ))}
      </select>
    </div>
  );
});

MovieSelection.displayName = 'MovieSelection';
