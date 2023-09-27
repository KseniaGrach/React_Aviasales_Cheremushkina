import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Ticket from '../Ticket';

import {getSearchIdFromApi, getTicketsFromApi, showMoreTickets} from '../../store/ticketsList';
import filterTicketsByTransfer from '../../utils/filterTicketsByTransfer';
import getUniqueKey from "../../utils/getUniqueKey";

import Styles from './TicketList.module.scss';

const TicketList = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const ticketsDisplayed = useSelector((state) => state.tickets.ticketsDisplayed);
  const showAllTickets = useSelector((state) => state.tickets.showAllTickets);
  const valueFilterTransfer = useSelector((state) => state.tickets.valueFilterTransfer);
  const stopFetch = useSelector((state) => state.tickets.stopFetch);

  const dispatch = useDispatch();

  const ticketsFilter = tickets.filter((item) => filterTicketsByTransfer(item, showAllTickets, valueFilterTransfer))

  useEffect(() => () => {
    dispatch(getSearchIdFromApi());
  }, [dispatch]);

  useEffect(() => () => {
    if (!stopFetch) dispatch(getTicketsFromApi());
  }, [dispatch, tickets, stopFetch]);

  return (
    <div className={Styles.ticket_list}>
      {
        ticketsFilter.slice(0, ticketsDisplayed).map((ticket) => (
          <Ticket key={getUniqueKey()} {...ticket} />
        ))
      }
      {ticketsFilter.length > ticketsDisplayed && (
        <button type="button" className={Styles.button} onClick={() => dispatch(showMoreTickets())}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </div>
  );
};

export default TicketList;
