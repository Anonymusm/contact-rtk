import {
  createSlice,
  isPending,
  isRejected,
  isFulfilled,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacts } from "../operations";

const contactsAdapter = createEntityAdapter();

const initialState = contactsAdapter.getInitialState({
  isLoading: false,
  error: null,
  filter: "",
});

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterChange: (state, action) => {
      state.filter = action.payload.target.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        contactsAdapter.setAll(state, action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        contactsAdapter.removeOne(state, action.payload.id);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        const allContacts = contactsAdapter.getSelectors().selectAll(state);
        const isExist = allContacts.some(
          (contact) =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase(),
        );

        if (isExist) {
          alert(`${action.payload.name} is already in contacts`);
          return;
        }

        contactsAdapter.addOne(state, action.payload);
      })
      .addMatcher(
        isPending(getContacts, deleteContact, addContact),
        (state) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isRejected(getContacts, deleteContact, addContact),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload || action.error.message;
        },
      )
      .addMatcher(
        isFulfilled(getContacts, deleteContact, addContact),
        (state) => {
          state.isLoading = false;
        },
      );
  },
});

export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;

export const contactsSelectors = contactsAdapter.getSelectors(
  (state) => state.contactsData,
);
