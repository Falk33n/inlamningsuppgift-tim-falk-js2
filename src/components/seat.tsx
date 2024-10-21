'use client';

import type { SelectedSeats } from '@/components';

type SeatProps = {
  isOccupied: boolean;
  isSelected: boolean;
  setIsSelected: (newState: boolean) => void;
  setSelectedSeats: SelectedSeats['setSelectedSeats'];
};

export const Seat = ({
  isOccupied,
  isSelected,
  setIsSelected,
  setSelectedSeats,
}: SeatProps) => {
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
