import { MainContainer } from '../../components/MainContainer';

import './styles.scss';

import bgDesktop from '../../assets/destination/background-destination-desktop.jpg';
import bgMobile from '../../assets/destination/background-destination-tablet.jpg';
import { Link, Outlet } from 'react-router-dom';

export function Destination() {
  return (
    <MainContainer desktopImageUrl={bgDesktop} mobileImageUrl={bgMobile}>
      <main className='container-destination'>
        <div className='col-1'>
          <span>00</span>
          <h1 className='dest-title'>PICK YOUR DESTINATION</h1>
        </div>
        <div className='col-2'>
          <nav>
            <Link to={'moon'}>MOON</Link>
            <Link to={'mars'}>MARS</Link>
            <Link to={'europa'}>EUROPA</Link>
            <Link to={'titan'}>TITAN</Link>
          </nav>
          <Outlet />
          {/* <DestinationCarousel imageUrl={moonImage} /> */}
        </div>
      </main>
    </MainContainer>
  );
}
