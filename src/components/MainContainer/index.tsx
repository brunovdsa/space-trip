import { Header } from '../Header';
import './styles.scss';

interface MainContainerProps {
  children: JSX.Element;
  desktopImageUrl: string;
  mobileImageUrl: string;
}

export function MainContainer(props: MainContainerProps) {
  return (
    <>
      <style>
        {`
          .main-container {
            background-image: url('${props.mobileImageUrl}');                  
          }
          @media (min-width: 1100px) { 
            .main-container {   
              background-image: url('${props.desktopImageUrl}');
            }
          }
        `}
      </style>
      <div className='main-container'>
        <Header />
        <div className='main-content'>{props.children}</div>
      </div>
    </>
  );
}
