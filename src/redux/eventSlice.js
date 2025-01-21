// src/redux/eventSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of your event
const initialState = {
  events: [],
  loading: false,
  error: null,
};

// Create the slice
const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    // Action to add an event
    createEvent: (state, action) => {
      state.events.push(action.payload);
    },
    // Action for loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Action to handle errors
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Export actions
export const { createEvent, setLoading, setError } = eventSlice.actions;

// Export reducer
export default eventSlice.reducer;
