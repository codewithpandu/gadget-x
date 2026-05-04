import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  statusTab: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, qty } = action.payload;
      const findIndexProduct = state.items.findIndex(
        (product) => product.productId === productId,
      );

      if (findIndexProduct >= 0) {
        state.items[findIndexProduct].qty += qty;
      } else {
        state.items.push({ productId, qty });
      }

      console.log(current(state.items));
    },

    toggleTab: (state) => {
      state.statusTab = !state.statusTab;
    },
  },
});
export const { toggleTab, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
