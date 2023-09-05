import { useRef } from 'react';
import './styles.scss';

interface CarouselProps {
  data: string[];
}

export function Carousel(props: CarouselProps) {
  const carousel = useRef(null);

  return (
    <div className='container-carousel'>
      <nav className='nav'>
        <button>MOON</button>
        <button>MARS</button>
        <button>EUROPA</button>
        <button>TITAN</button>
      </nav>
      <div className='carousel' ref={carousel}>
        {props.data.map((item: any) => {
          const {
            id,
            title,
            image,
            imgAlt,
            contentDescription,
            distance,
            distanceValue,
            travelTime,
            travelTimeValue,
          } = item;

          return (
            <div className='item' key={id}>
              <img src={image} alt={imgAlt} />
              <section className='content'>
                <h1>{title}</h1>
                <p>{contentDescription}</p>
              </section>
              <section className='travel-info'>
                <span className='info-title'>{distance}</span>
                <span className='info-value'>{distanceValue}</span>
                <span className='info-title'>{travelTime}</span>
                <span className='info-value'>{travelTimeValue}</span>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}
