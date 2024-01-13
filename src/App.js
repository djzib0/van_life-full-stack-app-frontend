import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Vans from './components/Vans/Vans';
import VanDetails from './components/Vans/VanDetails';
import Layout from './components/Layout';
import Dashboard from './components/Host/Dashboard';
import Income from './components/Host/Income';
import Reviews from './components/Host/Reviews';
import HostLayout from './components/HostLayout';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetails />} />
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
