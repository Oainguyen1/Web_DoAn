import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '~/redux/slice/cartSlice';

const saveToLocalStorage = (state) => {
    try {
        const serializedCartState = JSON.stringify(state.cart.CartArr);
        localStorage.setItem('cart', serializedCartState);

        const serializedOrdersState = JSON.stringify(state.cart.completedOrders);
        localStorage.setItem('completedOrders', serializedOrdersState);
    } catch (e) {
        console.warn('Could not save state', e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedCartState = localStorage.getItem('cart');
        const serializedOrdersState = localStorage.getItem('completedOrders');
        return {
            CartArr: serializedCartState ? JSON.parse(serializedCartState) : [],
            completedOrders: serializedOrdersState ? JSON.parse(serializedOrdersState) : [],
        };
    } catch (e) {
        console.warn('Could not load state', e);
        return undefined;
    }
};

const persistedState = loadFromLocalStorage();

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: persistedState,
    },
});

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;
