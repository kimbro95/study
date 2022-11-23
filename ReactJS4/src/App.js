import React, { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const isShowCartHandler = () => {
    setIsShowCart(!isShowCart);
  };

  return (
    <Fragment>
      {isShowCart && <Cart onIsShowCart={isShowCartHandler} />}
      <Header onIsShowCart={isShowCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;