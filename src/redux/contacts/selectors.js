import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectTotalContacts = (state) => state.contacts.total;
export const selectPagination = (state) => state.contacts.pagination;
const selectContactsState = (state) => state.contacts;

export const selectIsLoading = createSelector(
  [selectContactsState],
  (contacts) => contacts.isLoading
);

export const selectError = createSelector(
  [selectContactsState],
  (contacts) => contacts.error
);

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {
    return contacts?.filter((contact) => {
      const nameMatches =
        contact.name !== undefined &&
        contact.name.toLowerCase().includes(filterName.toLowerCase());
      const numberMatches =
        contact.number !== undefined &&
        contact.number.includes(filterName ? filterName.toLowerCase() : "");

      return nameMatches || numberMatches;
    });
  }
);
