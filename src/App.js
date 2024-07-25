import React, { Suspense } from 'react';
import { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './components/Header';
import Body from './components/Body';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  );
};

const About = lazy(() => import('./components/About'));

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={AppRouter} />);
