'use client';

import { MovieSelection, TheaterContainer, UIExplanation } from '@/components';
import { useRef } from 'react';

export const HomeContainer = () => {
  const movieRef = useRef<HTMLSelectElement>(null);

  return (
    <>
      <MovieSelection ref={movieRef} />
      <UIExplanation />
      <TheaterContainer ref={movieRef} />
    </>
  );
};

HomeContainer.displayName = 'HomeContainer';
