import React from 'react';
import products from '../../db.json';
import { lazy, Suspense } from 'react';
import LoadingCard from '../ProductCard/LoadingProductCard';
const ProductCard = lazy(() => import("../ProductCard/ProductCard"));

function ProductMenu() {

  return (
    <div>
      <h4>Products</h4>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          overflowY: 'auto',
          maxHeight: '80vh',
          gap: '10px',
          padding: '10px',
        }}
      >
        {products.products.map((product) => (
          <div key={product.id} style={{ width: 'calc(33.33% - 10px)' }}>
            <Suspense fallback={<LoadingCard/>}>
                <ProductCard product={product} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductMenu;
