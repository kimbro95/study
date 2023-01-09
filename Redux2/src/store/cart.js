import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui";

const initialState = { items: [], totalQuantity: 0 }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemToCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    }
});

/* 
Thunk를 이용한 비동기 코드 처리하기
Thunk - 다른 작업이 완료될때 까지 작업을 지연시키는 함수
*/
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
                body: JSON.stringify(cart),
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

export const cartActions = cartSlice.actions;

export default cartSlice;