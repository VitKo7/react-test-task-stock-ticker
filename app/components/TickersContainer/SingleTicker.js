import React from 'react';
// import React, { useEffect } from 'react';
// import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import moment from 'moment';
// import { connect } from '../services/tickerService';
// import { tickerAction } from '../actions/tickerActions';
// import usePrevious from '../store/prevTicker';
// import CompareItems from './compare';
// import stockDB from '../stockDB.json';
// const stockDB = require('../stockDB.json');

export default function SingleTicker() {
    // const dispatch = useDispatch();
    // const stock = useSelector((state) => state.ticker, shallowEqual);
    // const stock = JSON.parse(stockDB);

    // const firstLoad = (ticker) => {
    //     dispatch(tickerAction(ticker));
    // };
    // useEffect(() => {
    //     connect('AAPL', firstLoad);
    // }, []);

    // const prevPrice = usePrevious(stock.price);
    // const prevChange = usePrevious(stock.change);
    // const prevPercent = usePrevious(stock.change_percent);

    return (
        <div className="container">
            <div className="ticker-info__line">
                <span className="name">Ticker:</span>
                {/* <span className="value">{stock.ticker}</span> */}
            </div>
            <div className="ticker-info__line">
                <span className="name">Exchange:</span>
                {/* <span className="value">{stock.exchange}</span> */}
            </div>
            <div className="ticker-info__line">
                <span className="name">Price:</span>
                {/* <span className="value">{stock.price}</span> */}
                {/* <CompareItems currItem={stock.price} prevItem={prevPrice} /> */}
            </div>
            <div className="ticker-info__line">
                <span className="name">Change:</span>
                {/* <span className="value">{stock.change}</span>
                <CompareItems currItem={stock.change} prevItem={prevChange} /> */}
            </div>
            <div className="ticker-info__line">
                <span className="name">Change percent:</span>
                {/* <span className="value">{stock.change_percent}%</span>
                <CompareItems
                    currItem={stock.change_percent}
                    prevItem={prevPercent}
                /> */}
            </div>
            <div className="ticker-info__line">
                <span className="name">Last trade time:</span>
                {/* <span className="value">
                    {moment(stock.last_trade_time).format(
                        'MMMM Do YYYY, h:mm:ss a'
                    )}
                </span> */}
            </div>
            <div className="ticker-info__line">
                <span className="name">Dividend:</span>
                {/* <span className="value">{stock.dividend}</span> */}
            </div>
            <div className="ticker-info__line">
                <span className="name">Yield:</span>
                {/* <span className="value">{stock.yield}</span> */}
            </div>
        </div>
    );
}
