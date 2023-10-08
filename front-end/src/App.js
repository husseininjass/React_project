import React, { Children } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminUsers from './admin/users/users';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserProfile from './components/Profile/UserProfile';
import AdminUsers from './admin/users/users';
import AdminLogin from './admin/register/adminLogin';
import Header from './components/Header/Header';
import Footer from './components/Header/Footer';
import HomePage from './components/homepage/HomePage';
import Products from './components/homepage/Products';
import Productdetails from './components/homepage/Productdetails';
import Categories from './components/homepage/Categories';
import Categoriedeatails from './components/homepage/Categoriedeatails';
import Offers from './components/homepage/Offers';
import Empty from './components/homepage/Empty';
import Admin from './admin/main';
import Admins from './admin/admins/admin';
import EditAdmin from './admin/admins/editadmin';
import DeleteAdmin from './admin/admins/AdminDelete';
import EditUser from './admin/users/editUser';
import DeleteUser from './admin/users/deleteUser';
import AdminCategory from './admin/category/category';
import DeleteCategory from './admin/category/categoryDelete';
import CategoryEdit from './admin/category/categoryEdit';
function App() {
  return (
    <BrowserRouter>
      <Routes>
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
