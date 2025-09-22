import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('carts') || '[]'),
  statusTab: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity = 1 } = action.payload;
      const idx = state.items.findIndex(item => item.productId === productId);

      if (idx >= 0) {
        state.items[idx].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }

      localStorage.setItem('carts', JSON.stringify(state.items));
    },

    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const idx = state.items.findIndex(item => item.productId === productId);

      if (idx >= 0) {
        if (quantity > 0) {
          state.items[idx].quantity = quantity;
        } else {
          // Remove item completely if quantity <= 0
          state.items.splice(idx, 1);
        }
      }

      localStorage.setItem('carts', JSON.stringify(state.items));
    },

    removeFromCart(state, action) {
      const { productId } = action.payload;
      state.items = state.items.filter(item => item.productId !== productId);
      localStorage.setItem('carts', JSON.stringify(state.items));
    },

    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },
  },
});

export const { addToCart, changeQuantity, removeFromCart, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
