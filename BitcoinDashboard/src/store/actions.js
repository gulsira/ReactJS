import Bitcoin from '../models/Bitcoin';

export const fetchData = () => {
    return async (dispatch, getState) => {
        try  {
            const response = await fetch(
                'https://api.coindesk.com/v1/bpi/currentprice.json'
            );
            if(!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();
            const loadedBitcoinValues = [];
            
            for(let i in responseData.bpi) {
                loadedBitcoinValues.push(new Bitcoin(
                    responseData.bpi[i].code,
                    responseData.bpi[i].description,
                    responseData.bpi[i].rate_float
                ))
            }
            dispatch({
                type: 'FETCH_DATA',
                bitcoinValues: loadedBitcoinValues
            });
        } catch (error) {
            throw error
        }
    };
};