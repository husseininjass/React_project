import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserProfile from './components/Profile/UserProfile';
import Landingpage from './components/auth/Landingpage';
import AdminUsers from './admin/users/users';
import AdminLogin from './admin/register/adminLogin';
import Admins from './admin/admins/admin';
import EditAdmin from './admin/admins/editadmin';
import DeleteAdmin from './admin/admins/AdminDelete';
import EditUser from './admin/users/editUser';
import DeleteUser from './admin/users/deleteUser';
import AdminCategory from './admin/category/category';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/lan" element={<Landingpage />} />

          <Route path='/admin' element={<Admins />} />
          <Route path='/admin/users' element={<AdminUsers />} />
          <Route path='/admin/users/edit/:UserId' element={<EditUser />} />
          <Route path='/admin/users/delete/:UserId' element={<DeleteUser />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/admin/edit/:id' element={<EditAdmin/>} />
          <Route path='/admin/delete/:id' element={<DeleteAdmin/>} />
          <Route path='/admin/category' element={<AdminCategory />} />





          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;