import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminUsers from './admin/users/users';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AdminLogin from './admin/register/login';
import Admins from './admin/admins/admin';
import EditAdmin from './admin/admins/editadmin';
import DeleteAdmin from './admin/admins/AdminDelete';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/admin' element={<Admins />} />
          <Route path='/admin/users' element={<AdminUsers />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/admin/edit/:id' element={<EditAdmin/>} />
          <Route path='/admin/delete/:id' element={<DeleteAdmin/>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;