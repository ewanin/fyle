import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import clientIcon from '../../../public/images/clientIcon.png';

const Clients = () => {
  return (
    <div className='bg-no-repeat bg-cover bg-pink bg-left'>
      {/* Wrapper component */}
      <Wrapper>
        {/* Image component for client icons */}
        <Image src={clientIcon} alt='Client Icons' />
      </Wrapper>
    </div>
  );
};

export default Clients;