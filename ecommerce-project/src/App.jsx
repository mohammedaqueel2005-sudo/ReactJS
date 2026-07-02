import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Homepage from './pages/Homepage/Homepage';
import './App.css'
import { Routes, Route } from "react-router";
import CheckoutPage from './pages/Checkout/CheckoutPage';
import OrdersPage from './pages/Orders/OrdersPage'
import TrackingPage from './pages/Tracking/TrackingPage'

const App = () => {

  const [cart, setCart] = useState([]);

  const loadCart = async() => {
      const response = await axios.get('/api/cart-items?expand=product')
       setCart(response.data);
    }

  useEffect(()=>{
    loadCart();
  },[]);

  return (
    <div>
      <Routes>
        <Route index element={<Homepage cart={cart} loadCart={loadCart} />} />
        <Route path='checkout' element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
        <Route path='orders' element={<OrdersPage cart={cart} />} />
        <Route path='tracking/:orderId/:productId' element={<TrackingPage cart={cart} />} />
      </Routes>
    </div>
  );
}

export default App;
