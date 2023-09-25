import React from 'react';

import Airlineslogo from '../../assets/images/s7_airlines.png';

import './Ticket.scss';

const Ticket = () => (
  <div className="ticket">
    <div className="ticket__price-logo">
      <div className="ticket__price"> 13 400 Р</div>
      <img className="header__logo" alt="logo" src={Airlineslogo} />
    </div>
    <div className="ticket__information">
      <div className="ticket__text gray-text">MOW - HKT</div>
      <div className="ticket__text gray-text">В ПУТИ</div>
      <div className="ticket__text gray-text">2 ПЕРЕСАДКИ</div>
      <div className="ticket__text"> 10:45 - 08:00</div>
      <div className="ticket__text"> 21ч 15м</div>
      <div className="ticket__text"> HKG, JNB</div>
    </div>
    <div className="ticket__information">
      <div className="ticket__text gray-text">MOW - HKT</div>
      <div className="ticket__text gray-text">В ПУТИ</div>
      <div className="ticket__text gray-text">1 ПЕРЕСАДКА</div>
      <div className="ticket__text"> 11:20-00:50</div>
      <div className="ticket__text"> 13ч 30м</div>
      <div className="ticket__text"> HKG, JNB</div>
    </div>
  </div>
);

export default Ticket;
