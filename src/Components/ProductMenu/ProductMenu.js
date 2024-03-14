import React, { useState, useRef } from 'react';
import products from '../../db.json';
import { lazy, Suspense } from 'react';
import LoadingCard from '../ProductCard/LoadingProductCard';
import InfiniteScroll from 'react-infinite-scroller';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './ProductMenu.css';

const ProductCard = lazy(() => import('../ProductCard/ProductCard'));

function ProductMenu() {
  const [data, setData] = useState(products.products.slice(0, 7));
  const [hasMore, setHasMore] = useState(true);
  const isLoading = useRef(false);
  console.log("Data:",data);
  const loading = async () => {
    if (!isLoading.current && data.length <= products.products.length) {
      isLoading.current = true;

      const newCardData = products.products.slice(data.length, data.length + 3);
      await setData((prevData) => [...prevData, ...newCardData]);
      
      isLoading.current = false;
    }else{
        setHasMore(false);
    }
  };

  return (
    <Container>
        <div className='product-menu-div'>
        <InfiniteScroll
            pageStart={0}
            loadMore={loading}
            hasMore={hasMore}
            useWindow={false}
            loader={<LoadingCard/>}
        >
            <Row className='product-menu-row'>
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
