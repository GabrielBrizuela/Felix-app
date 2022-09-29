import { useContext } from "react";
import { CartContext } from "../Context/CartContex";
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart, deleteOne, deleteAll, totalPrecio } = useContext(CartContext);
    const total = totalPrecio();

    if (cart.length === 0) {
        return <Link to="/">Inicio</Link>;
    }

    return (
        <div>
            {cart.map((items) => (
                <div key={items.id} className="cartProduct">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={items.image}
                            width="80px"
                            style={{ borderRadius: '8px' }}
                            alt=""
                        />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h2>{items.nombre}</h2>
                            <h2>Unidades: {items.cantidad}</h2>
                            <h2>Precio: $ {items.precio}.-</h2>
                            
                        </div>
                    </div>
                    <button onClick={() => deleteOne(items.id)}>
                        Delete
                    </button>
                </div>
            ))}
            <button onClick={deleteAll}>Delete all</button>
            <h2>Total: ${total}</h2>
            <Link to="/checkout">Checkout</Link>
        </div>

    )
};

export default Cart;

/* <div>
       <h1> Cart </h1>
        {cart.map ((items)=> (
            <div key= {items.id}>
                <h2> {items.nombre}</h2>
                <img src={items.image} alt={items.nombre} />
                <button onclick ={() => deleteOne (items.id)}> Delete</button>
                </div>

        ))}
        <button onClick={deleteAll}> Delete All </button>
    </div> */