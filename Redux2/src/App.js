import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from './store/ui';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  /* 
  redux slice의 reducers에서 비동기 fetch() 같은 처리를 해서는 안된다.
  fetch를 사용할 경우 useEffect를 사용하여 처리한다.
  */
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'sending',
        title: 'Sending...',
        message: 'Sending Cart Data...',
      }));

      const response = await fetch('https://study-a117e-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending Cart Data Failed !!!');
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success...',
        message: 'Sending Cart Data Successfully !!!',
      }));
    }

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(err => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error !!!',
        message: 'Sending Cart Data Failed !!!',
      }));
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;