import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = ({ product, onAddToCart }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price.toFixed(2)}</Card.Text>
        <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
