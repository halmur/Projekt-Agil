import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Signup from './pages/Signup';
import AdminHome from './pages/Admin/Home'
import NewCategory from './pages/Admin/NewCategory';
import NewProduct from './pages/Admin/NewProduct';
import Nyheter from './pages/Nyheter';
import Products from './pages/Products';
import Layout from './components/Layout';
import Varumarken from './pages/Varumarken';
import Topplistan from './pages/Topplistan';
import Outlet from './pages/Outlet';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<App />} />
        <Route path='/nyheter' element={<Nyheter />} />
        <Route path='/category/:slug' element={<Products />} />
        <Route path='/varumarken/:slug' element={<Varumarken />} />
        <Route path='/topplistan' element={<Topplistan />} />
        <Route path='/outlet' element={<Outlet />} />
      </Route>
      <Route path='/signup' element={<Signup />} />
      <Route path='/admin' element={<AdminHome />} />
      <Route path='/admin/newcategory' element={<NewCategory />} />
      <Route path='/admin/newproduct' element={<NewProduct />} />

    </Routes>
  </BrowserRouter>
);
