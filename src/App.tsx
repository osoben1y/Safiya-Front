import { memo } from 'react';
import Home from './pages/Home';
import { useRoutes } from 'react-router-dom';
import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login';

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
          ]
        }
      ])}
    </>
  );
};

export default memo(App);