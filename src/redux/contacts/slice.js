import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./operations";
import { logOut } from "../auth/operations";

const initialState = {
  isLoading: false,
  error: null,
  items: [],
  total: 0,
  pagination: { currentPage: 1, totalPages: 1 },
};

const isPending = (action) =>
  typeof action.type === "string" && action.type.endsWith("/pending");

const isRejected = (action) =>
  typeof action.type === "string" && action.type.endsWith("/rejected");

const pendingReducer = (state) => {
  state.isLoading = true;
  state.error = null;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.contacts;
        state.total = action.payload.total;
        state.pagination = action.payload.pagination;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        console.log(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.pagination = { currentPage: 1, totalPages: 1 };
        state.total = 0;
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher(isPending, pendingReducer)
      .addMatcher(isRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
