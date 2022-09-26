import React from 'react';
import { useLocation } from 'react-router-dom';

import Logo from './Logo';
import Search from '../Search';
import CartLink from './CartLink';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className='header'>
      <div className='container'>
        <Logo />
        {location.pathname !== '/cart' && <Search />}
        {location.pathname !== '/cart' && <CartLink />}
      </div>
    </div>
  );
}


export default Header