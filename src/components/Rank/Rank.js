import React from 'react';

const Rank = ({ entries }) => {
  return (
    <div>
      <div className='f3'>
        {`Your current entry count is...`}
      </div>
      <div className='f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;