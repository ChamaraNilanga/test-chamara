import React from 'react';
import { Card, Spinner } from 'react-bootstrap';

function LoadingCard() {
  return (
    <Card style={{ width: '10vw' , height : '30vh' }}>
        <Card.Body>
      <Spinner animation="border" variant="primary" style={{alignContent:'center'}}/>
      </Card.Body>
    </Card>
  );
}

export default LoadingCard;
