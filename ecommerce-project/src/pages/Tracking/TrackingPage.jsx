import React, { useEffect, useState } from 'react';
import './TrackingPage.css';
import Header from '../../components/Header';
import { Link, useParams } from 'react-router';
import axios from 'axios';
import dayjs from 'dayjs';

const TrackingPage = ({ cart }) => {

  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`);

      setOrder(response.data);

    }

    fetchTrackingData();
  }, [orderId]);

  if (!order) {
    return <h1>Loading...</h1>;
  }

  const productDetails = order.products.find((product) => {
    return product.productId === productId;
  });

  const totalDeliveryTime = productDetails.estimatedDeliveryTimeMs - order.orderTimeMs;


  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;


  let deliveryProgress = (timePassedMs / totalDeliveryTime) * 100

 
  deliveryProgress = Math.min(100, Math.max(0, deliveryProgress));

  let progress = 'Arriving';

  if(deliveryProgress >= 100) {
    progress = 'Delivered';
  }

  let isPreparing = 0;
  let isShipped = 0;
  let isDelivered = 0;

  if(deliveryProgress < 33) {
    isPreparing = deliveryProgress;
  }else if(deliveryProgress >= 33 && deliveryProgress <100) {
    isShipped = deliveryProgress;
  }else if(deliveryProgress === 100) {
    isDelivered = 100
  }
  

  return (
    <div>
      <title>Tracking</title>
      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            {progress} on {dayjs(productDetails.estimatedDeliveryTimeMs).format('dddd, D')}
          </div>

          <div className="product-info">
            {productDetails.product.name}
          </div>

          <div className="product-info">
            Quantity: {productDetails.quantity}
          </div>

          <img className="product-image" src={productDetails.product.image} />

          <div className="progress-labels-container">
            <div className={`progress-label ${isPreparing && 'current-status'}`}>
              Preparing
            </div>
            <div className={`progress-label ${isShipped && 'current-status'}`}>
              Shipped
            </div>
            <div className={`progress-label ${isDelivered && 'current-status'}`}>
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div style={{width: `${deliveryProgress}%`}} className="progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackingPage;
