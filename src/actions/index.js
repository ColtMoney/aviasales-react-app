const ticketsLoaded = (newTickets) => {
    return {
        type: "FETCH_TICKETS_SUCCESS",
        payload: newTickets
    }
};

const ticketsRequested = () => {
    return {
        type: "FETCH_TICKETS_REQUEST"
    }
};

const ticketsError = (error) => {
    return {
        type: "FETCH_TICKETS_FAILURE",
        payload: error
    }
};

const filterByTransfer = (id) => {
    return {
        type: "FILTER_BY_TRANSFER",
        payload: id
    }
};

const currencyFilterChange = (currency) => {
    return {
        type: "CURRENCY_FILTER_CHANGE",
        payload: currency
    }
};

const fetchTickets = (dispatch, aviasalesService) => () => {

    dispatch(ticketsRequested());
    aviasalesService.getData().then((data) => {
        dispatch(ticketsLoaded(data));
    }).catch((error) => {
        dispatch(ticketsError(error));
    });
};

export {
    fetchTickets,
    filterByTransfer,
    currencyFilterChange,
}