import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig'; 
import { CartContext } from "../Context/CartContex";
import ItemList from "./ItemList";
//import { productos } from "./Productos";


const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    
    const valores = useContext (CartContext)

    const {categoryId} = useParams ();

    useEffect (()=> {           
        const prodColecction = collection(db, 'items');
        const ref = categoryId
            ? query(prodColecction, where('categoria', '==', categoryId))
            : prodColecction;

        getDocs(ref).then((response) => {
                const productos = response.docs.map((prod) => {
                console.log(prod);
                return {
                    id: prod.id,
                    ...prod.data(),
                };
            });
            setItems(productos);
        });

    }, [categoryId]);
   

    return (
        <div className="container">
            <h2 onClick={valores.saludo}>{valores.nombre}</h2>
           <ItemList items ={items}/> 
            
        </div>
    )
}

export default ItemListContainer;

/* const getProductos = new Promise ((resolve)=> {
            setTimeout (()=> {
                resolve(productos);
                setLoading (false);
            }, 2000);
        });
        if (categoryId) {
            getProductos.then (resolve => setItems(resolve.filter (productos=> productos.categoryId === categoryId)));
        } else {
            getProductos.then (resolve =>setItems(resolve));
        } */