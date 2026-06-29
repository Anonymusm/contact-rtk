import { createSelector } from "@reduxjs/toolkit";
import { contactsSelectors } from "./slices/filterSlice";

const selectContacts = (state) => contactsSelectors.selectAll(state);
const selectFilter = (state) => state.contactsData.filter;

export const selectFiltered = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
