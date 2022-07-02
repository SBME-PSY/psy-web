import React from 'react';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';
const AdminWelcomepage = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Container className="mt-5">
      <h1>here some statistics</h1>
    </Container>
  );
};

export default AdminWelcomepage;
