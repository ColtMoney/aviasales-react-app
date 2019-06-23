import React, {Fragment} from "react";

import "./tickets-list-item.css";

import icon from "./ticket-logo.png";

const TicketsListItem = ({data, currencyName}) => {

    const { price,
            departure_time,
            origin,
            origin_name,
            departure_date,
            stops,
            arrival_time,
            arrival_date,
            destination,
            destination_name } = data;

    const viewStops = stops !== 0 ? `${stops} пересадка` : null;

    return (

        <Fragment>
            <div className="right-block">
                <div className="img-wrap">
                    <img src={icon} alt=""/>
                </div>
                <button className="btn">Купить за <span>{price} {currencyName}​</span></button>
            </div>
            <div className="ticket-info">
                <div className="ticket-info-block">
                    <div className="time">{departure_time}</div>
                    <div className="destination-name">{origin}, {origin_name}</div>
                    <div className="date">{departure_date}</div>
                </div>
                <div className="ticket-info-transfer">{ viewStops }</div>
                <div className="ticket-info-block">
                    <div className="time">{arrival_time}</div>
                    <div className="destination-name">{destination}, {destination_name}</div>
                    <div className="date">{arrival_date}</div>
                </div>
            </div>
        </Fragment>
    );
};

export default TicketsListItem;