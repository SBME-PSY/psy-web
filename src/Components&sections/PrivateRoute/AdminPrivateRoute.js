import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from '../../assets/cookie';
function AdminPrivateRoute() {
  const strUser = getCookie('user');
  if (!strUser) {
    return <Navigate to="/AdminLogin" />;
  } else {
    const objUser = JSON.parse(strUser);
    return getCookie('jwt') && objUser.role === 'admin' ? (
      <Outlet />
    ) : (
      <Navigate to="/AdminLogin" />
    );
  }
}

export default AdminPrivateRoute;
