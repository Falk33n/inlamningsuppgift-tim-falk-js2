'use client';

import { SeatContainer, TotalPrice } from '@/components';
import { useState } from 'react';

export const TheaterContainer = () => {
  const [selectedSeats, setSelectedSeats] = useState(0);

  return (
    <>
      <SeatContainer setSelectedSeats={setSelectedSeats} />
      <TotalPrice selectedSeats={selectedSeats} />
    </>
  );
};

TheaterContainer.displayName = 'TheaterContainer';
