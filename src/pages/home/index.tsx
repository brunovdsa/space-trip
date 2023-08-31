import { Link } from 'react-router-dom';
import { MainContainer } from '../../components/MainContainer';
import './styles.scss';

export function Home() {
  return (
    <MainContainer>
      <main className='home-container'>
        <div className='col-1'>
          <span className='intro'>SO, YOU WANT TO TRAVEL TO</span>
          <h1 className='title'>SPACE</h1>
          <p className='description'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className='col-2'>
          <Link to={'/destination'} className='explore-link'>
            Explore
          </Link>
        </div>
      </main>
    </MainContainer>
  );
}
