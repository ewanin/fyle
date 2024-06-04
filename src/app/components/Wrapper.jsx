import React from 'react';

const Wrapper = ({ children }) => {
  return (
    // Wrapper with responsive padding and children content
    <div className='xl:px-[16vw] sm:px-[10vw] px-[5vw] xl:py-[100px] sm:py-[75px] py-[50px]'>
      {children}
    </div>
  );
};

export default Wrapper;