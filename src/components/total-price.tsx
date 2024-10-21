type TotalPriceProps = {
  selectedSeats?: number;
  totalPrice?: number;
};

export const TotalPrice = ({
  selectedSeats = 0,
  totalPrice = 0,
}: TotalPriceProps) => {
  return (
    <p className='text'>
      You have selected <span id='count'>{selectedSeats}</span> seats for a
      price of $<span id='total'>{totalPrice}</span>
    </p>
  );
};

TotalPrice.displayName = 'TotalPrice';
