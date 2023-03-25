import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';





const ItemList = ({id,image, title, prices, stocks}) => {
    const [cartItems, setCartItems] = useState(0);
    const handleAdd = (count) => {
    setCartItems(cartItems + count);
    }
    return (
        <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                    <Link to={`/Item/${id}` } className="text-decoration-none" ><Card.Img variant="top" src={image} /></Link>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        Price: US${prices}
                                    </Card.Text>
                                    <ItemCount stock={stocks} initial={0} onAdd={handleAdd}/>
                                    
                            </Card.Body>
                    </Card>
            </Col>

            
    )

}


export default ItemList

