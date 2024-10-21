'use client';

import { SeatContainer, TotalPrice } from '@/components';
import {
  forwardRef,
  type RefObject,
  type SelectHTMLAttributes,
  useState,
} from 'react';

export const TheaterContainer = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>((_, ref) => {
  const [selectedSeats, setSelectedSeats] = useState(0);
  const movieRef = ref as RefObject<HTMLSelectElement>;

  return (
    <>
      <SeatContainer setSelectedSeats={setSelectedSeats} />
      <TotalPrice
        totalPrice={
          Number(movieRef.current ? movieRef.current.value : 0) * selectedSeats
        }
        selectedSeats={selectedSeats}
      />
    </>
  );
});

TheaterContainer.displayName = 'TheaterContainer';
