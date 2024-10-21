import { SeatRow } from '@/components';

export type SelectedSeats = {
  setSelectedSeats: (selectedSeats: (prev: number) => number) => void;
};

export const SeatContainer = ({ setSelectedSeats }: SelectedSeats) => {
  return (
    <div className='container'>
      <div className='screen' />
      {Array.from({ length: 6 }).map((_, i) => (
        <SeatRow
          key={i}
          setSelectedSeats={setSelectedSeats}
        />
      ))}
    </div>
  );
};

SeatContainer.displayName = 'SeatContainer';
