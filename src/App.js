// import React from 'react';
// import { Button, ListGroup } from 'react-bootstrap';

// const ShoppingCart = ({ cart, onRemoveFromCart, onCheckout }) => {
//   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ListGroup>
//         {cart.map((item) => (
//           <ListGroup.Item key={item.id}>
//             {item.name} - ${item.price.toFixed(2)}{' '}
//             <Button variant="danger" onClick={() => onRemoveFromCart(item)}>
//               Remove
//             </Button>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//       <h4>Total: ${totalPrice.toFixed(2)}</h4>
//       <Button variant="primary" onClick={onCheckout}>
//         Checkout
//       </Button>
//     </div>
//   );
// };

// export default ShoppingCart;

import React from 'react'
import ShoppingCart from './components/shoppingcart'
import Home from './components/Homepage'
import Product from './components/Product'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
       <Routes>
             <Route path='/' element={<Home/>}/>
            {/* <Route path='/shopping' element={<ShoppingCart/>}/>
            <Route path='/product' element={<Product/>}/> */}

       </Routes>
    </BrowserRouter>
  )
}

export default App