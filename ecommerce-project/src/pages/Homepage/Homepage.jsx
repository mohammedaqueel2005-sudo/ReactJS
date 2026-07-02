import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Homepage.css';
import Header from '../../components/Header';
import ProductsGrid from './ProductsGrid';

const Homepage = ({ cart, loadCart }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products')
      setProducts(response.data);
    }

    getHomeData();
  }, []);


  return (
    <div>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </div>
  );
}

export default Homepage;
