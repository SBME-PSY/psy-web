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
import Register from './Screens/Register';
import AdminWelcomepage from './Components&sections/Admin Panel sections/Admin Welcome page';
import Users from './Components&sections/Admin Panel sections/Users';
import Professionals from './Components&sections/Admin Panel sections/Professionals';
import Article from './Screens/Article';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Admin" element={<Adminsignin />} />
        <Route path="/AdminPanel" element={<Administrator />}>
          <Route path="AdminPanel" element={<AdminWelcomepage />} />
          <Route path="users" element={<Users />} />
          <Route path="professionals" element={<Professionals />} />
        </Route>
        <Route path="/VdieoChat" element={<Outlet />}>
          <Route index element={<GroupTherpy />} />
          <Route path=":id" element={<Room />} />
        </Route>
        <Route path="/Register" element={<Register />} />
        <Route path="/Articles" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
