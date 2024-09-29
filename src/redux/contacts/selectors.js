import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./slice";

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
