import { useState } from 'react';
import './styles.scss';

interface CarouselProps {
  slides: Array<any>;
}

export function Carousel(props: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveDot = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='container-carousel'>
      <nav className='nav'>
        {props.slides.map((item: any, slideIndex: any) => (
          <button key={slideIndex} onClick={() => moveDot(slideIndex)}>
            {item.title}
          </button>
        ))}
      </nav>
      <div className='carousel'>
        {props.slides.map((item: any) => {
          const { id } = item;
          return (
            <div className='item' key={id}>
              <img
                src={props.slides[currentIndex].image}
                alt={props.slides[currentIndex].imgAlt}
              />
              <section className='content'>
                <h1>{props.slides[currentIndex].title}</h1>
                <p>{props.slides[currentIndex].contentDescription}</p>
              </section>
              <div className='border-bottom'></div>
              <section className='travel-info'>
                <span className='info-title'>
                  {props.slides[currentIndex].distance}
                </span>
                <span className='info-value'>
                  {props.slides[currentIndex].distanceValue}
                </span>
                <span className='info-title'>
                  {props.slides[currentIndex].travelTime}
                </span>
                <span className='info-value'>
                  {props.slides[currentIndex].travelTimeValue}
                </span>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}
