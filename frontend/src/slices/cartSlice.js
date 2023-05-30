import { createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed();
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (!existItem) {
        state.cartItems = [...state.cartItems, item];
      }

      //calculate items price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price, 0)
      );

      //calculate shipping price
      state.priorityPrice = addDecimals(state.isPriority === true ? 40 : 0);
      //calculate tax price(10%)
      state.taxPrice = addDecimals(Number(0.1 * state.itemsPrice).toFixed(2));
      //calculate total price
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.priorityPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
