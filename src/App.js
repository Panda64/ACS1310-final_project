import { Outlet, useLocation, Navigate } from 'react-router-dom'

import './App.css';
import Title from './components/Title';

function App() {
  const location = useLocation()
  return (
    <>
    {location.state ? 
      <div>
        <Title name={location.state.name} />
        <Outlet />
      </div>
      : 
      <Navigate to="/" />
    }
    </>
  );
}

export default App;
