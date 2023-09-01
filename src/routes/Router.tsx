import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Destination } from '../pages/destination';
import { Moon } from '../pages/destination/moon';
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/destination' element={<Destination />}>
        <Route index element={<Moon />} />
        <Route path='moon' element={<Moon />} />
        {/* <Route path='mars' element={<Mars />} />
        <Route path='europa' element={<Europa />} />
        <Route path='titan' element={<Titan />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
