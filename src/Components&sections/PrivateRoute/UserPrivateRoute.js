import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from '../../assets/cookie';
function UserPrivateRoute() {
  return getCookie('jwt') ? <Outlet /> : <Navigate to="/Register" />;
}

export default UserPrivateRoute;
