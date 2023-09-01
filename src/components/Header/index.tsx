import Logo from '../../assets/shared/logo.svg';
import './styles.scss';
import Navbar from '../NavBar';
import { useState } from 'react';

const I18N_STORAGE_KEY = 'i18nextLng';

export function Header() {
  const [language, setLanguage] = useState<any>(
    localStorage.getItem(I18N_STORAGE_KEY)
  );

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR');
    localStorage.setItem(I18N_STORAGE_KEY, e.target.value);
    window.location = window.location;
  };
  return (
    <header className='header-container'>
      <div className='col-1'>
        <img src={Logo} className='logo' />
      </div>
      <div className='col-2'>
        <Navbar handleSelect={handleSelect} language={language} />
      </div>
    </header>
  );
}
