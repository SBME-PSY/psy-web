import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminsidebar from '../Components&sections/Admin Components/sidebar';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
const Administrator = () => {
  return (
    <Wrapper>
      <Adminsidebar />
      <Outlet />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #f1f5f8;
`;

export default Administrator;
