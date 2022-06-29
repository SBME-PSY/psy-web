import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminsidebar from '../Components&sections/Admin Components/sidebar';
import { Outlet } from 'react-router-dom';

const Administrator = () => {
  return (
    <div>
      <Adminsidebar />
      <Outlet />
    </div>
  );
};

export default Administrator;
