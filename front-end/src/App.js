import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserProfile from './components/Profile/UserProfile';
import Landingpage from './components/auth/Landingpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/" element={<Landingpage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
