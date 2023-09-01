import moonImage from '../../../assets/destination/image-moon.webp';
export function Moon() {
  return (
    <>
      <div className='carousel'>
        <div className='header-carousel'>
          <img src={moonImage} />
        </div>
        <div className='link-container'>
          <div className='content-container'></div>
        </div>
      </div>
    </>
  );
}
