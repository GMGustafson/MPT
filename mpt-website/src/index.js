import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import './css/index.css';
import Layout from './Layout'; 

import AboutUs from './pages/AboutUs'; 
import ContactUs from './pages/ContactUs'; 
import Gallery from './pages/Gallery'; 
import Home from './pages/Home'; 
import Products from './pages/Products'; 
import Reviews from './pages/Reviews'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => { 
  return (
  <BrowserRouter>
    <Routes>
      <Route path ="/" element={(<Layout/>)}>
        <Route index element={(<Home />)} />
        <Route path ="Home" element={(<Home/>)} />
        <Route path ="AboutUs" element={(<AboutUs/>)} />
        <Route path ="ContactUs" element={(<ContactUs/>)} />
        <Route path ="Gallery" element={(<Gallery/>)} />
        <Route path ="Products" element={(<Products/>)} />
        <Route path ="Reviews" element={(<Reviews/>)} />
      </Route>
    </Routes>
  </BrowserRouter>
  ); 
};

root.render(
  <App/>
);



