import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../App';
import Profile from '../../components/profile';
import Mission from '../mission/mission';
import Rocket from '../rocket/rocket';
import Store from '../store';

describe('test for all components', () => {
  it('test landing component', () => {
    const landing = render(
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route element={<App />} path="/">
              <Route element={<Mission />} path="mission" />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    expect(landing).toMatchSnapshot();
  });

  it('test landing component', () => {
    const profile = render(
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route element={<App />} path="/">
              <Route element={<Profile />} path="profile" />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    expect(profile).toMatchSnapshot();
  });

  it('test landing component', () => {
    const mission = render(
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route element={<App />} path="/">
              <Route element={<Rocket />} path="rockets" />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    expect(mission).toMatchSnapshot();
  });
});
