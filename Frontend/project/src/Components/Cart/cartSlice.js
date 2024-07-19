import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  status: "idle",
};

export const fetchAllCartItems = createAsyncThunk(
  "cart/fetchAllCartItems",
  async (userid) => {
    const response = await fetch(`http://localhost:8080/cart/${userid}`);
    const data = await response.json();
    return data;
  }
);

export const AddToCart = createAsyncThunk("cart/addToCart", async (obj) => {
  const response = await fetch("http://localhost:8080/cart", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "content-type": "application/json" },
  });

  const data = await response.json();
  console.log(data, " : AddToCart");
  return data;
});

export const updateCartItemById = createAsyncThunk(
  "cart/updateCartItemById",
  async (obj) => {
    const queryObj = { quantity: obj.quantity };
    const response = await fetch(`http://localhost:8080/cart/${obj.id}`, {
      method: "PATCH",
      body: JSON.stringify(queryObj),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data, " : data in api");
    return data; // Assuming the API returns the updated cart item
  }
);

export const deleteCartItemById = createAsyncThunk(
  "cart/deleteCartItemById",
  async (id) => {
    const response = await fetch(`http://localhost:8080/cart/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    return id; // Assuming the API returns the deleted cart item ID
  }
);

export const resetCartByUserId = createAsyncThunk(
  "cart/resetCartByUserId",
  async (userid) => {
    const response = await fetch(`http://localhost:8080/cart/byuser/${userid}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    return data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload;
        state.totalAmount = action.payload.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      })
      .addCase(fetchAllCartItems.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(AddToCart.fulfilled, (state, action) => {
        state.cartItems.push(action.payload);
        state.totalAmount += action.payload.price * action.payload.quantity;
      })
      .addCase(updateCartItemById.fulfilled, (state, action) => {
        const id = action.payload.product.id;
        const quantity = action.payload.product.quantity;

        const index = state.cartItems.findIndex((item) => item.id === id);
        if (index !== -1) {
          state.cartItems[index] = {
            ...state.cartItems[index],
            quantity: quantity,
          };
          state.totalAmount = state.cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          );
        }
      })
      .addCase(deleteCartItemById.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      })
      .addCase(resetCartByUserId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetCartByUserId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = [];
        state.totalAmount = 0;
      })
      .addCase(resetCartByUserId.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const getCartItems = (state) => state.cart.cartItems;
export const getTotalAmount = (state) => state.cart.totalAmount;

export default cartSlice.reducer;
