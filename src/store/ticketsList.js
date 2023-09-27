/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit';
import getFlyDuration from '../utils/getFlyDuration';

const ticketsList = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [
      {
        price: 16820,
        carrier: 'U6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-04-11T11:29:10.098Z',
            duration: 1362,
            stops: ['DOH', 'JNB', 'DXB'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-10-08T11:46:27.959Z',
            duration: 1049,
            stops: ['IST', 'DEL'],
          },
        ],
      },
      {
        price: 89340,
        carrier: 'UT',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-03-17T06:12:50.713Z',
            duration: 672,
            stops: [],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-04-17T18:44:35.165Z',
            duration: 1416,
            stops: ['DXB', 'DOH', 'HKG'],
          },
        ],
      },
      {
        price: 64720,
        carrier: 'U6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-02-19T18:34:10.730Z',
            duration: 808,
            stops: ['JNB'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-06-12T08:06:49.764Z',
            duration: 1033,
            stops: ['DEL', 'DOH'],
          },
        ],
      },
      {
        price: 95140,
        carrier: 'FV',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-09-30T03:10:27.413Z',
            duration: 1040,
            stops: ['HKG'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-07-21T13:05:51.342Z',
            duration: 912,
            stops: ['DXB', 'IST'],
          },
        ],
      },
      {
        price: 106420,
        carrier: 'U6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-08-30T19:41:35.368Z',
            duration: 647,
            stops: [],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-01-16T19:56:44.336Z',
            duration: 1391,
            stops: ['DXB', 'IST', 'DXB'],
          },
        ],
      },
      {
        price: 104440,
        carrier: 'U6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-01-07T05:09:28.855Z',
            duration: 1367,
            stops: ['IST', 'HKG', 'DOH'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-03-25T09:06:02.754Z',
            duration: 655,
            stops: [],
          },
        ],
      },
      {
        price: 60340,
        carrier: 'FV',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-05-24T20:51:29.826Z',
            duration: 1070,
            stops: ['IST', 'JNB'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2025-03-24T14:57:30.505Z',
            duration: 847,
            stops: ['IST'],
          },
        ],
      },
      {
        price: 105720,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-04-12T16:01:31.349Z',
            duration: 614,
            stops: [],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-07-19T20:00:09.901Z',
            duration: 834,
            stops: [],
          },
        ],
      },
      {
        price: 18640,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-06-08T00:06:13.993Z',
            duration: 971,
            stops: ['IST', 'IST'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2025-03-16T23:17:54.383Z',
            duration: 921,
            stops: ['DXB'],
          },
        ],
      },
      {
        price: 89260,
        carrier: 'W6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-12-04T20:29:49.119Z',
            duration: 1322,
            stops: ['HKG', 'DEL', 'IST'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-11-01T16:26:35.673Z',
            duration: 1309,
            stops: ['HKG', 'DOH', 'HKG'],
          },
        ],
      },
      {
        price: 62930,
        carrier: 'FV',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-09-02T01:50:04.679Z',
            duration: 847,
            stops: [],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-01-19T09:48:51.118Z',
            duration: 927,
            stops: ['IST', 'DEL'],
          },
        ],
      },
      {
        price: 87370,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-12-18T22:14:38.518Z',
            duration: 1123,
            stops: ['DOH', 'IST'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-07-23T15:59:02.225Z',
            duration: 794,
            stops: [],
          },
        ],
      },
      {
        price: 106680,
        carrier: 'UT',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-12-27T11:41:00.766Z',
            duration: 1011,
            stops: ['HKG'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-04-24T18:55:37.833Z',
            duration: 1018,
            stops: ['JNB', 'HKG'],
          },
        ],
      },
      {
        price: 51160,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-08-13T01:53:56.977Z',
            duration: 1233,
            stops: ['DOH', 'HKG'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-02-06T18:07:05.295Z',
            duration: 851,
            stops: ['DXB'],
          },
        ],
      },
      {
        price: 82290,
        carrier: 'W6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-12-17T00:26:06.266Z',
            duration: 547,
            stops: [],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-04-01T04:07:20.265Z',
            duration: 771,
            stops: [],
          },
        ],
      },
      {
        price: 75980,
        carrier: 'U6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-08-09T18:30:45.689Z',
            duration: 767,
            stops: [],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2023-11-30T12:13:36.668Z',
            duration: 1237,
            stops: ['HKG', 'DOH'],
          },
        ],
      },
      {
        price: 13690,
        carrier: 'UT',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2023-12-12T05:58:07.912Z',
            duration: 574,
            stops: [],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-08-08T17:09:53.028Z',
            duration: 1190,
            stops: ['JNB', 'HKG'],
          },
        ],
      },
      {
        price: 81320,
        carrier: 'W6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-06-27T04:40:02.905Z',
            duration: 571,
            stops: [],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2025-04-30T04:07:44.945Z',
            duration: 1432,
            stops: ['IST', 'DEL', 'HKG'],
          },
        ],
      },
      {
        price: 44670,
        carrier: 'W6',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-07-20T12:21:14.392Z',
            duration: 1175,
            stops: ['DOH', 'DOH'],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-12-09T12:37:48.111Z',
            duration: 1131,
            stops: ['DXB', 'DEL'],
          },
        ],
      },
      {
        price: 109470,
        carrier: 'UT',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-03-12T13:24:27.022Z',
            duration: 750,
            stops: [],
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-04-06T17:13:57.357Z',
            duration: 1034,
            stops: ['DOH', 'DXB'],
          },
        ],
      },
    ],
    valueFilterTransfer: [],
    showAllTickets: true,
    ticketsDisplayed: 5,
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
});

export const { showMoreTickets, sortTicketsByPrice, sortTicketsByDuration, setValueFilterTicket, switchFilterAll } =
  ticketsList.actions;

export default ticketsList.reducer;
