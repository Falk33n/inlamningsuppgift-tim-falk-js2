import { Seat } from '@/components';

export const SeatRow = () => {
  return (
    <div className='row'>
      {Array.from({ length: 8 }).map((_, i) => (
        <Seat
          key={i}
          isOccupied={Math.random() > 0.5}
        />
      ))}
    </div>
  );
};

SeatRow.displayName = 'SeatRow';
