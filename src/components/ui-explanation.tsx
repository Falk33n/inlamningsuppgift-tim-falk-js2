export const UIExplanation = () => {
  return (
    <ul className='showcase'>
      <li>
        <div className='seat'></div>
        <small>N/A</small>
      </li>
      <li>
        <div className='seat selected'></div>
        <small>Selected</small>
      </li>
      <li>
        <div className='occupied seat'></div>
        <small>Occupied</small>
      </li>
    </ul>
  );
};

UIExplanation.displayName = 'UIExplanation';
