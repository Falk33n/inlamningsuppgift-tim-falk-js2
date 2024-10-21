'use client';

import { Seat } from '@/components';
import { useEffect, useState } from 'react';

type SeatRowProps = {
  setSelectedSeats: (selectedSeats: (prev: number) => number) => void;
};

export const SeatRow = ({ setSelectedSeats }: SeatRowProps) => {
  const [seats, setSeats] = useState<boolean[]>([]);

  // Ensures that the random occupied seats only gets determined once or when user changes movie
  useEffect(() => {
    const occupiedSeats = Array.from({ length: 8 }, () => Math.random() > 0.65);
    setSeats(occupiedSeats);
  }, []);

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
