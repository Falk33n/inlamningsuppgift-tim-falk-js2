'use client';

import { Seat, type SelectedSeats, Skeleton } from '@/components';
import { useEffect, useState } from 'react';

export const SeatRow = ({ setSelectedSeats, selectedMovie }: SelectedSeats) => {
  const [seats, setSeats] = useState<boolean[]>([]);
  const [isSelected, setIsSelected] = useState<boolean[]>(Array(8).fill(false));

  // Reset seat states
  useEffect(() => {
    setSelectedSeats((prev) => prev * 0);
    const occupiedSeats = Array.from({ length: 8 }, () => Math.random() > 0.65);
    setSeats(occupiedSeats);
    setIsSelected(Array(8).fill(false));
  }, [selectedMovie, setSelectedSeats]);

  if (seats.length === 0) return <Skeleton className='w-52 h-[1.15rem]' />;
  return (
    <div className='row'>
      {seats.map((isOccupied, i) => (
        <Seat
          key={i}
          isOccupied={isOccupied}
          isSelected={isSelected[i]}
          setIsSelected={(newState) => {
            const updatedSelections = [...isSelected];
            updatedSelections[i] = newState;
            setIsSelected(updatedSelections);
          }}
          setSelectedSeats={setSelectedSeats}
        />
      ))}
    </div>
  );
};

SeatRow.displayName = 'SeatRow';
