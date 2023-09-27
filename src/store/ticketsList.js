/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import getFlyDuration from '../utils/getFlyDuration';

export const getSearchIdFromApi = createAsyncThunk('aviasales/getSearchId', async (arg, { rejectWithValue }) =>
  fetch('https://aviasales-test-api.kata.academy/search')
    .then(async (response) => response.json())
    .catch((error) => rejectWithValue(error.message))
);

export const getTicketsFromApi = createAsyncThunk('aviasales/getTickets', async (arg, { rejectWithValue }) =>
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${localStorage.getItem('searchId')}`)
    .then(async (response) => response.json())
    .catch((error) => rejectWithValue(error.message))
);

const ticketsList = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    valueFilterTransfer: [],
    showAllTickets: true,
    ticketsDisplayed: 5,
    stopFetch: false,
    isLoaded: true,
    error: false,
    searchId: false,
  },
  reducers: {
    showMoreTickets(state) {
      state.ticketsDisplayed += 5;
    },

    sortTicketsByPrice(state) {
      const filterTickets = current(state.tickets).slice();
      state.tickets = filterTickets.sort((previous, next) => (previous.price > next.price ? 1 : -1));
    },

    sortTicketsByDuration(state) {
      const filterTickets = current(state.tickets).slice();
      state.tickets = filterTickets.sort((previous, next) =>
        getFlyDuration(previous) > getFlyDuration(next) ? 1 : -1
      );
    },

    switchFilterAll(state, action) {
      state.showAllTickets = action.payload;
    },

    setValueFilterTicket(state, action) {
      if (action.payload.isChecked) {
        state.valueFilterTransfer.push(action.payload.filterValue);
      } else {
        state.valueFilterTransfer = state.valueFilterTransfer.filter((item) => item !== action.payload.filterValue);
      }
    },
  },
  extraReducers: {
    [getSearchIdFromApi.pending]: (state) => {
      state.isLoaded = false;
      state.error = false;
    },

    [getTicketsFromApi.pending]: (state) => {
      state.isLoaded = false;
      state.error = false;
    },

    [getSearchIdFromApi.fulfilled]: (state, action) => {
      localStorage.setItem('searchId', action.payload.searchId);
      state.searchId = true;
    },

    [getTicketsFromApi.fulfilled]: (state, action) => {
      state.tickets = [...state.tickets, ...action.payload.tickets];
      state.stopFetch = action.payload.stop;
      state.isLoaded = action.payload.stop;
    },

    [getSearchIdFromApi.rejected]: (state) => {
      state.error = true;
    },

    [getTicketsFromApi.rejected]: (state, action) => {
      if (action.payload !== '500') {
        state.isLoaded = true;
        state.error = true;
      }
    },
  },
});

export const { showMoreTickets, sortTicketsByPrice, sortTicketsByDuration, setValueFilterTicket, switchFilterAll } =
  ticketsList.actions;

export default ticketsList.reducer;
