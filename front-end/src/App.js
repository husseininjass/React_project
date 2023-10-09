import React, { Children } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminUsers from './admin/users/users';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AdminLogin from './admin/register/adminLogin';
import Admins from './admin/admins/admin';
import EditAdmin from './admin/admins/editadmin';
import DeleteAdmin from './admin/admins/AdminDelete';
import EditUser from './admin/users/editUser';
import DeleteUser from './admin/users/deleteUser';
import AdminCategory from './admin/category/category';
import DeleteCategory from './admin/category/categoryDelete';
import CategoryEdit from './admin/category/categoryEdit';
import Products from './admin/products/adminProducts';
import ProductDelet from './admin/products/productDelete';
import EditProduct from './admin/products/editProduct';
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
          <Route path='/admin/category/delete/:id' element={<DeleteCategory />} />
          <Route path='/admin/category/edit/:id' element={<CategoryEdit />} />
          <Route path='/admin/products' element={<Products />} />
          <Route path='/admin/products/delete/:id' element={<ProductDelet />} />
          <Route path='/admin/products/edit/:id' element={<EditProduct />} />


          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;