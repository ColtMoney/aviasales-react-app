
const initialState = {
    tickets: [],
    visibilityTickets: [],
    loading: true,
    error: null,
    currencyFilter: "RUB",
    exchangeRates: [
        {
            id: "RUB_USD",
            val: 0.015675
        },
        {
            id: "RUB_EUR",
            val: 0.013945
        },
        {
            id: "USD_EUR",
            val: 0.889324
        },
        {
            id: "USD_RUB",
            val: 63.761501
        },
        {
            id: "EUR_RUB",
            val: 71.709845
        },
        {
            id: "EUR_USD",
            val: 1.124518
        }
    ],
    filterCheckboxes: [
        {
            id: 1,
            label: "Все",
            stops: -1,
            trigger: false
        },
        {
            id: 2,
            label: "Без пересадок",
            stops: 0,
            trigger: false
        },
        {
            id: 3,
            label: "1 пересадка",
            stops: 1,
            trigger: false
        },
        {
            id: 4,
            label: "2 пересадки",
            stops: 2,
            trigger: false
        },
        {
            id: 5,
            label: "3 пересадки",
            stops: 3,
            trigger: false
        }
    ],
    ticketsInfo: false,
    currencyName: "₽"

};


const filterTickets = (state, item) => {
    return state.tickets.filter(({stops}) => {
        for (let i = 0; i < item.length; i++){
            if(stops === item[i].stops){
                return true;
            }
            else if(item[i].stops === -1){
                return state.tickets;
            }
        }
        return false;
    });
};


const updateCheckbox = (itemIndex, {filterCheckboxes}) => {
    const checkboxIdx = filterCheckboxes.findIndex(({id}) => id === itemIndex);

    const oldCheckboxItem = filterCheckboxes[checkboxIdx];

    const updatedCheckboxItem = {
        ...oldCheckboxItem,
        trigger: !oldCheckboxItem["trigger"]
    };

    return [
        ...filterCheckboxes.slice(0, checkboxIdx),
        updatedCheckboxItem,
        ...filterCheckboxes.slice(checkboxIdx + 1)
    ];
};


const updateTickets = (state, itemIndex) => {
    let flag = false;
    const newFilterCheckboxes = updateCheckbox(itemIndex, state);

    const checkedItem = newFilterCheckboxes.filter(({trigger}) => trigger === true);

    let filteredTickets;

    if(checkedItem.length){
        filteredTickets = filterTickets(state, checkedItem);

        if(!filteredTickets.length){
            flag = true;
        }
    }
    else{
        filteredTickets = state.tickets;
    }


    return {
        ...state,
        filterCheckboxes: newFilterCheckboxes,
        visibilityTickets: filteredTickets,
        ticketsInfo: flag
    };
};


const convertCurrency = (exchangeRates, tickets, currencyExchange) => {
    const currency = exchangeRates.find(({id}) => id === currencyExchange);
    return tickets.map((data) => {
        const price = Math.round(data.price * currency.val);
        return {
            ...data,
            price
        };
    });

};

const newCurrency = (state, action) => {
    const oldCurrency = state.currencyFilter;
    const currentCurrency = action.payload;
    const result = `${oldCurrency}_${currentCurrency}`;
    return result;
};


const updateCurrency = (state, action, currencyName) => {
    const {exchangeRates, visibilityTickets, tickets} = state;
    const currentCurrency = action.payload;
    const newCurr = newCurrency(state, action);

    return {
        ...state,
        currencyFilter: currentCurrency,
        visibilityTickets: convertCurrency(exchangeRates, visibilityTickets, newCurr),
        tickets: convertCurrency(exchangeRates, tickets, newCurr),
        currencyName
    };

};


const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "FETCH_TICKETS_REQUEST":
            return {
                ...state
            };
        case "FETCH_TICKETS_SUCCESS":
            return {
                ...state,
                tickets: action.payload,
                visibilityTickets: action.payload,
                loading: false
            };
        case "FETCH_TICKETS_FAILURE":
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case "FILTER_BY_TRANSFER":
            return updateTickets(state, action.payload);
        case "CURRENCY_FILTER_CHANGE":
            const newCurr = newCurrency(state, action);

            switch (newCurr) {
                case "EUR_USD":
                    return updateCurrency(state, action, "$");
                case "RUB_USD":
                    return updateCurrency(state, action, "$");
                case "RUB_EUR":
                    return updateCurrency(state, action, "‎€");
                case "USD_EUR":
                    return updateCurrency(state, action, "‎€");
                case "USD_RUB":
                    return updateCurrency(state, action, "₽");
                case "EUR_RUB":
                    return updateCurrency(state, action, "₽");
                default: return state
            }

        default:
            return state
    }
    
};

export default reducer;