import React from "react";
import {connect} from "react-redux";

import {filterByTransfer} from "../../actions";

import CurrenciesList from "../currencies list";

import "./left-sidebar.css";

const LeftSidebar = ({filterCheckboxes, filterByTransfer}) => {

    return(
        <div className="left-sidebar">
            <h4>Валюта</h4>

            <CurrenciesList />

            <h4>Количество пересадок</h4>
            <div className="transfer-filter">
                {
                    filterCheckboxes.map((checkbox) => {

                        const {label, id} = checkbox;

                        return (
                            <div className="checkbox-item" key={id}>
                                <label className="checkbox-container">{label}
                                    <input onChange={() => filterByTransfer(id)} type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

const mapStateToProps = ({filterCheckboxes}) => {
    return {filterCheckboxes}
};

const mapDispatchToProps = {
    filterByTransfer
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);