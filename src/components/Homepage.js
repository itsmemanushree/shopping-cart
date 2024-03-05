import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import product1 from '../images/AirPods.jpg';
import product2 from '../images/product2.jpg';
import product3 from '../images/smart.jpg';
import product4 from '../images/powerbank.jpg';

const products = [
  { id: 1, name: 'AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)', price: 67.99, image: product1, description: 'Immerse yourself in unparalleled sound quality and wireless freedom with our cutting-edge AirPods' },
  { id: 2, name: 'SMART WATCH', price: 55.99, image: product2, description: 'Elevate your lifestyle with our cutting-edge smartwatch, seamlessly blending style and functionality to keep you connected, fit, and on top of your game.' },
  { id: 3, name: 'SMART PHONE', price: 78.99, image: product3, description: 'Experience innovation at your fingertips with our cutting-edge smartphones' },
  { id: 4, name: 'POWER BANK', price: 88.99, image: product4, description: '20000 mAh Ultra Compact 12W Power Bank' }
];
  

const Home = () => {
  const handleAddToCart = (productId) => {
    // Implement logic to add the product to the cart
    console.log(`Product ${productId} added to cart`);
  };

  const handleBuyNow = (productId) => {
    // Implement logic for instant purchase
    console.log(`Product ${productId} purchased instantly`);
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col md={12}>
          <Form inline className="justify-content-end">
            <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Col>
      </Row>
      <h1 className="text-center my-4">SELECT YOUR CHOICE</h1>
      <Row style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {products.map((product) => (
          <Col key={product.id} lg={3} md={6} className="mb-4">
            <Card className="product-card border-0 shadow">
              <Card.Img variant="top" src={product.image} className="rounded img-fluid" style={{ maxHeight: '200px', maxWidth: '100%', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price.toFixed(2)}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(product.id)}>Add to Cart</Button>
                <Button variant="success" onClick={() => handleBuyNow(product.id)}>Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
