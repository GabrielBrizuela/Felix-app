import React, {useState, useContext} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContex';


const ItemDetail = ({ items }) => {
    const [cantidad, setCantidad] = useState(0)
    const { addProducto } = useContext( CartContext);

    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        addProducto (items, cantidad);
    };

    return (
        
            <div className="container">
                <div className="detail">
                    <img src={items.image} alt={items.nombre} />
                    <div className="infoDetail">
                        <h3>{items.nombre}</h3>
                        <p>
                            {items.descripcion}
                        </p>
                        <h3>${items.precio}.-</h3> 
                        {cantidad === 0 ?(
                        <ItemCount stock={10} initial={1} onAdd={onAdd} />) : (
                        
                            <Link to='/cart'>Ir al carrito</Link>)
                               
                        }
                    </div>
                </div>
            </div>
            
    );
};

export default ItemDetail;