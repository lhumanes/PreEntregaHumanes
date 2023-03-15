import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';







const Prueba3 = ({image, title, description, price, stock}) => {
    return (
        <Col lg={4}>
                    <Card >
                        <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        {description}
                                        {price}
                                       
                                    </Card.Text>
                                    <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                    </Card>
            </Col>


    )

}


export default Prueba3