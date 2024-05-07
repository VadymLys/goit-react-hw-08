import { createSelector } from "@reduxjs/toolkit";

export const selectContactsState = (state) => state.contacts;
export const filteredContacts = (state) => state.filters.name;

export const selectIsLoading = createSelector(
  [selectContactsState],
  (contacts) => contacts.isLoading
);

export const selectError = createSelector(
  [selectContactsState],
  (contacts) => contacts.error
);

export const selectVisibleContacts = createSelector(
  [selectContactsState, filteredContacts],
  (contacts, filterName) => {
    return contacts.items.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase()) ||
        contact.number.includes(filterName)
    );
  }
);
