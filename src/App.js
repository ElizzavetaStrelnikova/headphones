import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Layout from "./components/Layout";

class App extends React.Component {
  render() {
    return (
    <>
      <div className="wrapper">
        
        
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="order" element={<OrderPage />} />
          </Route>
        </Routes>
        
      </div>
    </> 
  );
}
}

export default App;
