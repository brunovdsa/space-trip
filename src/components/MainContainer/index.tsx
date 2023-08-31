import { Header } from '../Header';
import './styles.scss';

interface MainContainerProps {
  children: JSX.Element;
}

export function MainContainer(props: MainContainerProps) {
  return (
    <div className='main-container'>
      <Header />
      <div className='main-content'>{props.children}</div>
    </div>
  );
}
