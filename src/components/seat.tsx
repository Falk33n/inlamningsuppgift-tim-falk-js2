'use client';

import type { SelectedSeats } from '@/components';
import { useState } from 'react';

type SeatProps = {
  isOccupied?: boolean;
  setSelectedSeats: SelectedSeats['setSelectedSeats'];
};

export const Seat = ({ isOccupied = false, setSelectedSeats }: SeatProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (isOccupied) return;
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
