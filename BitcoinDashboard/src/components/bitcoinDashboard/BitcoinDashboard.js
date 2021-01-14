import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardList from './CardList';
import * as actions from '../../store/actions';

const BitcoinDashboard = () => {
    const dispatch = useDispatch();
    const bitcoinValues = useSelector(state => state.bitcoinValues);
    const dollarStatus = useSelector(state => state.dollarStatus);
    const gbpStatus = useSelector(state => state.gbpStatus);
    const euroStatus = useSelector(state => state.euroStatus);

    useEffect(() => {
        const interval = setInterval(() => {
            const fetchData = async () => {
                await dispatch(actions.fetchData())
            }
            fetchData();          
        }, 1000);
        return () => clearInterval(interval);
        
    }, [dispatch])
    
    return (
        <div>
            <h3 style={{textAlign:"center"}} >Bitcoin Dashboard</h3>
            <CardList 
                items={bitcoinValues}
                dollarStatus={dollarStatus}
                gbpStatus={gbpStatus}
                euroStatus={euroStatus} 
            />
        </div>
    )
};

export default BitcoinDashboard;