import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts;
export const selectNameFilter = (state) => state.filters.name;

export const selectIsLoading = createSelector(
  [selectContacts],
  (contacts) => contacts.isLoading
);

export const selectError = createSelector(
  [selectContacts],
  (contacts) => contacts.error
);

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {
    return contacts.items.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase()) ||
        contact.number.includes(filterName)
    );
  }
);
