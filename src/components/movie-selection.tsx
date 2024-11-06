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
>(({ onChange, ...props }, ref) => {
  const [movies, setMovies] = useState<MovieProps>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          'https://falk33n.github.io/inlamningsuppgift-tim-falk-js2/movies.json'
        );
        setMovies(res.data.movies);
      } catch (e) {
        console.error(`Failed to retrieve movies, ${e}`);
      }
    };

    setIsLoading(false);
    getMovies();
  }, []);

  if (isLoading) return <Skeleton className='mb-4 rounded-md w-52 h-8' />;
  return (
    <div className='movie-container'>
      <label htmlFor='movie'>Pick a movie:</label>
      <select
        name='movie'
        id='movie'
        ref={ref}
        onChange={onChange}
        {...props}
      >
        {movies.map((movie, i) => (
          <option
            key={i}
            value={movie.price}
          >
            {movie.title}: ${movie.price}
          </option>
        ))}
      </select>
    </div>
  );
});

MovieSelection.displayName = 'MovieSelection';
