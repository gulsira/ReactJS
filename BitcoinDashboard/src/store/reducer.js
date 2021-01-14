const initialState = {
    bitcoinValues: [],
    dollarStatus: undefined,
    gbpStatus: undefined,
    euroStatus: undefined
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            var dollarStat = "";
            for (let i in state.bitcoinValues[0]) {
                var x = state.bitcoinValues[0]["rate_float"];
            }
            var dollarDifference = parseFloat(action.bitcoinValues[0].rate_float) - parseFloat(x);
            if (dollarDifference > 0) { dollarStat = "Upper" }
            else if (dollarDifference < 0) { dollarStat = "Downer" }
            else if (dollarDifference === 0 ) {dollarStat = state.dollarStatus}

            var gbpStat = "";
            for (let i in state.bitcoinValues[1]) {
                var y = state.bitcoinValues[1]["rate_float"];
            }
            var gbpDifference = parseFloat(action.bitcoinValues[1].rate_float) - parseFloat(y);
            if (gbpDifference > 0) { gbpStat = "Upper" }
            else if (gbpDifference < 0) { gbpStat = "Downer" }
            else if (gbpDifference === 0 ) {gbpStat = state.gbpStatus}

            var euroStat = "";
            for (let i in state.bitcoinValues[2]) {
                var z = state.bitcoinValues[2]["rate_float"];
            }
            var euroDifference = parseFloat(action.bitcoinValues[2].rate_float) - parseFloat(z);
            if (euroDifference > 0) { euroStat = "Upper" }
            else if (euroDifference < 0) { euroStat = "Downer" }
            else if (euroDifference === 0 ) {euroStat = state.euroStatus}

            return {
                ...state,
                bitcoinValues: action.bitcoinValues,
                dollarStatus: dollarStat,
                gbpStatus: gbpStat,
                euroStatus: euroStat
            }
        default:
            return state;
    }
};

export default reducer;