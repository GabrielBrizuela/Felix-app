import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
//import { productos } from './Productos';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [items, setItems] = useState({});
   
    const {detalleId} = useParams ();

    useEffect(() => {
        const prodColecction = collection(db, 'items');
        const ref = doc(prodColecction, detalleId);
        getDoc(ref).then((res) => {
            setItems({
                id: res.id,
                ...res.data(),
            });
        });
       
    }, [detalleId]);

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail items={items} /> 
        </div>
    );
};

export default ItemDetailContainer;

/* const getItems = () =>
            new Promise((res, rej) => {
                const producto = productos.find ((prod) => prod.id === Number (detalleId));
                setTimeout (() => {
                    res (producto);
                    setLoading (false);
                }, 500);

            });

              getItems ().then((info)=> {
                setItems(info);
                
            })
            .catch((error) => {
                console.log(error);
            }); */