import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './TopNavBar.css';

function TopNavBar() {
  return (
    <Navbar className="bg-body-tertiary fixed-top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">STOREMATE</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <div class="avatar text-black">CK</div> 
            <Navbar.Text>
           <a>Chamara Karunarathna</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNavBar;