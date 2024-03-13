import React from 'react';
import TopNavBar from '../../Components/TopNavBar/TopNavBar';
import { Container, Row, Col } from 'react-bootstrap';
import ProductMenu from '../../Components/ProductMenu/ProductMenu';

function DashBoard() {
  return (
    <Container fluid style={{ padding: '0px' }}>
      <TopNavBar />
      <Row>
        <Col md={7} style={{ backgroundColor: '#f0f0f0', height: '100vh' }}>
          <div style={{ padding: '5px' }}>
            <h2>Left Section</h2>
          </div>
        </Col>
        <Col md={5} style={{ backgroundColor: '#ffffff', height: '100vh' }}>
          <div style={{ padding: '5px' }}>
            <ProductMenu />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DashBoard;
