import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar';
import { fetchRockets } from './Redux/rocket/rocketSlice';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-12 w-full">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
