'use client';

import { useState } from 'react';

type SeatProps = {
  isOccupied?: boolean;
  setSelectedSeats: (selectedSeats: (prev: number) => number) => void;
};

export const Seat = ({ isOccupied = false, setSelectedSeats }: SeatProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    const newSelectionState = !isSelected;
    setIsSelected(newSelectionState);
    setSelectedSeats((prev) => prev + (newSelectionState ? 1 : -1));
  };

  return (
    <div
      className={`seat ${isOccupied && 'occupied'} ${isSelected && 'selected'}`}
      onClick={handleClick}
    />
  );
};

Seat.displayName = 'Seat';
