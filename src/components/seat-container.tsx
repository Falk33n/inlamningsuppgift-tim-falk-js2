import { SeatRow } from '@/components';

export const SeatContainer = () => {
  return (
    <div className='container'>
      <div className='screen' />
      {Array.from({ length: 6 }).map((_, i) => (
        <SeatRow key={i} />
      ))}
    </div>
  );
};

SeatContainer.displayName = 'SeatContainer';
