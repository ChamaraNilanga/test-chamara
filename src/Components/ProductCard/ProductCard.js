import React , {useEffect , useState } from 'react';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';

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
                <Card style={{ width: '10vw' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title style={{fontSize:'15px'}}>{product.prodcutName}</Card.Title>
                        <Card.Text style={{fontSize:'12px'}}>
                            Rs : {product.price}
                        </Card.Text>
                        <Card.Text style={{fontSize:'10px'}}>
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