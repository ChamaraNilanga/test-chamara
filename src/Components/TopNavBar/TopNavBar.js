import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TopNavBar() {
  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark" style={{width:'100vw'}}>
      <Container>
        <Navbar.Brand href="/">STOREMATE</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <div class="avatar bg-primary text-white" style={{borderRadius:'100%' , marginRight : '10px',padding:'5px'}}>CN</div> 
            <Navbar.Text>
           <a href="#login">Chamara Nilanga</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNavBar