import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from '../customers/Pages/Homepage';
import Cart from '../customers/components/Cart/Cart';
import Navigation from '../customers/components/Navigation/Navigation';
import Footer from '../customers/components/Footer/Footer';
import Product from '../customers/components/Product/Product';
import ProductDetails from '../customers/components/ProductDetails/ProductDetails';
import Checkout from '../customers/components/Checkout/Checkout';
import Order from '../customers/components/Order/Order';
import OrderDetails from '../customers/components/Order/OrderDetails';

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product/>} />
        <Route path="/product/:productId" element={<ProductDetails/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/account/order" element={<Order/>} />
        <Route path="/account/order/orderId" element={<OrderDetails/>} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
