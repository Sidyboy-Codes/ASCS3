import React from "react";
import './TicketBtn.css';

import { TiTicket } from 'react-icons/ti';

const TicketBtn = () => {
  return (
    <button type="button" className="ticket_btn">
      Tickets
      <TiTicket />
    </button>
  );
};

export default TicketBtn;
