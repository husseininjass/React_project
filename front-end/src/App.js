import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './admin/main';
import AdminUsers from './admin/users/users';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Header from './components/Header/Header';
import Footer from './components/Header/Footer';
import HomePage from './components/homepage/HomePage';
import Products from './components/homepage/Products';
import Productdetails from './components/homepage/Productdetails';
import Categories from './components/homepage/Categories';
import Categoriedeatails from './components/homepage/Categoriedeatails';
import Offers from './components/homepage/Offers';
import Empty from './components/homepage/Empty';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/users' element={<AdminUsers />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="Header" element={<Header />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="Products" element={<Products />} />
        <Route path="Productdetails/:categoryId" element={<Productdetails />} />
        <Route path="Categories/:categoryId" element={<Categories />} />
        <Route path="Categoriedeatails" element={<Categoriedeatails />} />
        <Route path="Offers" element={<Offers />} />
        <Route path="Empty" element={<Empty />} />

      </Routes>
    </BrowserRouter>
  );
}


export default App;
