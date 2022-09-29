import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setcantidad] = useState(initial);
   

    const aumentarCantidad = () => {
        cantidad < stock && setcantidad ( cantidad +1);
    };

    const restarCantidad = () => {
        cantidad > initial && setcantidad ( cantidad -1);
    };

    const agregarProducto = () => {
        
        onAdd (cantidad);
    };

  

    return (

        <div className="container py-5">
            <div className="row">
                <div className="col-md-2">
                    <p className="text-center">Nombre del Producto</p>
                    <button className="btn-counter" onClick={aumentarCantidad}>
                    +
                </button>
                <p style={{ fontSize: '24px' }}>{cantidad} </p>
                <button className="btn-counter" onClick={restarCantidad}>
                    -
                </button>
            </div>
            <button  disabled={cantidad === 0}className="btn-add" onClick={agregarProducto}>
                Agregar al carrito
            </button>
                   
                
            </div >
        </div>
    )
};

export default ItemCount;