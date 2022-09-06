import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route,} from "react-router-dom"; 
import Signup from './pages/Signup';
import Nyheter from './pages/Nyheter';
import Products from './pages/Products';
import Layout from './components/Layout';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Layout>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/nyheter' element={ <Nyheter/> }/>
      <Route path='/category/:id' element={ <Products/> }/>
    </Routes>
    </Layout>
  </BrowserRouter>
);
