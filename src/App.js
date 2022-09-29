import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';
import NavBar from './components/navBar';
import { fetchRockets } from './Redux/rocket/rocketSlice';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-12 w-full relative">
      <NavBar />
      <div className="mb-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
