import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export const INITIAL_STATE = {
    tickers: [],
    loading: false,
    error: null,
    interval: JSON.parse(localStorage.getItem('interval')) || 5000,
};

const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        stockTicker: (state = INITIAL_STATE, action) => {
            switch (action.type) {
                case 'CONNECT_SOCKET':
                    return {
                        ...state,
                        tickers: [],
                        loading: true,
                        error: null,
                    };
                case 'CONNECT_SOCKET_SUCCESS':
                    const newTickersArr = [...state.tickers, action.payload];
                    return {
                        ...state,
                        tickers: newTickersArr,
                        loading: false,
                        error: null,
                    };
                case 'CONNECT_SOCKET_ERROR':
                    return {
                        ...state,
                        tickers: [],
                        loading: false,
                        error: action.payload,
                    };
                case 'SET_FETCH_INTERVAL':
                    return {
                        ...state,
                        interval: action.payload,
                    };

                default:
                    return state;
            }
        },
    });

export default createRootReducer;
