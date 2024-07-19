import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  status: "idle",
  currentOrder: null,
  totalOrders: 0,
};

export const insertOrder = createAsyncThunk(
  "order/insertOrder",
  async (orderDetails) => {
    const response = await fetch("http://localhost:8080/order", {
      method: "POST",
      body: JSON.stringify(orderDetails),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    console.log(data, " : Order Inserted");
    return data;
  }
);

export const fetchAllOrdersByUserId = createAsyncThunk(
  "order/fetchAllOrdersByUserId",
  async (userid) => {
    const response = await fetch(`http://localhost:8080/order/${userid}`);
    const data = await response.json();
    console.log(data, " : All orders ");
    return data;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(insertOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(insertOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentOrder = action.payload;
        // state.orders.push(action.payload);
      })
      .addCase(insertOrder.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchAllOrdersByUserId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllOrdersByUserId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchAllOrdersByUserId.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { resetOrder } = orderSlice.actions;
export const getCurrentOrder = (state) => state.order.currentOrder;
export const getAllOrders = (state) => state.order.orders;
export default orderSlice.reducer;
