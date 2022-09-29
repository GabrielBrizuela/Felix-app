import { useState, createContext } from "react";

export const CartContext = createContext ();

const CartProvider = (props) => {
    const [cart , setCart] = useState ([]);

    const addProducto = (items , cantidad) => {
        const producto = {...items, cantidad};
        if (isInCart (items.id)) {
            sumarCantidad(producto);
        } else {
            setCart([...cart, producto]);
        }

    };

    const isInCart = (id) => {
        return cart.some ((prod) => prod.id=== id);
    };

    const sumarCantidad = ( producto) => {
        const cartUpdate = cart.map ((productoEnCarrito) =>{
            if (producto.id === productoEnCarrito.id) {
                const productoUpdate = {
                    ...productoEnCarrito,
                    cantidad: producto.cantidad,
                };
                return productoUpdate;
            } else {
                return productoEnCarrito;  
            }
        });
        setCart (cartUpdate);
    };

    const deleteAll = () => {
        setCart ([]);
    };

    const totalProductos = () => {
        const copia = [...cart];
        let count = 0;
        copia.forEach ((producto) => {
            count = count + producto.cantidad;
        });
        return count;
    }
    
    const totalPrecio = () => {
        const copia = [...cart];
        let count = 0;
        copia.forEach((producto) => {
            count = count + producto.cantidad * producto.precio;
        });
        return count;
    };

    const deleteOne = (id) => {
        const productosFiltrados = cart.filter ((prod) => prod.id !==id );
        setCart(productosFiltrados);
    };
    
    


    return (
        <CartContext.Provider value= {{
            deleteOne,
            isInCart,
            deleteAll,
            addProducto,
            totalProductos,
            totalPrecio,
            cart,
            
        }}>
        {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider
