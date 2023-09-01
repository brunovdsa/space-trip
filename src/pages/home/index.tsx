import { Link } from 'react-router-dom';
import { MainContainer } from '../../components/MainContainer';
import './styles.scss';
import { i18n } from '../../translate/i18n';

import bgDesktop from '../../assets/home/background-home-desktop.jpg';
import bgMobile from '../../assets/home/background-home-tablet.jpg';

export function Home() {
  return (
    <MainContainer desktopImageUrl={bgDesktop} mobileImageUrl={bgMobile}>
      <main className='home-container'>
        <div className='col-1'>
          <div className='box'>
            <span className='intro'>{i18n.t('homePage.intro')}</span>
            <h1 className='title'>{i18n.t('homePage.title')}</h1>
            <p className='description'>{i18n.t('homePage.description')}</p>
          </div>
        </div>
        <div className='col-2'>
          <Link to={'/destination'} className='explore-link'>
            {i18n.t('homePage.linkTo')}
          </Link>
        </div>
      </main>
    </MainContainer>
  );
}
