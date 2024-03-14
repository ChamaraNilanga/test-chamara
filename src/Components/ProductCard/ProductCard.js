import React , {useEffect , useState } from 'react';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import './ProductCard.css';

function ProductCard(props) {
    // const [image, setImage] = useState("");
    const [imageIndex, setImageIndex] = useState(0);
    const {product} = props;

    useEffect(() => {
    const intervalId = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    }, 3000);

    return () => clearInterval(intervalId);
    }, []);

    const image = product.images[imageIndex];

  return (
    <Container>
        <Row>
            <Col md={4}>
                <Card className='product-card'>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className='product-card-title' >{product.prodcutName}</Card.Title>
                        <Card.Text className='product-card-price' >
                            Rs : {product.price}
                        </Card.Text>
                        <Card.Text className='product-card-des'>
                            {product.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductCard