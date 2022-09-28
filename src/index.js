import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Mission from './Redux/mission/mission';
import Rocket from './Redux/rocket/rocket';
import Store from './Redux/store';
import Profile from './components/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/">
          <Route element={<Mission />} path="missions" />
          <Route element={<Rocket />} index />
          <Route element={<Rocket />} path="rockets" />
          <Route element={<Profile />} path="profile" />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
