import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Product } from "../definitions";

export interface CartState {
  productsInCart: Product[];
}

const initialState: CartState = {
  productsInCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.productsInCart.push(action.payload);
    },
    remove: (state, action: PayloadAction<Product>) => {
      let index = state.productsInCart.indexOf(action.payload);
      state.productsInCart.splice(index, 1);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
