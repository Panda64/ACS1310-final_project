import { Outlet, useLocation, Navigate } from 'react-router-dom'

import './App.css';
import Title from './components/Title';
import Map from './components/Map';
import Stats from './components/Stats';
import { useState } from 'react';

function App() {
  const location = useLocation()
  var [mapState, setMapState] = useState({ countriesArray : [], countryCode : '', isSelected : false, countryName : '' })

  function updateCountries(countriesArray, countryCode, isSelected, countryName) {
    setMapState({ countriesArray, countryCode, isSelected, countryName })
  }

  return (
    <>
    {location.state ? 
      <div>
        <Title name={location.state.name} />
        <div className="map_and_stats">
          <Map updateCountries={updateCountries} />
          <Stats mapState={mapState} />
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
