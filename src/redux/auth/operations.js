import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { setAuthHeader, clearAuthHeader } from "../../api/api.js";
import toast from "react-hot-toast";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
      console.log("Registration response:", res);
      toast.success("Yey, registration is succed");
      return res.data;
    } catch (err) {
      toast.error("Something goes wrong");
      console.error("Registration error:", err);
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      setAuthHeader(res.data.token);
      console.log("Registration response:", res);
      toast.success("Yey, you are log in");
      return res.data;
    } catch (err) {
      console.error("Registration error:", err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    try {
      console.log(persistedToken); // if (persistedToken === null) {
      //   return thunkAPI.rejectWithValue("Unable to fetch user");
      // }
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/current", {
        withCredentials: true,
      });
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
