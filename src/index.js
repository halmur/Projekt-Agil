import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route,} from "react-router-dom"; 
import Signup from './pages/Signup';
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
      <Route path='/' element={<Layout/>}>
          <Route index element={ <App/> } />
          <Route path='/nyheter' element={ <Nyheter/> }/>
          <Route path='/category/:slug' element={ <Products/> }/>
          <Route path='/varumarken' element={ <Varumarken/> }/>
          <Route path='/topplistan' element={ <Topplistan/> }/>
          <Route path='/outlet' element={ <Outlet/> }/>
      </Route>
        <Route path='/signup' element={ <Signup/> } />


    </Routes>
  </BrowserRouter>
);
