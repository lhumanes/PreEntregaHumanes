import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';






const Item = () => {
    const [detail, setDetail] = useState ({})
    const {id}= useParams()

    const getItems = async (id) =>{
        setTimeout(async () => {
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await response.json()
            setDetail(data)
            console.log(data)
           
        }, 2000);
       };

    

    const [cartItems, setCartItems] = useState(0);
    const handleAdd = (count) => {
    setCartItems(cartItems + count);
    }

    useEffect(() =>{
        getItems(id)

    },[])

    return (
        <Col lg={4}>
                    <Card>
                    <Card.Img variant="top" src={detail.images} />
                            <Card.Body>
                                <Card.Title>{detail.title}</Card.Title>
                                    <Card.Text>
                                        {detail.description}
                                        </Card.Text>
                                        <Card.Text>
                                        Price: US${detail.price}
                                        </Card.Text>
                                        <Card.Text>
                                        Availability: {detail.stock}
                                        </Card.Text>
                                       
                                    
                                    <ItemCount stock={detail.stock} initial={0} onAdd={handleAdd}/>
                                    
                            </Card.Body>
                    </Card>
            </Col>

            
    )

}


export default Item
