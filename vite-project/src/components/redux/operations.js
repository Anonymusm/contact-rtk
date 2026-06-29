import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6a107d99d2a985707036dcee.mockapi.io";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contact, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contact.id}`);

      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (object, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", object);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
