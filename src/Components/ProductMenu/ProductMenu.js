import React, { useState, useRef } from 'react';
import products from '../../db.json';
import { lazy, Suspense } from 'react';
import LoadingCard from '../ProductCard/LoadingProductCard';
import InfiniteScroll from 'react-infinite-scroller';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ProductCard = lazy(() => import('../ProductCard/ProductCard'));

function ProductMenu() {
  const [data, setData] = useState(products.products.slice(0, 7));
  const [hasMore, setHasMore] = useState(true);
  const isLoading = useRef(false);
  const columns = 3;
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

  console.log('hasMore:', hasMore);
  const loadingCardsCount = Math.ceil((columns - (data.length % columns)) % columns);


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
            hasMore={hasMore}
            useWindow={false}
            loader={<LoadingCard/>}
        >
            <Row style={{rowGap:'10px'}}>
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
