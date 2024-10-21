'use client';

import { useState } from 'react';

type SeatProps = {
  isOccupied?: boolean;
};

export const Seat = ({ isOccupied = false }: SeatProps) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`seat ${isOccupied && 'occupied'} ${isSelected && 'selected'}`}
      onClick={() => setIsSelected((prev) => !prev)}
    />
  );
};

Seat.displayName = 'Seat';
