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
      <button className='menu-btn' onClick={onClick}>
        <img src={navIcon} />
      </button>
      {isActive && <div className='bg-overlay' onClick={onClick} />}
      <nav
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
        <div className='nav-body'>
          <Link to={'/'} onClick={onClick}>
            HOME
          </Link>
          <Link to={'/destination'} onClick={onClick}>
            DESTINATION
          </Link>
          <Link to={'/crew'} onClick={onClick}>
            CREW
          </Link>
        </div>

        <div>
          <div>
            <button>dou</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
