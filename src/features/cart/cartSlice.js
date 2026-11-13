import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            // Perbaikan 1: Gunakan action.payload sebagai objek produk baru
            const product = action.payload; 
            const existingItem = state.find((item) => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({
                    ...product,
                    quantity: 1
                });
            }
        },
        decreaseQuantity: (state, action) => {
            const productId = action.payload;
            const existingItem = state.find((item) => item.id === productId);

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    return state.filter((item) => item.id !== productId);
                }
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            return state.filter((item) => item.id !== productId)
        }
    }
});

// Perbaikan 2: Ekspor juga decreaseQuantity
export const { addToCart, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;