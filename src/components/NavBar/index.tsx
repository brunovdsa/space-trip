import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import navIcon from '../../assets/shared/icon-hamburger.svg';
import closeIcon from '../../assets/shared/icon-close.svg';

import './styles.scss';

export default function Navbar() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const dropDownRef = useRef(null);

  const onClick = () => setIsActive(!isActive);

  return (
    <div>
      <div className='mobile-navbar'>
        <button className='menu-btn' onClick={onClick}>
          <img src={navIcon} />
        </button>
        {isActive && <div className='bg-overlay' onClick={onClick} />}
        <nav
          className='nav-mobile'
          ref={dropDownRef}
          style={
            isActive
              ? { right: '0rem', transition: '450ms' }
              : { right: '-100%', transition: '450ms' }
          }
        >
          <div className='nav-header'>
            <button className='close-icon' onClick={onClick}>
              <img src={closeIcon} />
            </button>
          </div>
          <div className='nav-mobile-body'>
            <Link to={'/'} onClick={onClick}>
              <span>00</span> HOME
            </Link>
            <Link to={'/destination'} onClick={onClick}>
              <span>01</span> DESTINATION
            </Link>
            <Link to={'/crew'} onClick={onClick}>
              <span>02</span> CREW
            </Link>
            <Link to={'/crew'} onClick={onClick}>
              <span>03</span> TECHNOLOGY
            </Link>
          </div>
        </nav>
      </div>
      <div className='desktop-navbar'>
        <nav className='nav-desktop'>
          <div className='nav-desktop-body'>
            <div className='border-hover'>
              <Link to={'/'} onClick={onClick}>
                <span>00</span> HOME
              </Link>
            </div>
            <div className='border-hover'>
              <Link to={'/destination'} onClick={onClick}>
                <span>01</span> DESTINATION
              </Link>
            </div>
            <div className='border-hover'>
              <Link to={'/crew'} onClick={onClick}>
                <span>02</span> CREW
              </Link>
            </div>
            <div className='border-hover'>
              <Link to={'/crew'} onClick={onClick}>
                <span>03</span> TECHNOLOGY
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
