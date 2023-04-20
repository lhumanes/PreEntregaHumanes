import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';





const Item = ({info}) => {
  
    return (
        <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                    <Link to={`/Item/${info.id}` } className="text-decoration-none" ><Card.Img variant="top" src={info.imageId} /></Link>
                            <Card.Body>
                                <Card.Title>{info.title}</Card.Title>
                                    <Card.Text>
                                        Price: US${info.price}
                                    </Card.Text>
                                    <Link to={`/Item/${info.id}/` } className="text-decoration-none" ><Button variant="primary">
                                        More Details
                                    </Button></Link>
                                    
                            </Card.Body>
                    </Card>
            </Col>

            
    )

}


export default Item

