import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
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

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    changeQty: (state, action) => {
      const { productId, qty } = action.payload;
      const findIndexProduct = state.items.findIndex(
        (product) => product.productId === productId,
      );

      if (findIndexProduct >= 0) {
        state.items[findIndexProduct].qty = qty;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    deleteProductCart: (state, action) => {
      const { productId } = action.payload;
      const findIndexProduct = state.items.findIndex(
        (product) => product.productId === productId,
      );

      if (findIndexProduct >= 0) {
        state.items.splice(findIndexProduct, 1);
      }
    },

    toggleTab: (state) => {
      state.statusTab = !state.statusTab;
    },
  },
});
export const { toggleTab, addToCart, changeQty, deleteProductCart } =
  cartSlice.actions;
export default cartSlice.reducer;
