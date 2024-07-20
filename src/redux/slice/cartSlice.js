import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    CartArr: JSON.parse(localStorage.getItem('cart')) || [],
    completedOrders: JSON.parse(localStorage.getItem('completedOrders')) || [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const existingProductIndex = state.CartArr.findIndex((item) => item.id === action.payload.id);

            if (existingProductIndex !== -1) {
                // Sản phẩm đã tồn tại trong giỏ hàng, cập nhật màu sắc, kích thước và số lượng
                state.CartArr[existingProductIndex].quantity += action.payload.quantity;
                state.CartArr[existingProductIndex].color = action.payload.color;
                state.CartArr[existingProductIndex].size = action.payload.size;
            } else {
                // Sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới
                state.CartArr.push(action.payload);
            }
            localStorage.setItem('cart', JSON.stringify(state.CartArr));
        },
        removeProduct: (state, action) => {
            state.CartArr = state.CartArr.filter((item) => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.CartArr));
        },
        updateQuantity: (state, action) => {
            const product = state.CartArr.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity = action.payload.quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state.CartArr));
        },
        addCompletedOrder: (state, action) => {
            state.completedOrders.push({
                ...action.payload,
                paymentMethod: action.payload.paymentMethod || 'Chưa xác định',
                orderStatus: 'Đang giao hàng',
            });
            localStorage.setItem('completedOrders', JSON.stringify(state.completedOrders));
        },
        removeCompletedOrder: (state, action) => {
            state.completedOrders = state.completedOrders.filter((order) => order.id !== action.payload);
            localStorage.setItem('completedOrders', JSON.stringify(state.completedOrders));
        },
    },
});

export const { addProduct, removeProduct, updateQuantity, addCompletedOrder, removeCompletedOrder } = cartSlice.actions;

export default cartSlice.reducer;
