import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useCartContext } from "../../Context/CartContext";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const ItemDetail =({data})=> {
    const {addItem}= useCartContext()

    const onAdd=(quantity) => {
        addItem(data, quantity);
      
       }
       

    return (
        <Col lg={4}>
                    <Card>
                    <Card.Img variant="top" src={data.imageId
} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>
                                        {data.description}
                                        </Card.Text>
                                        <Card.Text>
                                        Price: US${data.price}
                                        </Card.Text>
                                        <Card.Text>
                                        Availability: {data.stock}
                                        </Card.Text>
                                       <ItemCount start={1} stock={data.stock} onAdd={onAdd}/>
                                      <Link to={"/"}> <Button variant="link">Continue Shopping</Button></Link>
                                    
                            </Card.Body>
                    </Card>
            </Col>
    )
}



export default ItemDetail;