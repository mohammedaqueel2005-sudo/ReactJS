import React from 'react';
import dayjs from 'dayjs';
import formatMoney from '../../utils/money';
import DeliveryOptions from './DeliveryOptions';
import CartItemsDetails from './CartItemsDetails';
import DeliveryDate from './DeliveryDate';

const OrderSummary = ({deliveryOptions, cart, loadCart}) => {
  return (
    <div>
      <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {

              const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                return deliveryOption.id === cartItem.deliveryOptionId;
              })
              return (
                <div key={cartItem.productId} className="cart-item-container">
                  <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

                  <div className="cart-item-details-grid">
                    <CartItemsDetails  cartItem={cartItem} loadCart={loadCart} />

                    <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />
                  </div>
                </div>
              )
            })}
          </div>
    </div>
  );
}

export default OrderSummary;
