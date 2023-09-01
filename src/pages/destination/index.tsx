import { MainContainer } from '../../components/MainContainer';

import bgDesktop from '../../assets/destination/background-destination-desktop.jpg';
import bgMobile from '../../assets/destination/background-destination-tablet.jpg';

export function Destination() {
  return (
    <MainContainer desktopImageUrl={bgDesktop} mobileImageUrl={bgMobile}>
      <></>
    </MainContainer>
  );
}
