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
import HostVans from './components/Host/HostVans';
import HostVanDetail from './components/Host/HostVanDetail';
import HostVanInfo from './components/Host/HostVanInfo';
import HostVanPricing from './components/Host/HostVanPricing';
import HostVanPhotos from './components/Host/HostVanPhotos';
import Reviews from './components/Host/Reviews';
import HostLayout from './components/HostLayout';
import NotFound from './components/NotFound';
import Login from './components/Login';
import { createContext, useEffect, useState } from 'react';
import AuthRequiredLayout from './components/AuthRequiredLayout';

const UserContext = createContext()

export default function App() {

  const [loggedUserData, setLoggedUserData] = useState()

  const userId = 123

  useEffect(() => {
    async function getUserData() {
    fetch(`http://localhost:3000/data/hosts/${userId}`)
    .then(res => res.json())
    .then(data=> setLoggedUserData(data))
    }
    getUserData()
  }, [])

  return (
    <UserContext.Provider value={{loggedUserData}}>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetails />} />
            <Route path='login' element={<Login />} />
            <Route element={<AuthRequiredLayout />}>
              <Route path='host' element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path='income' element={<Income />} />
                <Route path='vans' element={<HostVans />} />
                <Route path='vans/:userId' element={<HostVanDetail />}>
                  <Route index element={<HostVanInfo />} />
                  <Route path='pricing' element={<HostVanPricing />} />
                  <Route path='photos' element={<HostVanPhotos />} />
                </Route>
                <Route path='reviews' element={<Reviews />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export { UserContext };
