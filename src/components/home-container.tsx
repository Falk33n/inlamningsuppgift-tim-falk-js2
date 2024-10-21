'use client';

import { MovieSelection, TheaterContainer, UIExplanation } from '@/components';
import { useRef, useState } from 'react';

export const HomeContainer = () => {
  const movieRef = useRef<HTMLSelectElement>(null);
  const [selectedSeats, setSelectedSeats] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);

  const onMovieChange = () => {
    setSelectedSeats(0);
    setSelectedMovie(
      movieRef.current?.value ? Number(movieRef.current.value) : null
    );
  };

  return (
    <>
      <MovieSelection
        ref={movieRef}
        onChange={onMovieChange}
      />
      <UIExplanation />
      <TheaterContainer
        ref={movieRef}
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        selectedMovie={selectedMovie}
      />
    </>
  );
};

HomeContainer.displayName = 'HomeContainer';
