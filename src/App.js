import { Outlet, useLocation } from 'react-router-dom'

import './App.css';
import Title from './components/Title';

function App() {
  const location = useLocation()
  return (
    <div>
      <Title name={location.state.name} />
      <Outlet />
    </div>
  );
}

export default App;
