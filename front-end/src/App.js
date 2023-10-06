import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './admin/main';
import Users from './admin/users/users';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/admin/users' element={<Users />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
