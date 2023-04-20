import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';





const ItemDetailContainer = () => {
    const [detail, setDetail] = useState ('');
    const {id}= useParams();

    useEffect(() =>{
        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, 'Items', id);
        getDoc(queryDoc)
        .then(res=>setDetail({id: res.id, ...res.data()}))
   
    },[id])

    return (
        <div>
            <ItemDetail data={detail}/>
        </div>

            
    )

}


export default ItemDetailContainer
