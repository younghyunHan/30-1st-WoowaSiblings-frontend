import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Sign from './pages/Sign/Sign';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import ItemList from './pages/ItemList/ItemList';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<ItemList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
