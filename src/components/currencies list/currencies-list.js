import React, {Component} from "react";
import {connect} from "react-redux";

import withAviasalesService from "../hoc";

import {currencyFilterChange} from "../../actions";

import "./currencies-list.css";

class CurrenciesList extends Component {

    currenciesList = [
        { name: "RUB", label: "Rub" },
        { name: "USD", label: "Usd" },
        { name: "EUR", label: "Eur" }
    ];

    render() {

        const {currencyFilter, currencyFilterChange} = this.props;


        return (
            <ul className="сurrency-box">
                {
                    this.currenciesList.map((currency) => {
                        const isActive = currency.name === currencyFilter;
                        const clazz = isActive ? "active" : null;
                        return (
                            <li key={currency.name} onClick={() => currencyFilterChange(currency.name)} className={clazz}>{currency.label}</li>
                        )
                    })
                }
            </ul>
        );
    }

};

const mapStateToProps = ({currencyFilter}) => {
    return {currencyFilter}
};

const mapDispatchToProps = {
    currencyFilterChange,
};

export default withAviasalesService()(connect(mapStateToProps, mapDispatchToProps)(CurrenciesList));