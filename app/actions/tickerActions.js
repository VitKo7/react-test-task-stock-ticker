const connectSocket = () => ({
    type: 'CONNECT_SOCKET',
});

const connectSocketSuccess = (ticker) => ({
    type: 'CONNECT_SOCKET_SUCCESS',
    payload: ticker,
});

const connectSocketError = (error) => ({
    type: 'CONNECT_SOCKET_ERROR',
    payload: error,
});

const setFetchInterval = (interval) => ({
    type: 'SET_FETCH_INTERVAL',
    payload: interval,
});

const startFetching = (dispatch, connectFunction) => () => {
    dispatch(connectSocket());
    try {
        connectFunction('AAPL', (data) => {
            dispatch(connectSocketSuccess(data));
        });
    } catch (error) {
        dispatch(connectSocketError(error));
    }
};

export {
    connectSocket,
    connectSocketSuccess,
    connectSocketError,
    setFetchInterval,
    startFetching,
};
