import { uiActions } from "./ui";
import { cartActions } from "./cart";

/* 
Thunk를 이용한 비동기 코드 처리하기
Thunk - 다른 작업이 완료될때 까지 작업을 지연시키는 함수
*/
export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://study-a117e-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');

            if (!response.ok) {
                throw new Error('Fetch Data Error...');
            }
            const data = await response.json();
            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
            }));
        } catch (e) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error !!!',
                    message: 'Fetching Cart Data Failed !!!',
                })
            );
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending Cart Data...',
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://study-a117e-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                }),
            });

            if (!response.ok) {
                throw new Error('Sending Cart Data Failed !!!');
            }
        };

        try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success...',
                    message: 'Sending Cart Data Successfully !!!',
                })
            );
        } catch (e) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error !!!',
                    message: 'Sending Cart Data Failed !!!',
                })
            );
        }
    };
};