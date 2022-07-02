import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from '../../assets/cookie';
function AdminPrivateRoute() {
  return getCookie('jwt') ? <Outlet /> : <Navigate to="/AdminLogin" />;
}

export default AdminPrivateRoute;
