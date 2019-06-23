import React from "react";

import LeftSidebar from "../left-sidebar";
import TicketsList from "../tickets-list";

import "./app.css";

import icon from "./logo.png";

const App = () => {
    return (
        <div className="aviasales-container">
            <div className="top-logo"><img src={icon} alt=""/></div>
            <div className="row">
                <LeftSidebar />
                <TicketsList />
            </div>
        </div>
    )
};

export default App;