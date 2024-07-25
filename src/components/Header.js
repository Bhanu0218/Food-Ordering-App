import logo from '../images/png/logo-black-new.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [authBtn, setAuthBtn] = useState('Login');
  return (
    <div className='header px-10 py-2 border-b-2 shadow-sm fixed top-0 w-full z-50 bg-white'>
      <div className='header-container w-full flex justify-between items-center'>
        <div className='logo-container'>
          <Link to={'/'}>
            <img src={logo} alt='Logo' className='w-36' />
          </Link>
        </div>
        <div className='navbar'>
          <ul className='nav-items flex gap-2'>
            <li className='p-4'>
              <Link to={'/'}>Home</Link>
            </li>
            <li className='p-4'>
              <Link to={'/about'}>About us</Link>
            </li>
            <li className='p-4'>
              <Link to={'/contact'}>Contact us</Link>
            </li>
            <button
              className='btn p-4'
              onClick={() => {
                authBtn === 'Login'
                  ? setAuthBtn('Logout')
                  : setAuthBtn('Login');
              }}
            >
              {authBtn}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
