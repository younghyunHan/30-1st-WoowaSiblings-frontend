import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Sign from './pages/Sign/Sign';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Goods from './pages/Goods/Goods';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/goods" element={<Goods />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
