/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import getFlyDuration from '../utils/getFlyDuration';

export const getSearchIdFromApi = createAsyncThunk('aviasales/getSearchId', async (arg, { rejectWithValue }) => {
  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search');

    if (!response.ok) {
      return rejectWithValue(`Ошибка ответа сервера: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getTicketsFromApi = createAsyncThunk('aviasales/getTickets', async (arg, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${localStorage.getItem('searchId')}`
    );

    if (!response.ok) {
      return rejectWithValue(`Ошибка ответа сервера: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const ticketsList = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    valueFilterTransfer: [],
    showAllTickets: true,
    ticketsDisplayed: 5,
    stopFetch: false,
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
    [getSearchIdFromApi.fulfilled]: (state, action) => {
      localStorage.setItem('searchId', action.payload.searchId);
    },

    [getTicketsFromApi.fulfilled]: (state, action) => {
      state.tickets = [...state.tickets, ...action.payload.tickets];
      state.stopFetch = true;
    },
  },
});

export const { showMoreTickets, sortTicketsByPrice, sortTicketsByDuration, setValueFilterTicket, switchFilterAll } =
  ticketsList.actions;

export default ticketsList.reducer;
