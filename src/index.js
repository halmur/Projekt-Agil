import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route,} from "react-router-dom"; 
import Signup from './pages/Signup';
import AdminHome from './pages/Admin/Home'
import NewCategory from './pages/Admin/NewCategory';
import NewProduct from './pages/Admin/NewProduct';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/admin' element={<AdminHome/>}/>
      <Route path='/admin/newcategory' element={<NewCategory/>}/>
      <Route path='/admin/newproduct' element={<NewProduct/>}/>
    </Routes>
  </BrowserRouter>
);
