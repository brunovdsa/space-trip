import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import navIcon from '../../assets/shared/icon-hamburger.svg';
import closeIcon from '../../assets/shared/icon-close.svg';

import './styles.scss';
import { i18n } from '../../translate/i18n';

interface NavbarProps {
  handleSelect(e: any): void;
  language: any;
}

export default function Navbar(props: NavbarProps) {
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
              <span>00</span> {i18n.t('header.headerHomeLink')}
            </Link>
            <Link to={'/destination'} onClick={onClick}>
              <span>01</span> {i18n.t('header.headerDestinationLink')}
            </Link>
            <Link to={'/crew'} onClick={onClick}>
              <span>02</span> {i18n.t('header.headerCrewLink')}
            </Link>
            <Link to={'/crew'} onClick={onClick}>
              <span>03</span> {i18n.t('header.headerTechLink')}
            </Link>
          </div>

          <div className='nav-footer'>
            <select
              onChange={props.handleSelect}
              value={props.language}
              className='select-language'
            >
              <option value={'pt-BR'}>{i18n.t('setLanguage.titlePT')}</option>
              <option value={'en-US'}>{i18n.t('setLanguage.titleEN')}</option>
            </select>
          </div>
        </nav>
      </div>
      <div className='desktop-navbar'></div>
    </div>
  );
}
