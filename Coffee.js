import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

function Coffee() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Symphony Cafe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://static.vecteezy.com/system/resources/previews/002/144/676/original/coffee-menu-with-price-list-types-of-coffee-preparation-with-cup-template-flyers-free-vector.jpg">Coffee</Nav.Link>
            <Nav.Link href="https://restaurant-guru.in/Tea-shop-center-Coimbatore/menu">Tea</Nav.Link>
            <Nav.Link href="https://www.eazydiner.com/delhi-ncr/dukes-pastry-shop-rajinder-nagar-111613/menu">Pastries</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Coffee
