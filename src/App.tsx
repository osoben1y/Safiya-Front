import { memo } from 'react';
import Home from './pages/Home';
import { useRoutes } from 'react-router-dom';
import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import Events from './pages/Events';
import NotFound from './pages/Not_found';
import Auth from './pages/auth';

const App = () => {
  return (
    <>
      {useRoutes([
        {
          path: '/',
          element: <Layout />,
          children: [
            { index: true, element: <Home /> },
            { path: 'register', element: <Register /> },
            { path: 'login', element: <Login /> },
            { path: 'events', element: <Events /> },
            { path: 'not-found', element: <NotFound /> },
            {
              path: "/",
              element: <Auth />,
              children: [
              ],
            },
          ]
        }
      ])}
    </>
  );
};

export default memo(App);