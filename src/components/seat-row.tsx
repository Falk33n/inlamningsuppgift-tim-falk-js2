'use client';

import { Seat, type SelectedSeats, Skeleton } from '@/components';
import { useEffect, useState } from 'react';

export const SeatRow = ({ setSelectedSeats }: SelectedSeats) => {
  const [seats, setSeats] = useState<boolean[]>([]);

  // Ensures that the random occupied seats only gets determined once or when user changes movie
  useEffect(() => {
    const occupiedSeats = Array.from({ length: 8 }, () => Math.random() > 0.65);
    setSeats(occupiedSeats);
  }, []);

  if (seats.length === 0) return <Skeleton className='w-52 h-[1.15rem]' />;
  return (
    <div className='row'>
      {seats.map((isOccupied, i) => (
        <Seat
          key={i}
          isOccupied={isOccupied}
          setSelectedSeats={setSelectedSeats}
        />
      ))}
    </div>
  );
};

SeatRow.displayName = 'SeatRow';
