import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const isShowCartHandler = () => {
    setIsShowCart((prevIsShowCart) => !prevIsShowCart);
  };

  return (
    <CartProvider>
      {isShowCart && <Cart onIsShowCart={isShowCartHandler} />}
      <Header onIsShowCart={isShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;