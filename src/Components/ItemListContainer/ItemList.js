import Item from "./Item"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';







const ItemList = ({data=[]}) => {
  
    return (
        <Container>
            <Row>
                {
                    data.map(p=> <Item key ={p.id} info={p}/>)
                        }
                
            </Row>
        </Container>

            
    )

}


export default ItemList

