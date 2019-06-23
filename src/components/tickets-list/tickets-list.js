import React, {Component} from "react";

import {connect} from "react-redux";
import withAviasalesService from "../hoc";
import { fetchTickets } from "../../actions";

import "./tickets-list.css";
import TicketsListItem from "../tickets-list-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import InfoText from "../info-text";


const TickesList = ({visibilityTickets, currencyName}) => {
    return(
        <div className="tickets-list">
            {
                visibilityTickets.map((ticket) => {
                    return (
                        <div className="tickets-list-item" key={ticket.id}>
                            <TicketsListItem data={ticket} currencyName={currencyName} />
                        </div>
                    )
                })
            }
        </div>
    );
};


class TicketsListContainer extends Component {

    componentDidMount() {
        this.props.fetchTickets();
    }

    render() {

        const {visibilityTickets, loading, error, ticketsInfo, currencyName} = this.props;

        if(loading){
            return <Spinner />;
        }

        if(error){
            return <ErrorIndicator />;
        }

        if(ticketsInfo){
            return <InfoText />;
        }

        return <TickesList visibilityTickets={visibilityTickets} currencyName={currencyName} />
    }

};

const mapStateToProps = ({visibilityTickets, loading, error, ticketsInfo, currencyName}) => {
    return { visibilityTickets, loading,  error, ticketsInfo, currencyName};
};


const mapDispatchToProps = (dispatch, { aviasalesService }) =>{
    return {
        fetchTickets: fetchTickets(dispatch, aviasalesService)
    }
};


export default withAviasalesService()(connect(mapStateToProps, mapDispatchToProps)(TicketsListContainer));


