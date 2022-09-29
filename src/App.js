import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import CartProvider from './Context/CartContex';
import Checkout from './Components/Checkout';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className='container-fluid fondo_oscuro'>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element = {<Checkout/>}/>
          </Routes>
          <hr />
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
