import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const base_URL = "https://parakh-api.onrender.com";
// const base_URL = "http://localhost:8080";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (orderDetails, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/cart-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderDetails }),
        credentials: "include",
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const paymentVerify = createAsyncThunk(
  "order/paymentVerify",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/payment-verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId }),
        credentials: "include",
      });
      const result = await response.json();
      return result[0];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/get-orders`, {
        method: "GET",
      });
      const data = await response.json();
      if (response.ok) {
        return data.data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const checkoutSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    orderStatus: [],
    allOrders: []
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.fulfilled, (state, action) => {
        state.order = action.payload;
      })
      .addCase(paymentVerify.fulfilled, (state, action) => {
        state.orderStatus = action.payload;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.allOrders = action.payload;
      });
  },
});

export default checkoutSlice.reducer;
