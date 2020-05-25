import React, { useState, useReducer } from 'react';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './Reducers';
import ShopContext from './ShopContext';

const GlobalState = props => {
  const product = [
    { id: 'p1', title: 'Dell XPs 13 inch laptop', price: 199999.00 },
    { id: 'p2', title: 'HP EliteBook 13 inch laptop', price: 149999.00 },
    { id: 'p3', title: 'Lenovo YOGA 13 inch laptop', price: 99999.00 },
    { id: 'p4', title: 'Macbook Air 13 inch laptop', price: 89999.00 }
  ];

  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, {cart: []});

  const addProductToCart=product=>{
    dispatch({type: ADD_PRODUCT, product: product});
  }

  const removeProductFromCart=productId=>{
    dispatch({type: REMOVE_PRODUCT, productId: productId});
  }

  return (
    <ShopContext.Provider
      value={{
        products: product,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default GlobalState;