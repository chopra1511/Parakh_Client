import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import products from "../../products";

const base_URL = "https://parakh-api.onrender.com";
// const base_URL = "http://localhost:8080";

export const getAllProduct = createAsyncThunk(
  "get-all-products",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/get-products`, {
        method: "GET",
        // credentials: "include",
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

export const getProductDetails = createAsyncThunk(
  "product-details",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/product-details`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
        // credentials: "include",
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

export const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/add-to-wishlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        return data.wishlist.wishlist;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFromWishlist = createAsyncThunk(
  "wishlist/removeFromWishlist",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/remove-from-wishlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        return data.wishlist.wishlist;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserWishlist = createAsyncThunk(
  "wishlist/getUserWishlist",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${base_URL}/get-wishlist`, {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        return data.wishlist[0].wishlist;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    wishlist: [],
    productDetails: null,
    isLoading: false,
    isError: false,
    errorMessage: null,
  },
  extraReducers: (builder) => {
    builder
      //getAllProducts
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to fetch addresses";
      })

      //getProductDetails
      .addCase(getProductDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage =
          action.payload || "Failed to fetch product details";
      })

      //addToWishlist
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload;
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })

      //removeFromWishlist
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload;
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })

      //getUserWishlist
      .addCase(getUserWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload;
      })
      .addCase(getUserWishlist.rejected, (state, action) => {
        state.errorMessage = action.payload;
      });
  },
});


export default productSlice.reducer;
