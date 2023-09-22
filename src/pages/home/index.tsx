import { Link } from 'react-router-dom';
import { MainContainer } from '../../components/MainContainer';
import './styles.scss';

import bgDesktop from '../../assets/home/background-home-desktop.jpg';
import bgMobile from '../../assets/home/background-home-tablet.jpg';

export function Home() {
  return (
    <MainContainer desktopImageUrl={bgDesktop} mobileImageUrl={bgMobile}>
      <main className='home-container'>
        <div className='col-1'>
          <div className='box'>
            <span className='intro'>SO, YOU WANT TO TRAVEL TO</span>
            <h1 className='title'>SPACE</h1>
            <p className='description'>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className='col-2'>
          <Link to={'/destination'} className='explore-link'>
            EXPLORE
          </Link>
        </div>
      </main>
    </MainContainer>
  );
}
