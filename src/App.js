import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/hover.css';
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
import GroupTherpy from './Screens/GroupTherpy';
import Register from './Screens/Register';
import Statistics from './Components&sections/Admin Panel sections/Admin Welcome page';
import Users from './Components&sections/Admin Panel sections/Users';
import Professionals from './Components&sections/Admin Panel sections/Professionals';
import AdminPrivateRoute from './Components&sections/PrivateRoute/AdminPrivateRoute';
import UserPrivateRoute from './Components&sections/PrivateRoute/UserPrivateRoute';
import NotFound from './Screens/NotFound';
import Article from './Screens/Articles';
import Video from './Screens/Video';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AdminLogin" element={<Adminsignin />} />
        <Route path="/Admin" element={<AdminPrivateRoute />}>
          <Route path="/Admin" element={<Administrator />}>
            <Route index element={<Statistics />} />
            <Route path="users" element={<Users />} />
            <Route path="professionals" element={<Professionals />} />
          </Route>
        </Route>
        <Route path="/VdieoChat" element={<UserPrivateRoute />}>
          <Route path="/VdieoChat" element={<Outlet />}>
            <Route index element={<GroupTherpy />} />
            <Route path=":id" element={<Video />} />
          </Route>
        </Route>
        <Route path="/articles" element={<UserPrivateRoute />}>
          <Route path="/articles" element={<Article />} />
        </Route>
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
