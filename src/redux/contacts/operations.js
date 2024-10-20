import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/api";
import toast from "react-hot-toast";
// axios.defaults.baseURL = "https://backend-for-phone-book.onrender.com";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async ({ page = 1, perPage = 10 }, thunkApi) => {
    try {
      const res = await axios.get(`/contacts?page=${page}&perPage=${perPage}`);

      return {
        contacts: res.data.data.contacts,
        total: res.data.data.total,
        pagination: res.data.data.pagination,
      };
    } catch (error) {
      toast.error("Oops. Something is wrong. Please try again!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const res = await axios.post("/contacts", contact);
      return res.data;
    } catch (error) {
      toast.error("Oops. Something is wrong. Please try again!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      const res = await axios.get("/contacts");
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
