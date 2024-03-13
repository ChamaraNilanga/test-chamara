import React, { useState, useRef } from 'react';
import products from '../../db.json';
import { lazy, Suspense } from 'react';
import LoadingCard from '../ProductCard/LoadingProductCard';
import InfiniteScroll from 'react-infinite-scroller';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ProductCard = lazy(() => import('../ProductCard/ProductCard'));

function ProductMenu() {
  const [data, setData] = useState(products.products.slice(0, 7));
  const isLoading = useRef(false);
console.log("Data:",data);
  const loading = async () => {
    if (!isLoading.current && data.length <= 20) {
      isLoading.current = true;

      const newCardData = products.products.slice(data.length, data.length + 3);

      await setData((prevData) => [...prevData, ...newCardData]);
      
      isLoading.current = false;
    }
  };

  return (
    <Container>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          overflowY: 'auto',
          maxHeight: '80vh',
          gap: '10px',
          padding: '10px',
        }}>
        <InfiniteScroll //new
            pageStart={0}
            loadMore={loading}
            hasMore={true || false}
            useWindow={false}
            loader={<LoadingCard/>}
        >
            <Row>
                {data.map((data, index) => (
                    <Col md={4} key={index}>
                        <Suspense fallback={<LoadingCard />}>
                            <ProductCard product={data} />
                        </Suspense>
                    </Col>
                )
                )}
            </Row>
        </InfiniteScroll>
        </div>
    </Container>
  );
}

export default ProductMenu;
