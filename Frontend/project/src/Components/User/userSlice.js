import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  userOrders: [],
  status: "idle",
  loggedInUser: null,
  error: null,
};

const userId = "6687f97a589de862e5725bb7";

export const fetchLoggedInUser = createAsyncThunk(
  "user/fetchLoggedInUser",
  async (id) => {
    console.log("inside function");
    const response = await fetch(`http://localhost:8080/user/${id}`);
    const data = await response.json();
    return data;
  }
);


// LoggedinUser -> id loggedInUser.id 
export const updateUserAddress = createAsyncThunk(
  "user/updateUserAddress",
  async (newAddress) => {
    console.log("inside the updation function : ");
    const response = await fetch(`http://localhost:8080/user/${userId}`, {
      method: "PATCH",
      body: JSON.stringify(newAddress),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    return data;
  }
);

// User slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add address to user by userId reducers
      .addCase(fetchLoggedInUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoggedInUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loggedInUser = action.payload;
      })
      .addCase(fetchLoggedInUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateUserAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserAddress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loggedInUser = action.payload;
      })
      .addCase(updateUserAddress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;

// Selectors
export const selectLoggedInUser = (state) => state.user.loggedInUser;
