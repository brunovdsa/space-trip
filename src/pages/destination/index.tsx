import { MainContainer } from '../../components/MainContainer';

import './styles.scss';

import bgDesktop from '../../assets/destination/background-destination-desktop.jpg';
import bgMobile from '../../assets/destination/background-destination-tablet.jpg';

import { Carousel } from '../../components/Carousel';
import { useEffect, useState } from 'react';

export function Destination() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://10.0.0.199:5173/static/data.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <MainContainer desktopImageUrl={bgDesktop} mobileImageUrl={bgMobile}>
      <main className='container-destination'>
        <div className='col-1'>
          <span>00</span>
          <h1 className='dest-title'>PICK YOUR DESTINATION</h1>
        </div>
        <div className='col-2'>
          <Carousel data={data} />
        </div>
      </main>
    </MainContainer>
  );
}
