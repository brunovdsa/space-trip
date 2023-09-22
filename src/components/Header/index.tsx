import Logo from '../../assets/shared/logo.svg';
import './styles.scss';
import Navbar from '../NavBar';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className='header-container'>
      <div className='col-1'>
        <Link to={'/'}>
          <img src={Logo} className='logo' />
        </Link>
      </div>
      <div className='col-2'>
        <Navbar />
      </div>
    </header>
  );
}
