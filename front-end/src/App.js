import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserProfile from "./components/Profile/UserProfile";
import AdminUsers from "./admin/users/users";
import AdminLogin from "./admin/register/adminLogin";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";
import HomePage from "./components/homepage/HomePage";
import Products from "./components/homepage/Products";
import Productdetails from "./components/homepage/Productdetails";
import Categories from "./components/homepage/Categories";
import Categoriedeatails from "./components/homepage/Categoriedeatails";
import Offers from "./components/homepage/Offers";
import Empty from "./components/homepage/Empty";
import Admin from "./admin/main";
import Admins from "./admin/admins/admin";
import EditAdmin from "./admin/admins/editadmin";
import DeleteAdmin from "./admin/admins/AdminDelete";
import EditUser from "./admin/users/editUser";
import DeleteUser from "./admin/users/deleteUser";
import AdminCategory from "./admin/category/category";
import Cart from "./components/cart/Cart";
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
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/users/edit/:UserId" element={<EditUser />} />
        <Route path="/admin/users/delete/:UserId" element={<DeleteUser />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin/edit/:id" element={<EditAdmin />} />
        <Route path="/admin/delete/:id" element={<DeleteAdmin />} />
        <Route path="/admin/category" element={<AdminCategory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Products" element={<Products />} />
        <Route
          path="/Productdetails/:categoryId"
          element={<Productdetails />}
        />
        <Route path="/Categories/:categoryId" element={<Categories />} />
        <Route path="/Categoriedeatails" element={<Categoriedeatails />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/Empty" element={<Empty />} />
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