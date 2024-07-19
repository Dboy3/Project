import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: null,
  productList: [],
  state: "idle",
  productCount: 0,
};

export const fetchAllProductAsync = createAsyncThunk(
  "product/fetchAllproducts",
  async () => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    return data;
  }
);

export const fetchProductByID = createAsyncThunk(
  "product/fetchProductByID",
  async (id) => {
    const response = await fetch(`http://localhost:8080/products/${id}`);
    const data = await response.json();
    return data;
  }
);

export const fetchProductsBySort = createAsyncThunk(
  "product/fetchProductsBySort",
  async (obj) => {
    let query = "";
    for (let sortOpt of obj) {
      if (sortOpt.checked) {d
        query += `${sortOpt.sort},`;
      }
    }
    console.log(query);
    const response = await fetch(
      `http://localhost:8080/products/filter?_sort=${query}`
    );
    const data = await response.json();
    return data;
  }
);

//  here I am trying to send the filter object with safety IN POST method 
// just for now suppose we received the filter object using params -> Read GEMINI 
export const fetchProductsByFilter = createAsyncThunk(
  "product/fetchProductsByFilter",
  async () => {
    const filter = {
      category: ["apple", "Oppo"],
      brand: ["Samsung", "Redmi"],
      sortby: ["rating", "price"],
      order: ["asc", "desc"],
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(filter),
    };

    try {
      const response = await fetch("/api/products/filter", options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
      return { error: error.message };
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.state = "loading";
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.state = "succeeded";
        state.productList = action.payload;
        state.productCount = action.payload.length;
      })
      .addCase(fetchAllProductAsync.rejected, (state) => {
        state.state = "failed";
      })
      .addCase(fetchProductByID.pending, (state) => {
        state.state = "loading";
      })
      .addCase(fetchProductByID.fulfilled, (state, action) => {
        state.state = "succeeded";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductByID.rejected, (state) => {
        state.state = "failed";
      })
      .addCase(fetchProductsBySort.pending, (state) => {
        state.state = "loading";
      })
      .addCase(fetchProductsBySort.fulfilled, (state, action) => {
        state.state = "succeeded";
        state.productList = action.payload;
        state.productCount = action.payload.length;
      })
      .addCase(fetchProductsBySort.rejected, (state) => {
        state.state = "failed";
      });
  },
});

export const getAllProducts = (state) => state.product.productList;
export const getProductCount = (state) => state.product.productCount;
export const getSelectedProduct = (state) => state.product.selectedProduct;
export default productSlice.reducer;
