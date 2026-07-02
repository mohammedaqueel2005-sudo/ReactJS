import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import './CheckoutPage.css';
import CheckoutHeader from './CheckoutHeader';
import formatMoney from '../../utils/money';
import OrderSummary from './OrderSummary';
import PaymentSummary from './PaymentSummary';

const CheckoutPage = ({ cart, loadCart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data);

      response = await axios.get('/api/payment-summary');
      setPaymentSummary(response.data);
    }
    
    fetchCheckoutData();
      
  }, [cart]);

  return (
    <div>
      <title>Checkout</title>
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart} />

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
