'use client';

import { SeatContainer, type SelectedSeats, TotalPrice } from '@/components';
import { forwardRef, type RefObject } from 'react';

export const TheaterContainer = forwardRef<HTMLSelectElement, SelectedSeats>(
  ({ setSelectedSeats, selectedSeats, selectedMovie }, ref) => {
    const movieRef = ref as RefObject<HTMLSelectElement>;

    return (
      <>
        <SeatContainer
          setSelectedSeats={setSelectedSeats}
          selectedSeats={selectedSeats}
          selectedMovie={selectedMovie}
        />
        <TotalPrice
          totalPrice={
            Number(movieRef.current ? movieRef.current.value : 0) *
            selectedSeats
          }
          selectedSeats={selectedSeats}
        />
      </>
    );
  }
);

TheaterContainer.displayName = 'TheaterContainer';
