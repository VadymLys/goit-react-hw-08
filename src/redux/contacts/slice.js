import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./operations";

const initialState = {
  isLoading: false,
  error: null,
  items: [],
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
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addMatcher(isPending, pendingReducer)
      .addMatcher(isRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
