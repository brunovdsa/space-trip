import Logo from '../../assets/shared/logo.svg';
import MenuIcon from '../../assets/shared/icon-hamburger.svg';
import './styles.scss';

export function Header() {
  return (
    <header className='header-container'>
      <div className='col-1'>
        <img src={Logo} className='logo' />
      </div>
      <div className='col-2'>
        <button className='menu-btn'>
          <img src={MenuIcon} className='menu-icon' />
        </button>
      </div>
    </header>
  );
}
