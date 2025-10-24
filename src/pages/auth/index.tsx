import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import type { RootState } from '../../lib';

const Auth = () => {
  const token = useSelector((state: RootState) => state.tokenSlice.token);
  return token ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default memo(Auth);