import { Outlet, useLocation, Navigate } from 'react-router-dom'

import './App.css';
import Title from './components/Title';
import Map from './components/Map';
import Stats from './components/Stats';

function App() {
  const location = useLocation()
  return (
    <>
    {location.state ? 
      <div>
        <Title name={location.state.name} />
        <div className="map_and_stats">
          <Map />
          <Stats />
        </div>
        <Outlet />
      </div>
      : 
      <Navigate to="/" />
    }
    </>
  );
}

export default App;
