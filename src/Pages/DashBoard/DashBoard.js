import React from 'react';
import TopNavBar from '../../Components/TopNavBar/TopNavBar';
import { Container, Row, Col } from 'react-bootstrap';
import ProductMenu from '../../Components/ProductMenu/ProductMenu';
import Table from '../../Components/Table/Table';
import './DashBoard.css';

function DashBoard() {
  return (
    <>
      <TopNavBar />
      <Container fluid className='dashboard-container'>
      <Row>
        <Col md={7} className='left-coloumn'>
          <div style={{ padding: '5px' }}>
            <Table />
          </div>
        </Col>
        <Col md={5} className='right-coloumn'>
          <div className='product-list-div'>
            <h4>Products</h4>
            <ProductMenu />
          </div>
        </Col>
      </Row>
      </Container>
      </>
  );
}

export default DashBoard;
