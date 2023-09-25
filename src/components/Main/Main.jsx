import React from 'react';

import './Main.scss';
import TicketList from '../TicketList';
import SortingTab from '../SortingTab';

const Main = () => (
  <div className="main">
    <SortingTab />
    <TicketList />
  </div>
);

export default Main;
