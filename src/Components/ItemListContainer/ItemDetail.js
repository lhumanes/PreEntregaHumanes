import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';





const ItemDetail = ({image, title, description, prices, stocks}) => {
    const [cartItems, setCartItems] = useState(0);
    const handleAdd = (count) => {
    setCartItems(cartItems + count);
    }
    return (
        <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        {description}
                                        <Card.Text>
                                        Price: US${prices}
                                        </Card.Text>
                                        <Card.Text>
                                        Availability: {stocks}
                                        </Card.Text>
                                       
                                    </Card.Text>
                                    <ItemCount stock={stocks} initial={0} onAdd={handleAdd}/>
                                    
                            </Card.Body>
                    </Card>
            </Col>

            
    )

}


export default ItemDetail

