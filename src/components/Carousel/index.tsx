import moon from '../../assets/destination/image-moon.webp';
import './styles.scss';

export function Carousel() {
  return (
    <div className='carousel'>
      <div className='item'>
        <img src={moon} alt='' />
        <nav className='nav'>
          <button>MOON</button>
          <button>MARS</button>
          <button>EUROPA</button>
          <button>TITAN</button>
        </nav>
        <section className='content'>
          <h1>MOON</h1>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        </section>
        <section className='travel-info'>
          <span className='info-title'>AVG. DISTANCE</span>
          <span className='info-value'>3216,32KM</span>
          <span className='info-title'>EST. TRAVEL TIME</span>
          <span className='info-value'>21 days</span>
        </section>
      </div>
    </div>
  );
}
