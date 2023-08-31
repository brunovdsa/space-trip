import Logo from '../../assets/shared/logo.svg';
import './styles.scss';
import Navbar from '../NavBar';

export function Header() {
  return (
    <header className='header-container'>
      <div className='col-1'>
        <img src={Logo} className='logo' />
      </div>
      <div className='col-2'>
        <Navbar />
      </div>
    </header>
  );
}
