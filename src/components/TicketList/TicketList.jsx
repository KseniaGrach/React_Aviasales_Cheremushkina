import React from 'react';

import './TicketList.scss';
import Ticket from '../Ticket';

const TicketList = () => (
  <div className="ticket-list">
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
    <button type="button" className="ticket-list__button">
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  </div>
);

export default TicketList;
