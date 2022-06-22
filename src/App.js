import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import Contact from './Screens/Contactus';
import Home from './Screens/Home';
import Administrator from './Screens/Adminstration';
import Adminsignin from './Components&sections/Admin Panel sections/Admin Sign-in';
import Room from './Screens/Room';
import GroupTherpy from './Screens/GroupTherpy';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Admin" element={<Adminsignin />} />
        <Route path="/AdminPanel" element={<Administrator />} />
        <Route path="/VdieoChat" element={<Outlet />}>
          <Route index element={<GroupTherpy />} />
          <Route path=":id" element={<Room />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
