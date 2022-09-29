import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../Context/CartContex";



const CartWidget = () => {
    const { totalProductos }= useContext( CartContext);
    const producto = totalProductos();

    return ( 
        <Link to= "/cart">
        <div style={{ display: 'flex', alignItems: 'center', color:"black" }}>
            <span className="material-icons">shopping_cart</span>
            <span>{producto}</span>
        </div>
        </Link>
    );
};

export default CartWidget;