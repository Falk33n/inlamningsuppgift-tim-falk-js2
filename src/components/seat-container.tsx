import { SeatRow } from '@/components';

export type SelectedSeats = {
  setSelectedSeats: (selectedSeats: (prev: number) => number) => void;
  selectedSeats: number;
  selectedMovie: number | null;
};

export const SeatContainer = ({
  setSelectedSeats,
  selectedSeats,
  selectedMovie,
}: SelectedSeats) => {
  return (
    <div className='container'>
      <div className='screen' />
      {Array.from({ length: 6 }).map((_, i) => (
        <SeatRow
          key={i}
          setSelectedSeats={setSelectedSeats}
          selectedMovie={selectedMovie}
          selectedSeats={selectedSeats}
        />
      ))}
    </div>
  );
};

SeatContainer.displayName = 'SeatContainer';
