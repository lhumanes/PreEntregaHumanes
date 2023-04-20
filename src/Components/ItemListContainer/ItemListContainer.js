import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query,where } from 'firebase/firestore'; // Importe la instancia de Firestore



const ItemListContainer = () => {
    const [items, setItem] = useState([])
    const {categoryId} = useParams ();

    useEffect(() => {
        const queryDb = getFirestore();
        const queryCollection = collection(queryDb, 'Items');
                  
                if (categoryId) {
                    const itemsSnapshot = query(queryCollection, where('categoryId', '==', categoryId))
                    getDocs(itemsSnapshot)
                    .then(res=>setItem (res.docs.map(p=>({id: p.id, ...p.data()}))))
                } else {
                    getDocs(queryCollection)
                    .then(res=>setItem (res.docs.map(p=>({id: p.id, ...p.data()}))))
                }
                 }, [categoryId])
               

    return (
    
        <div>

        <ItemList data={items} />

        </div>
  );
};

export default ItemListContainer;
