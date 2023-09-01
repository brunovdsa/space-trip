import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Destination } from '../pages/destination';
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/destination' element={<Destination />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
