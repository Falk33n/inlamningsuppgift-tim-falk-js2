'use client';

import { SeatRow, TotalPrice } from '@/components';
import { useState } from 'react';

export const SeatContainer = () => {
  const [selectedSeats, setSelectedSeats] = useState(0);

  return (
    <>
      <div className='container'>
        <div className='screen' />
        {Array.from({ length: 6 }).map((_, i) => (
          <SeatRow
            key={i}
            setSelectedSeats={setSelectedSeats}
          />
        ))}
      </div>
      <TotalPrice selectedSeats={selectedSeats} />
    </>
  );
};

SeatContainer.displayName = 'SeatContainer';
