import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD_CART_ITEM') {
        const updateTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
        const existingCartItemIndex = state.items.findIndex((item) => (
            item.id === action.item.id
        ));
        const existingCartItem = state.items[existingCartItemIndex];

        let updateItems;
        if (existingCartItem) {
            const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updateItems = [...state.items];
            updateItems[existingCartItemIndex] = updateItem;
        } else {
            updateItems = state.items.concat(action.item);
        }
        return { items: updateItems, totalAmount: updateTotalAmount };
    }

    if (action.type === 'REMOVE_CART_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => (
            item.id === action.id
        ));
        const existingCartItem = state.items[existingCartItemIndex];
        const updateTotalAmount = state.totalAmount - existingCartItem.price;

        let updateItems;
        if (existingCartItem.amount === 1) {
            updateItems = state.items.filter((item) => (
                item.id !== action.id
            ));
        } else {
            const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            };
            updateItems = [...state.items];
            updateItems[existingCartItemIndex] = updateItem;
        }
        return { items: updateItems, totalAmount: updateTotalAmount };
    }

    if (action.type === 'CLEAR_CART_ITEM') {
        return defaultCartState;
    }

    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        dispatchCartAction({ type: 'ADD_CART_ITEM', item: item });
    };

    const removeItemHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE_CART_ITEM', id: id });
    };

    const clearItemHandler = () => {
        dispatchCartAction({ type: 'CLEAR_CART_ITEM' });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearItem: clearItemHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider