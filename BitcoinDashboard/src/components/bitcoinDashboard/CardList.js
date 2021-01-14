import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Euro from './icons/euroSign.png';
import Dollar from './icons/dollarSign.png';
import GBP from './icons/gbpSign.png';

import Upper from './icons/upper.png';
import Downer from './icons/downer.png';
import Stable from './icons/stable.png';

const CardList = props => {
    if (props.items.length === 0) {
        return (
            <h3 style={{ textAlign: 'center' }} >Information Not Found. Please Refresh the Page.</h3>
        );
    };
    const pickSign = (code) => {
        var sign;
        switch (code) {
            case 'USD':
                sign = Dollar;
                break;
            case 'EUR':
                sign = Euro;
                break;
            case 'GBP':
                sign = GBP;
                break;
            case 'Upper':
                sign = Upper;
                break;
            case 'Downer':
                sign = Downer;
                break;
            default:
                sign = Stable
        }
        return sign;
    }

    return (
        <div style={{ padding: '5%', height: '80%' }} >
            <table style={{ textAlign: "center" }} className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Code</th>
                        <th scope="col">Description</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>

                {props.items.map(value => [

                    <tbody key={value.code} >
                        <tr>
                            <th scope="row"><img style={{ maxHeight: 25 }} src={pickSign(value.code)} alt="sign" /></th>
                            <td>{value.code}</td>
                            <td>{value.description}</td>
                            <td>{value.rate_float}</td>
                            {
                                value.code === "USD" ? <td><img style={{ maxHeight: 25 }} src={pickSign(props.dollarStatus)} alt="status"/></td>
                                    : value.code === "GBP" ? <td><img style={{ maxHeight: 25 }} src={pickSign(props.gbpStatus)} alt="status"/></td>
                                        : <td><img style={{ maxHeight: 25 }} src={pickSign(props.euroStatus)} alt="status"/></td>
                            }
                        </tr>
                    </tbody>

                ])}
            </table>
        </div>


    );
};

export default CardList;