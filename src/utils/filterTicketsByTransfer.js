const filterTicketsByTransfer = (ticket, showAllTickets, valueFilterTransfer) => {
  if (!showAllTickets) {
    return valueFilterTransfer.includes(
      ticket.segments
        .map((element) => element.stops.length)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    );
  }

  return true;
};

export default filterTicketsByTransfer;
